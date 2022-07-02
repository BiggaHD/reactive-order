import React, { Fragment } from 'react';
import theme from '../assets/theme.png';
import classes from './Header.module.css';
import CartItem from '../Header/CartItem';

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>🥙 Reactive Meals 🥗</h1>
        <div onClick={props.onOpen}>
          <CartItem />
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={theme} alt="ReactiveMeals" />
      </div>
    </Fragment>
  );
}
