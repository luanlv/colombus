import React from 'react'

class News extends React.Component {
  render () {
    return (
      <div className="news">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 margin-bottom-30">
              <div className="widget_pw_latest_news">
                <a className="latest-news" href="article.html">
                  <div className="latest-news__date">
                    <div className="latest-news__date__month">May</div>
                    <div className="latest-news__date__day">6</div>
                  </div>
                  <img alt="Why choose our warehousing service?" className="wp-post-image" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" srcSet="/assets/images/placeholders/360x204.png 360w, /assets/images/placeholders/848x480.png 848w" src="/assets/images/placeholders/360x204.png" />
                  <div className="latest-news__content">
                    <h4 className="latest-news__title">Why choose our warehousing service?</h4>
                    <div className="latest-news__author">Đăng bởi Admin</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 margin-bottom-30">
              <div className="widget_pw_latest_news">
                <a className="latest-news" href="article.html">
                  <div className="latest-news__date">
                    <div className="latest-news__date__month">May</div>
                    <div className="latest-news__date__day">6</div>
                  </div>
                  <img alt="Top benefits of hiring our trucking service" className="wp-post-image" sizes="(min-width: 781px) 360px, calc(100vw - 30px)" srcSet="/assets/images/placeholders/360x204.png 360w, /assets/images/placeholders/848x480.png 848w" src="/assets/images/placeholders/360x204.png" />
                  <div className="latest-news__content">
                    <h4 className="latest-news__title">Top benefits of hiring our trucking service</h4>
                    <div className="latest-news__author">Đăng bởi Admin</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-4 margin-bottom-30">
              <div className="widget_pw_latest_news">
                <a className="latest-news  latest-news--inline" href="https://demo.proteusthemes.com/cargopress/2015/05/06/logistic-service-providers-would-understand-your-business/">
                  <div className="latest-news__content">
                    <h4 className="latest-news__title">Logistic service providers would understand your business</h4>
                    <div className="latest-news__author">Đăng bởi Admin</div>
                  </div>
                </a>
                <a className="latest-news  latest-news--inline" href="https://demo.proteusthemes.com/cargopress/2015/05/06/our-trucking-service-ensures-you-best-quality-services-at-all-times/">
                  <div className="latest-news__content">
                    <h4 className="latest-news__title">Our trucking service ensures you best quality services at all times</h4>
                    <div className="latest-news__author">Đăng bởi Admin</div>
                  </div>
                </a>
                <a className="latest-news  latest-news--inline" href="https://demo.proteusthemes.com/cargopress/2015/05/06/we-are-experienced-and-expert-in-the-business-of-logistics/">
                  <div className="latest-news__content">
                    <h4 className="latest-news__title">We are experienced and expert in the business of logistics</h4>
                    <div className="latest-news__author">Đăng bởi Admin</div>
                  </div>
                </a>
                <a className="latest-news  latest-news--more-news" href="https://demo.proteusthemes.com/cargopress/news/">
                  Xem Thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default News;
