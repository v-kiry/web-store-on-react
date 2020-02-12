/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from 'react';
import styles from './CatalogFilters.style';
import iconSearch from '../../assets/img/search.svg';

export default function CatalogFilters(props) {
  const defaultList = props.listItems;
  const arrPrice = props.listItems.map(item => item.props.price)
  const minValue = Math.min.apply(null, arrPrice)
  const maxValue = Math.max.apply(null, arrPrice)
  const [saveStateFilter, setSaveStateFilter] = useState(defaultList);
  const [valueRange, setValueRange] = useState(maxValue);


  const handelChange = (e) => {
    const {value} = e.currentTarget
    const clonedListItems = [...defaultList]
    const newListItems = clonedListItems.filter(item => item.props.price <= value)
    props.onChange(newListItems)
    setSaveStateFilter(newListItems)
    setValueRange(value)
  }

  const searchChange = (e) => {
    const {value} = e.currentTarget
    const clonedItems = [...saveStateFilter]
    const lowerValue = value.toLowerCase()
    const lowerList = clonedItems.map((item) => ({...item, props: {...item.props, name: item.props.name.toLowerCase()}}))
    const listSearchResults = lowerList.filter(item => item.props.name.indexOf(lowerValue) !== -1)
    const isFind = lowerList.find(item => item.props.name.indexOf(lowerValue) !== -1)

    if (isFind) {
      props.onChange(listSearchResults.map((item) => ({...item, props: {...item.props, name: item.props.name[0].toUpperCase() + item.props.name.slice(1)}})))
    } else {
      props.onChange('Not found')
    }
  }
  return(
    <div css={styles.container}>
      <div css={styles.wrapInputRange}>
        <span>{minValue}$</span>
        <input css={styles.inputRange} type="range" min={minValue} max={maxValue} step="25" defaultValue={maxValue} onChange={handelChange}/>
        <span>{valueRange}$</span>
      </div>
      <div css={styles.wrapInputText}>
        <input css={styles.inputText} type="text" placeholder="Search" onChange={searchChange}/>
        <img
          css={styles.inputImgSearch}
          src={iconSearch}
          alt="search"
        />
      </div>
    </div>
  );
}