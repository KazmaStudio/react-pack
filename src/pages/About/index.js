import React, { Component }  from 'react';
import { browserHistory } from 'react-router'
import PrimaryButton from 'components/PrimaryButton';
import './index.less';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonStyle : {
        backgroundColor: 'rgb(200,120,120)'
      }
    };
  }

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
        <h1>ABOUT</h1>
        <PrimaryButton onClick={this.push.bind(this, 'blog')} text='Blog' style={this.state.buttonStyle}></PrimaryButton>
        <br/>
        <button onClick={this.pop.bind()}>Back</button>
      </div>
    );
  }
}

export default About;
