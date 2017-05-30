/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

import {Header, Footer} from '../Partial'

class Layout extends React.Component {

  render() {
    return (
      <div className="boxed-container">
        <Header data={this.props.data}/>

        {this.props.children}

        <Footer data={this.props.data} />
      </div>
    );
  }
}

export default Layout
