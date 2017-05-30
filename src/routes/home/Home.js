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
import {Header, Footer} from '../../components/Partial'
import * as C from './components/index'

class Home extends React.Component {

  componentDidMount () {
    // init();
  }

  render() {
    return (
      <div>

        <C.Slide data={this.props.data} />

        <C.Service data={this.props.data} />

        <C.News data={this.props.data} />

        <C.CoreValue data={this.props.data} />

        <C.AboutUs data={this.props.data} />

        <C.Testimonial data={this.props.data} />

        <C.Partner data={this.props.data} />
      </div>
    );
  }
}

export default Home;
