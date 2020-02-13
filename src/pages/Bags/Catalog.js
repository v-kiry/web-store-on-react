/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from 'react';
// import useStoreon from 'storeon/react';

import styles from './Catalog.style';
import Item from '../../components/Item';
import Button from '../../components/Button';
import CatalogFilters from '../../components/ CatalogFilters';
import listBags from './listBags';

const listItems = listBags.map((item) =>
  <Item
    key={item.id}
    id={item.id}
    name={item.name}
    price={item.price}
    img={item.img}
  />
  );

export default function Catalog() {
  const [items, showMore] = useState(0);
  const [filteredListItems, setFilteredList] = useState(listItems)
  let itemsOnPage = items + 10;
  let isAllItems  = itemsOnPage >= filteredListItems.length;


  return (
    <div>
      <div css={styles.container}>
        <span css={styles.catalogTitle}>Bags</span>
        <CatalogFilters onChange={(item) => setFilteredList(item)} listItems={listItems}/>
        <div css={styles.blockItems}>
          {filteredListItems.slice(0, itemsOnPage)}
        </div>
        {isAllItems ? false : <Button text='Show more' click={() => showMore(itemsOnPage)}/>}
      </div>
    </div>
  );
}