import React from 'react';
import Header from 'components/Header';
import List from 'components/List/List';

const twoColListItems = [
  { title: 'first1' },
  { title: 'Two1å' },
  { title: 'Three' },
  { title: 'Four' }
];

export default () => (
  <article className="home">
    <Header title="Home"/>
    <List columns={2} items={twoColListItems} />
  </article>
);
