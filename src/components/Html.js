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
    const { title, description, styles, scripts, app, children, v } = this.props;
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

        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }} />

          <script src="/assets/js/jquery-2.1.4.min.js"></script>
          <script src="/assets/js/bootstrap/carousel.js"></script>
          <script src="/assets/js/bootstrap/transition.js"></script>
          <script src="/assets/js/bootstrap/button.js"></script>
          <script src="/assets/js/bootstrap/collapse.js"></script>
          <script src="/assets/js/bootstrap/validator.js"></script>
          <script src="/assets/js/underscore.js"></script>
          <script src="https://maps.google.com/maps/api/js?sensor=false"></script>
          <script src="/assets/js/SimpleMap.js"></script>
          <script src="/assets/js/NumberCounter.js"></script>
          <script src="/assets/js/jquery.magnific-popup.min.js"></script>
          <script src="/assets/js/custom.js"></script>

          {scripts.map(script => <script key={script} src={script + '?v=' + v} />)}


        </body>
      </html>
    );
  }
}

export default Html;
