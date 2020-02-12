/** @jsx jsx */
import { jsx } from "@emotion/core";
import useStoreon from 'storeon/react';
import styles from './Cart.style';
import Button from '../../components/Button';
import CartItem from '../../components/CartItem';

export default function Cart() {
  const { cart } = useStoreon('cart')
  let listCartItems = cart.map((item, index) =>
    <CartItem
      key={item.id + index}
      id={item.id}
      name={item.name}
      price={item.price}
      img={item.img}
      count={item.count}
    />
  );

  let totalPrice = cart.map((item) =>
    item.price * item.count
  );

  let result = totalPrice.reduce((sum, current) => sum + current, 0);

  return (
    <div>
      <div css={styles.container}>
        <span css={styles.catalogTitle}>Cart</span>
        <div css={styles.blockRows}>
          <div css={styles.rowCart}>
            <span css={styles.colCart} style={{width: '40.65%'}}>Product</span>
            <span css={styles.colCart} style={{width: '20.9%'}}>Price</span>
            <span css={styles.colCart} style={{width: '38.45%'}}>Quantity</span>
          </div>
          {listCartItems}
          <span css={styles.totalPrice}>Total: {result}$</span>
        </div>
        <Button text='Checkout' styles={{marginRight:'0'}} />
      </div>
    </div>
  );
}