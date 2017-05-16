import React, { Component }  from 'react';
import { hashHistory } from 'react-router'
import PrimaryButton from 'components/PrimaryButton';
import './index.less';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'About'
        };
    }

    push = (path, event) => {
        hashHistory.isPop = false;
        hashHistory.push('/'+path);
    }

    pop() {
        hashHistory.isPop = true;
        hashHistory.goBack();
    }

    run = () =>{
        requestNetwork({
            data: {
                key: 'value'
            },
            callback: (res) => {
                console.dir(res);
                this.setState({
                    title: res.title
                });
            }
        });
    }

    render() {
        return (
            <div className = 'page About'>
            <h1>{this.state.title}</h1>
            <PrimaryButton action = {this.push.bind(event, 'blog')} text = 'Blog' path = 'blog' className = 'About-go-blog-button'></PrimaryButton>
            <br/>
            <button onClick = {this.pop.bind()}>Back</button>
            <button onClick = {this.run.bind()}>run iOS method</button>
            </div>
        );
    }
}

export default About;
