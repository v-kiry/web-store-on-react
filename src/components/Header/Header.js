/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from 'react-router-dom';
import useStoreon from 'storeon/react';

import styles from './Header.style';

export default function Header() {
  const { cart } = useStoreon('cart');

  let totalPrice = cart.map((item) => item.price * item.count);

  let totalItems = cart.map((item) => item.count);

  const resultItems = totalItems.reduce((sum, current) => sum + current, 0);
  const result = totalPrice.reduce((sum, current) => sum + current, 0);

  return (
    <header css={styles.header}>
      <div css={styles.container}>
        <div css={styles.headerNavBlock}>
          <div css={styles.headerLogo}><Link to='/'>Shop logo</Link></div>
          <ul css={styles.headerMenu}>
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
          <div css={styles.headerBasket}><Link to='/cart'>{resultItems} items / <span css={styles.basketPrice}>{result}$</span></Link></div>
        </div>
      </div>
    </header>
  );
}