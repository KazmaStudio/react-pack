import React, { Component }  from 'react';
import { hashHistory } from 'react-router'

class Blog extends Component {

    push = (path, event) => {
        console.log(1);
        hashHistory.isPop = false;
        hashHistory.push('/'+path);
    }

    pop = () => {
        console.log(1);
        hashHistory.isPop = true;
        hashHistory.goBack();
    }

    render() {
        return (
            <div className='page'>
            <h1>BLOG</h1>
            <button onClick={this.push.bind(event, 'about')}>About</button>
            <br/>
            <button onClick={this.pop.bind()}>Back</button>
            </div>
        );
    }
}

export default Blog;
