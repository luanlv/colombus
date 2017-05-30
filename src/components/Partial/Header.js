import React from 'react'
import Link from '../Link'
import * as C from './components/index'

class Header extends React.Component {
  render () {
    const services = this.props.data.information.value.services
    const common = this.props.data.information.value.common
    return (
      <div className="header_container">
        <div className="container">
          <header className="header">

            <C.Logo common={common} />
            <C.Menu services={services} common={common} />
            <C.HeaderWidget common={common} />
            <C.HeaderNavigation common={common} />

          </header>
        </div>
      </div>
    )
  }
}

export default Header
