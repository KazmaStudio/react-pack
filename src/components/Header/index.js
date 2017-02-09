import React, { PropTypes } from 'react';

const { string } = PropTypes;

const Header = ({ title, className }) => {
  const styles = `header-container ${className}`;

  return (
    <header className={styles}>
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

Header.propTypes = {
  className: string,
  title: string
};

export default Header;
