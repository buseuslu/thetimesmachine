import React from 'react'
import axios from 'axios'
import {Animated} from 'react-animated-css'
const key = process.env.ACCESS_TOKEN_KEY

const initialState = { data: {}, errors: {}, loading: 'waiting' }

class Randomizer extends React.Component {
  constructor() {
    super()

    this.state = initialState

    this.handleClick = this.handleClick.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleReset(e) {
    const randMonth = Math.ceil(Math.random() * 12)
    const randYear = Math.floor(Math.random() * (2016 - 1920) + 1920)
    this.setState({ data: { month: randMonth, year: randYear }})
    this.handleClick(e)
  }

  componentDidMount() {
    const randMonth = Math.ceil(Math.random() * 12)
    const randYear = Math.floor(Math.random() * (2016 - 1920) + 1920)
    this.setState({ data: { month: randMonth, year: randYear }})
    console.log(this.state.data.year, this.state.data.month, key)
  }

  handleClick(e) {
    this.setState({ loading: 'true' })
    e.preventDefault()
    console.log(this.state.data.year, this.state.data.month, key)
    axios.get(`https://api.nytimes.com/svc/archive/v1/${this.state.data.year}/${this.state.data.month}.json?api-key=${key}`)
      .then(res => {
        const stories = res.data.response.docs.filter(story => story.keywords.find(item => {
          return (item.value.includes('Technology') || item.value.includes('TECHNOLOGY'))
        }) || (story.section_name !== null && story.section_name.includes('Technology')))
        this.setState({ stories, loading: 'false' })
      })
      .catch(err => console.log(err))
      .catch(err => this.setState({ errors: err.response.data.errors }))
    console.log(this.state)
  }

  render() {

    let content
    let button
    const months = [ null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

    if (this.state.loading === 'true') {
      button = null
      content =
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 id="loading" className="title">
            Loading...
            </h1>
          </div>
        </div>
      </section>
    } else if ( this.state.loading === 'waiting' || this.state.loaderror ) {
      content =
      <div className="container has-text-centered">
        <div className="section">
          <button onClick={this.handleClick} className="button is-black has-text-white">Randomizer</button>
        </div>
      </div>
    } else {
      button =
      <div className="container has-text-centered">
        <div className="section">
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <button onClick={this.handleReset} className="button is-black has-text-white">Randomize Again?</button>
          </Animated>
        </div>
        <div className="section is-marginless is-paddingless">
          <h1 id="h1" className="title is-4">Displaying Results for {months[this.state.data.month]} {this.state.data.year}</h1>
        </div>
      </div>
      content =
      this.state.stories.slice(0,20).map((story, i) => {
        return (
          <div  className="container" key={i}>
            <div className="section box">
              <h2 id= "h2"className="title is-5">{story.headline.main}</h2>
              <p>{story.snippet}</p>
              <a href={story.web_url} target="_blank">Read More</a>
            </div>
          </div>
        )
      })
    }

    return (
      <main className="is-fullheight-with-navbar is-black is-black-background">
        {button}
        {content}
      </main>
    )
  }
}

export default Randomizer
