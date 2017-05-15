import React, { Component }  from 'react';
import { hashHistory } from 'react-router'
import PrimaryButton from 'components/PrimaryButton';
import NewCom from 'components/NewCom';
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
    console.log(hashHistory.goBack);
    hashHistory.goBack();
    //window.history.go(-1);
  }

  test(){
      alert(111);
  }

  render() {
    return (
      <div className='page About'>
        <NewCom onClick={this.test.bind(this)}/>
        <h1>ABOUT</h1>
        <PrimaryButton onClick={this.push.bind(this, 'blog')} text='Blog' className='test'></PrimaryButton>
        <br/>
        <button onClick={this.pop.bind()}>Back</button>
      </div>
    );
  }
}

export default About;
