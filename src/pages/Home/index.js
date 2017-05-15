import React, { Component }  from 'react';
import { browserHistory } from 'react-router';

const items = [
  { title: 'blog' },
  { title: 'about' }
];

class Home extends Component {

  push(path, event) {
    browserHistory.isPop = false;
    browserHistory.push('/'+path);
  }

  render() {
    return (
      <div className='page'>
        <h1>HOME</h1>
        {items.map((item) => {
          return (
            <button onClick={this.push.bind(this, item.title)}>{item.title}</button>
          )
        })}
      </div>
    );
  }
}

export default Home;
