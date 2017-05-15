import React, { Component }  from 'react';
import { hashHistory } from 'react-router'
import PrimaryButton from 'components/PrimaryButton';
import './index.less';

class About extends Component {

  constructor(props) {
    super(props);
  }

  push(path, event) {
    hashHistory.isPop = false;
    hashHistory.push('/'+path);
  }

  pop() {
    hashHistory.isPop = true;
    hashHistory.goBack();
  }

  run() {
    let message ={
      func: 1
    }
    window.webkit.messageHandlers.webViewApp.postMessage(message);
  }

  render() {
    return (
      <div className='page About'>
        <h1>ABOUT</h1>
        <PrimaryButton onClick={this.push.bind(this, 'blog')} text='Blog' className='test'></PrimaryButton>
        <br/>
        <button onClick={this.pop.bind()}>Back</button>
        <button onClick={this.run.bind()}>run iOS</button>
      </div>
    );
  }
}

export default About;
