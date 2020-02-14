/** @jsx jsx */
import { jsx } from "@emotion/core";
import useStoreon from 'storeon/react';
import styles from './Item.style';

export default function Item({id, name, price, sex, img}) {
  const { dispatch } = useStoreon('products');
  const itemSex = sex

  return(
    <div css={styles.blockItem} onClick={() => dispatch('cart/add', {id, name, price, img})}>
      <img
        css={styles.imgItem}
        src={img.imgUrl}
        alt={img.imgName}
      />
      <span css={styles.nameItem}>{name}</span>
      <span css={styles.priceItem}>{price}$</span>
    </div>
  );
}