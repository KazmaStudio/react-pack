import React, { Component }  from 'react';
import EffectButton from 'components/EffectButton';
import './index.less';

class PrimaryButton extends Component {
  render() {
    return (
      <EffectButton
        style = {this.props.style}
        text = {this.props.text}
        path = {this.props.path}
        className = {'PrimaryButton' + ((this.props.className == undefined) ? ' ' : (' ' + this.props.className))}
        action = {this.props.action}></EffectButton>
    );
  }

}

export default PrimaryButton;
