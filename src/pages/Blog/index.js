import React, { Component }  from 'react';
import { browserHistory } from 'react-router'

class Blog extends Component {

  push(path, event) {
    browserHistory.isPop = false;
    browserHistory.push('/'+path);
  }

  pop() {
    browserHistory.isPop = true;
    browserHistory.goBack();
  }

  render() {
    return (
      <div className='page'>
        <h1>BLOG</h1>
        <button onClick={this.push.bind(this, 'about')}>About</button>
        <br/>
        <button onClick={this.pop.bind()}>Back</button>
      </div>
    );
  }
}

export default Blog;
