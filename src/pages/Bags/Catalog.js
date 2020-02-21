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
    sex={item.sex}
  />
  );

export default function Catalog() {
  const [moreItems, setMoreItems] = useState(0);
  const [filteredListItems, setFilteredList] = useState(listItems)
  let itemsOnPage = moreItems + 10;
  let closeItem =  filteredListItems.length - filteredListItems.length;
  let isAllItems  = itemsOnPage <= filteredListItems.length;

  const isFound = ((filteredListItems.length !== 10) && ( itemsOnPage !== 10) && ( filteredListItems !== false )) ?  <Button text='Show less' click={() => setMoreItems(closeItem)} /> : false;


  return (
    <div>
      <div css={styles.container}>
        <span css={styles.catalogTitle}>Bags</span>
        <CatalogFilters onChange={(item) => setFilteredList(item)} listItems={listItems}/>
        <div css={styles.blockItems}>
          { (filteredListItems !== false) ? filteredListItems.slice(0, itemsOnPage) : <div css={styles.notFound}>Not found</div> }
        </div>
        { (isAllItems && (filteredListItems !== false)) ?  <Button text='Show more' click={() => setMoreItems(itemsOnPage)} /> : isFound }
      </div>
    </div>
  );
}