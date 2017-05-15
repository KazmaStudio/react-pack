import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import './index.less';

var darkColor = function(rgb, number) {

  var bgR = rgb.split('(')[1].split(',')[0];
  var bgG = rgb.split('(')[1].split(',')[1];
  var bgB;

  if (rgb.split('rgba').length > 1) {
    bgB = rgb.split('(')[1].split(',')[2];
    var a = rgb.split('(')[1].split(',')[3].split(')')[0];
    if (parseInt(bgR) === 0 && parseInt(bgG) === 0 && parseInt(bgB) === 0 && parseFloat(a) === parseFloat(0)) {
      a = 1/5;
    }else{
      bgR -= number;
      bgG -= number;
      bgB -= number;
    }
    return 'rgba(' + bgR + ',' + bgG + ',' + bgB + ',' + a + ')';
  }else{
    bgB = rgb.split('(')[1].split(',')[2].split(')')[0];
    //console.log(bgR,bgG,bgB)
    bgR -= number;
    bgG -= number;
    bgB -= number;
    //console.log(bgR,bgG,bgB)
    return 'rgb(' + bgR+',' + bgG + ',' + bgB + ')';
  }

}

var lightColor = function(rgb, number) {

  var bgR = rgb.split('(')[1].split(',')[0];

  var bgG = rgb.split('(')[1].split(',')[1];

  var bgB;

  if (rgb.split('rgba').length > 1) {

    bgB = rgb.split('(')[1].split(',')[2];
    var a = rgb.split('(')[1].split(',')[3].split(')')[0];
    //console.log(bgR,bgG,bgB,a)
    if (parseInt(bgR) === 0 && parseInt(bgG) === 0 && parseInt(bgB) === 0 && parseFloat(a) === parseFloat(1/5)){
      a = 0;
    }else{
      bgR = parseInt(bgR) + number;
      bgG = parseInt(bgG) + number;
      bgB = parseInt(bgB) + number;
    }
    //console.log(bgR,bgG,bgB,a)
    return 'rgba(' + bgR + ',' + bgG + ',' + bgB + ',' + a + ')';

  }else{
    bgB = rgb.split('(')[1].split(',')[2].split(')')[0];
    //console.log(bgR,bgG,bgB)
    bgR = parseInt(bgR) + number;
    bgG = parseInt(bgG) + number;
    bgB = parseInt(bgB) + number;
    //console.log(bgR,bgG,bgB)
    return 'rgb(' + bgR+',' + bgG + ',' + bgB + ')';
  }

}

class EffectButton extends Component {

  constructor(props) {
    super(props);
    this.props = {
        t:'q22'
    }
  }

  touchStart(that, event){
     let bgColor = window.getComputedStyle(that.refs.pickMe).backgroundColor;
     event.target.style.backgroundColor = darkColor(bgColor, 50);
  }

  touchEnd(that, event){
      let bgColor = window.getComputedStyle(that.refs.pickMe).backgroundColor;
      event.target.style.backgroundColor = lightColor(bgColor, 50)
  }

  render() {
    return (
      <button
      ref='pickMe'
      style={this.props.style}
      className = {'EffectButton ' + this.props.className}
      onClick={this.props.onClick}
      onTouchStart = {this.touchStart.bind(event,this)}
      onTouchEnd = {this.touchEnd.bind(event,this)}>
      {this.props.text}
      </button>
    );
  }
}

export default EffectButton;
