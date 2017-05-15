import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './index.less';
import { hashHistory } from 'react-router'

let pageTransitionName = 'pageSwap';

hashHistory.listen(function(ev) {
  if(hashHistory.isPop){
    pageTransitionName = 'reversePageSwap'
  }else{
    pageTransitionName = 'pageSwap';
  }
});
const App = (props) => (
  <main className='viewport'>
    <CSSTransitionGroup component='div' transitionName={pageTransitionName}>
       {React.cloneElement(props.children, { key: props.location.pathname, style: {top: window.pageYOffset} })}
    </CSSTransitionGroup>
  </main>
);

export default App;
