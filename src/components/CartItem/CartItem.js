/** @jsx jsx */
import { jsx } from "@emotion/core";
import useStoreon from 'storeon/react';

import styles from './CartItem.style';

export default function CartItem({id, name, price, img, count}) {
  const { dispatch, products } = useStoreon('products');
  const handelChange = (e) => {
    const {value} = e.currentTarget
    console.log(value)
    dispatch('cart/changeCount', {id, name, price, img, count: value})
  }

  let isMoreOne = count > 1

  return (
    <div css={styles.rowCart}>
      <span css={styles.colCart} style={{width: '40.65%'}}>
        <img
          css={styles.imgItem}
          src={img.imgUrl}
          alt={img.imgName}
        />
        <span css={styles.nameItem}>{name}</span>
      </span>
      <span css={isMoreOne ? styles.colCart : styles.colCartMoreOne} style={{width: '20.9%', display: 'block'}}>
        <div>{price*count}$</div>
        {isMoreOne ? false : <div css={styles.priceItem}>{price}$ per item</div>}
      </span>
      <span css={styles.colCart} style={{width: '38.45%'}}>
        <div css={styles.blockInput}>
          <input css={styles.input} type="number" min="1" defaultValue={count} onChange={handelChange}/>
          <a css={styles.exit} onClick={() => dispatch('cart/del', id)}></a>
        </div>
      </span>
    </div>
  );
}