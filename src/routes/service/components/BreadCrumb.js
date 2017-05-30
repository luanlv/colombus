import React from 'react'

class BreadCrumb extends React.Component {
  render () {
    return (
      <div className="breadcrumbs">
        <div className="container">
          <span>
            <a className="home" href="index.html" title="Go to CargoPress." rel="v:url">CargoPress</a>
          </span>
          <span>
            <span>Services</span>
          </span>
        </div>
      </div>
    )
  }
}

export default BreadCrumb
