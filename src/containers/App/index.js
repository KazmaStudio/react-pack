import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './index.less';
import { browserHistory } from 'react-router'

let pageTransitionName = 'pageSwap';

browserHistory.listen(function(ev) {
  if(browserHistory.isPop){
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
