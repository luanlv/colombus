import React from 'react'
import Link from '../../Link'

class Menu extends React.Component {
  render () {
    const services = this.props.services
    const common = this.props.common
    return (
      <div className="header__navigation">
        <nav className="collapse navbar-collapse" id="cargopress-navbar-collapse">
          <ul className="main-navigation js-main-nav js-dropdown">
            <li>
              <Link to={common.menu.path1} >{common.menu.menu1}</Link>
            </li>
            <li className="menu-item-has-children">
              <Link to={common.menu.path2} >{common.menu.menu2}</Link>
              <ul role="menu" className="sub-menu">

                <li>
                  <Link to={"/service/" + services.groundtransport.slug}>{services.groundtransport.title}</Link>
                </li>
                <li>
                  <Link to={"/service/" + services.cargo.slug}>{services.cargo.title}</Link>
                </li>
                <li>
                  <Link to={"/service/" + services.warehousing.slug}>{services.warehousing.title}</Link>
                </li>
                <li>
                  <Link to={"/service/" + services.logisticservice.slug}>{services.logisticservice.title}</Link>
                </li>
                <li>
                  <Link to={"/service/" + services.trackingservice.slug}>{services.trackingservice.title}</Link>
                </li>
                <li>
                  <Link to={"/service/" + services.storage.slug}>{services.storage.title}</Link>
                </li>

              </ul>
            </li>
            <li>
              <Link to={common.menu.path3} >{common.menu.menu3}</Link>
            </li>
            <li>
              <Link to={common.menu.path4} >{common.menu.menu4}</Link>
            </li>
            <li>
              <Link to={common.menu.path5} >{common.menu.menu5}</Link>
            </li>
            <li>
              <Link to={common.menu.path6} >{common.menu.menu6}</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu
