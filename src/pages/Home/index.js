import React, { Component }  from 'react';
import { hashHistory } from 'react-router';

const items = [
    { title: 'blog1' },
    { title: 'about' }
];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'HOME'
        }
    }

    push(path, event) {
        hashHistory.isPop = false;
        hashHistory.push('/'+path);
    }

    render() {
        return (
            <div className='page'>
            <h1>{this.state.title}</h1>
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
