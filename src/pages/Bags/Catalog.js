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
  const [filteredListItems, setFilteredList] = useState(listItems)
  const [moreItems, setMoreItems] = useState(10);
  const itemsCount = ((filteredListItems.length - moreItems) > 10)  ?   10 : (filteredListItems.length % moreItems);
  let isAllItems  = itemsCount !== 0;

  function countMoreItems (value) {
    if (value < 10) {
      setMoreItems(filteredListItems.length)
    } else {
      setMoreItems(10)
    }
  }

  console.log(" ")
  console.log("itemsCount: ", itemsCount)
  console.log("moreItems: ", moreItems)
  console.log("filteredListItems.length: ", filteredListItems.length)
  return (
    <div>
      <div css={styles.container}>
        <span css={styles.catalogTitle}>Bags</span>
        <CatalogFilters onChange={(item) => {setFilteredList(item); countMoreItems(filteredListItems.length)}} listItems={listItems}/>
        <div css={styles.blockItems}>
          { (filteredListItems !== false) ? filteredListItems.slice(0, moreItems) : <div css={styles.notFound}>Not found</div> }
        </div>
        { isAllItems && (filteredListItems !== false) && filteredListItems.length > 10 ?  <Button text='Show more' click={() => setMoreItems(moreItems + itemsCount)} /> : false }
      </div>
    </div>
  );
}