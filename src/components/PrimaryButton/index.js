import React, { Component }  from 'react';
import EffectButton from 'components/EffectButton';
import './index.less';

class PrimaryButton extends Component {
  render() {
    return (
      <EffectButton
        style = {this.props.style}
        text = {this.props.text}
        className = {'PrimaryButton' + ((this.props.className == undefined) ? ' ' : (' ' + this.props.className))}
        onClick = {this.props.onClick}></EffectButton>
    );
  }

}

export default PrimaryButton;
