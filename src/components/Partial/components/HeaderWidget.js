import React from 'react'
import Link from '../../Link'

class HeaderWidget extends React.Component {
  render () {

    const common = this.props.common

    return (
      <div className="header__widgets">
        <div className="widget-icon-box">
          <div className="icon-box">
            <i className="fa fa-headphones" />
            <h4 className="icon-box__title">{common.title1}</h4>
            <span className="icon-box__subtitle">{common.body1}</span>
          </div>
        </div>
        <div className="widget-icon-box">
          <div className="icon-box">
            <i className="fa fa-clock-o" />
            <h4 className="icon-box__title">{common.title2}</h4>
            <span className="icon-box__subtitle">{common.body2}</span>
          </div>
        </div>
        <div className="widget-icon-box">
          <div className="icon-box">
            <i className="fa fa-envelope-o" />
            <h4 className="icon-box__title">{common.title3}</h4>
            <span className="icon-box__subtitle">{common.body3}</span>
          </div>
        </div>
        <Link to="/contact#form" className="btn btn-info" id="button_requestQuote"> Liên hệ với chúng tôi </Link>
      </div>
    )
  }
}

export default HeaderWidget


