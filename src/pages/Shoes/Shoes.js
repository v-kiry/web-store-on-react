/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from 'react';

import styles from './Shoes.style';
import Item from '../../components/Item';
import Button from '../../components/Button';
import CatalogFilters from '../../components/ CatalogFilters'
import listShoes from "./listShoes";

const listItems = listShoes.map((item) =>
  <Item
    key={item.id}
    id={item.id}
    name={item.name}
    price={item.price}
    img={item.img}
  />
);

export default function Shoes() {
  const [items, showMore] = useState(0);
  const [filteredListItems, setFilteredList] = useState(listItems)

  let isAllItems = items + 10 >= listItems.length

  return (
    <div>
      <div css={styles.container}>
        <span css={styles.catalogTitle}>Shoes</span>
        <CatalogFilters onChange={(item) => setFilteredList(item)} listItems={listItems}/>
        <div css={styles.blockItems}>
          {filteredListItems.slice(0, 10 + items)}
        </div>
        {isAllItems ? false : <Button text='Show more' click={() => showMore(items + 10)}/>}
      </div>
    </div>
  );
}