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

export default function Hats() {
  const [moreItems, setMoreItems] = useState(0);
  const [filteredListItems, setFilteredList] = useState(listItems)
  let itemsOnPage = moreItems + 10;
  let closeItem =  filteredListItems.length - filteredListItems.length;
  let isAllItems  = filteredListItems.length <= itemsOnPage;
  const isFound = ( (filteredListItems.length !== 10) && ( itemsOnPage !== 10) && ( filteredListItems !== false ) ) ? <Button text='Show less' click={() => setMoreItems(closeItem)}/> : false;
  return (
    <div>
      <div css={styles.container}>
        <span css={styles.catalogTitle}>Bags</span>
        <CatalogFilters onChange={(item) => setFilteredList(item)} listItems={listItems}/>
        <div css={styles.blockItems}>
          { (filteredListItems !== false) ? filteredListItems.slice(0, itemsOnPage) : <div css={styles.notFound}>Not found</div> }
        </div>
        { (isAllItems && (filteredListItems === false)) ? <Button text='Show more' click={() => setMoreItems(itemsOnPage)}/> : isFound }
      </div>
    </div>
  );
}