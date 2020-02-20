/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from 'react';
import InputRange from 'react-input-range';

import styles from './CatalogFilters.style';
import iconSearch from '../../assets/img/search.svg';
import Checkbox  from '../Checkbox';


export default function CatalogFilters(props) {
  const defaultList = props.listItems;
  const arrPrice = valueMinMax(defaultList);
  const minValue = arrPrice[0];
  const maxValue = arrPrice[1];
  const [saveStateFilter, setSaveStateFilter] = useState(defaultList);
  const [value, setValue] = useState({min: arrPrice[0], max: arrPrice[1]});
  const [checked, setChecked] = useState('');

  function valueMinMax(arr) {
    const arrPrice = arr.map(item => item.props.price);
    return [Math.min.apply(null, arrPrice), Math.max.apply(null, arrPrice)];
  }

  const checkboxChange = (event) => {
    const clonedListItems = [...defaultList]

    if (event.currentTarget.checked) {
      setChecked(event.currentTarget.value)
      const newListItems = clonedListItems.filter(item => (value.min <= item.props.price && item.props.price <= value.max && item.props.sex === event.currentTarget.value))
      const listIsEmpty = (newListItems.length === 0)
      listIsEmpty ? props.onChange(false) : props.onChange(newListItems)
    } else {
      setChecked('')
      props.onChange(clonedListItems.filter(item => (value.min <= item.props.price && item.props.price <= value.max)))
      setSaveStateFilter(clonedListItems.filter(item => (value.min <= item.props.price && item.props.price <= value.max)))
    }
  };

  const handelChange = (value) => {
    const clonedListItems = [...defaultList]
    console.log(value)
    if (checked === '') {
      const newListItems = clonedListItems.filter(item => (value.min <= item.props.price && item.props.price <= value.max))
      const listIsEmpty = (newListItems.length === 0)
      listIsEmpty ? props.onChange(false) : props.onChange(newListItems)
      setSaveStateFilter(newListItems)
    } else {
      const newListItems = clonedListItems.filter(item => (value.min <= item.props.price && item.props.price <= value.max && item.props.sex === checked))
      const listIsEmpty = (newListItems.length === 0)
      listIsEmpty ? props.onChange(false) : props.onChange(newListItems)
      setSaveStateFilter(newListItems)
    }

    setValue(value)
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
      props.onChange(false)
    }
  }

  return(
    <div css={styles.container}>
      <div css={styles.blockFilters}>
        <span css={styles.nameFilters}>Price range</span>
        <div css={styles.wrapInputRange}>
          <span css={styles.inputValues}>${minValue}</span>
          <InputRange minValue={minValue} maxValue={maxValue} formatLabel={value => `$${value}`} onChange={value => handelChange(value)} value={value}/>
          <span css={styles.inputValues}>${maxValue}</span>
        </div>
      </div>
      <div css={styles.blockFilters}>
      <span css={styles.nameFilters}>Sex</span>
        <div css={styles.sortSexBlock}>
            <Checkbox
              checked={checked === 'male'}
              onChange={checkboxChange}
              value='male'
              text='Male'
            />
            <Checkbox
              checked={checked === 'female'}
              onChange={checkboxChange}
              value='female'
              text='Female'
            />
        </div>
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