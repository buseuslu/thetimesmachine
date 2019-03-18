import React from 'react'

class Footer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <footer className="position-absolute footer is-paddingless">
        <div className="content has-text-centered">
          <p>The Times machine was created through the <a href="https://developer.nytimes.com/" target="_blank">NYTimes Archive API</a>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
