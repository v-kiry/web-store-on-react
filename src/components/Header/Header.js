/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from 'react-router-dom';
import useStoreon from 'storeon/react';
import { useState } from 'react'

import styles from './Header.style';

export default function Header() {
  const { cart } = useStoreon('cart');
  const [isActive, setIsActive] = useState(false)

  let totalPrice = cart.map((item) => item.price * item.count);
  let totalItems = cart.map((item) => item.count);
  const resultItems = totalItems.reduce((sum, current) => sum + current, 0);
  const result = totalPrice.reduce((sum, current) => sum + current, 0);

  const clickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <header css={styles.header}>
      <div css={styles.container}>
        <div css={styles.headerNavBlock}>
          <div css={styles.headerLogo}>
            <div css={isActive ? [styles.burgerButton, styles.activeBurgerButton] : styles.burgerButton} onClick={clickHandler}>
              <div></div>
              <div></div>
            </div>
            <Link to='/'>Shop logo</Link>
          </div>
          <ul css={isActive ? [styles.headerMenu, styles.activeHeaderMenu] : styles.headerMenu}>
            <li>
              <Link to='/'>bags</Link>
            </li>
            <li>
              <Link to='/shoes'>shoes</Link>
            </li>
            <li>
              <Link to='/hats'>hats</Link>
            </li>
          </ul>
        </div>
        <div>
        <Link to='/cart'>
          <div css={styles.headerBasket}>
            <span>{resultItems} items / </span>
            <span css={styles.basketPrice}>{result}$</span>
          </div>
        </Link>
        </div>
      </div>
    </header>
  );
}