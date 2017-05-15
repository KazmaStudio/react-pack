import React, { Component }  from 'react';
import EffectButton from 'components/EffectButton';
import './index.less';

class PrimaryButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      effectButtonStyle : {
        borderRadius: '4px',
        width: '80%',
        height: '44px',
        color: 'white',
        fontSize: '16px',
        fontWeight: '100',
        margin: '0 10%'
      }
    };
  }

  render() {
    return (
      <EffectButton
        style={mergeOptions(this.state.effectButtonStyle,this.props.style)}
        text={this.props.text}
        onClick={this.props.onClick}></EffectButton>
    );
  }

}

function mergeOptions(obj1,obj2){
  var obj3 = {};
  for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
  for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
  return obj3;
}

export default PrimaryButton;
