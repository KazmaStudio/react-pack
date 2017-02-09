import React from 'react';
import Header from 'components/Header';
import List from 'components/List/List';

const twoColListItems = [
  { title: 'first' },
  { title: 'Two' },
  { title: 'Three' },
  { title: 'Four' }
];

export default () => (
  <article className="home">
    <Header title="Home"/>
    <List columns={2} items={twoColListItems} />
  </article>
);
