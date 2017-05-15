import React, { Component }  from 'react';
import { hashHistory } from 'react-router'

class Blog extends Component {

  push(path, event) {
    hashHistory.isPop = false;
    hashHistory.push('/'+path);
  }

  pop() {
      hashHistory.isPop = true;
      console.log(hashHistory.goBack);
      hashHistory.goBack();
      //window.history.go(-1);
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
