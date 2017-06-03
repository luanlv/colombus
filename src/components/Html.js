/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children, v, seo } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />

          <link href="/assets/css/style.css" rel="stylesheet" />
          <link href="/assets/css/magnific-popup.css" rel="stylesheet" />
          <link href="//fonts.googleapis.com/css?family=Roboto%3A400%2C700%7CSource+Sans+Pro%3A700%2C900&amp;subset=latin" rel="stylesheet" />
          <script src="/assets/js/modernizr.custom.24530.js" type="text/javascript"></script>
          <link rel="stylesheet" type="text/css"  href={"/css/app.css?v=" +v }/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <script dangerouslySetInnerHTML={{ __html: this.props.scriptTop }} />

        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }} />


          <script
            dangerouslySetInnerHTML={{ __html:
            `head.load("/assets/js/jquery-2.1.4.min.js")`
            + `.js("/assets/js/bootstrap/carousel.js" )`
            + `.js("/assets/js/bootstrap/transition.js" )`
            + `.js("/assets/js/bootstrap/button.js")`
            + `.js("/assets/js/bootstrap/collapse.js")`
            + `.js("/assets/js/bootstrap/validator.js")`
            + `.js("/assets/js/underscore.js")`
            + `.js("https://maps.google.com/maps/api/js?sensor=false")`
            + `.js("/assets/js/SimpleMap.js")`
            + `.js("/assets/js/NumberCounter.js")`
            + `.js("/assets/js/jquery.magnific-popup.min.js")`
            + `.js("/assets/js/custom.js")`
            +  `.js("${scripts[0]}?v=${v}")`
            +  `.js("${scripts[1]}?v=${v}")`}}
          >
          </script>

          <script dangerouslySetInnerHTML={{ __html: this.props.scriptBottom }} />
        

        </body>
      </html>
    );
  }
}

export default Html;
