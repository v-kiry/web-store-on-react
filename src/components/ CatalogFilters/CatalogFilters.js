/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from 'react';

import styles from './CatalogFilters.style';
import iconSearch from '../../assets/img/search.svg';
import InputRange from '../InputRange'
import { Checkbox } from '@material-ui/core';


export default function CatalogFilters(props) {
  const defaultList = props.listItems;
  const arrPrice = valueMinMax(defaultList);
  const [saveStateFilter, setSaveStateFilter] = useState(defaultList);
  const [saveStateCheckbox, setSaveStateCheckbox] = useState(defaultList);
  const [listForCheckbox, setListForCheckbox] = useState(defaultList);
  const [listForSlider, setListForSlider] = useState(defaultList);
  const [listForSearch, setListForSearch] = useState(defaultList);
  const [value, setValue] = useState(arrPrice);
  const minValue = arrPrice[0];
  const maxValue = arrPrice[1];
  const [checked, setChecked] = useState('');

  function valueMinMax(arr) {
    const arrPrice = arr.map(item => item.props.price);
    return [Math.min.apply(null, arrPrice), Math.max.apply(null, arrPrice)];
  }

  const checkboxChange = (event) => {
    if (event.currentTarget.checked) {
      setChecked(event.currentTarget.value)
      const clonedListItems = [...listForCheckbox]
      const newListItems = clonedListItems.filter(item => item.props.sex === event.currentTarget.value)
      const listIsEmpty = (newListItems.length === 0)
      listIsEmpty ? props.onChange('Not found') : props.onChange(newListItems)
      setValue(valueMinMax(newListItems))
      setSaveStateCheckbox([...clonedListItems])
      setListForSlider(newListItems)
      setListForSearch(newListItems)
    } else {
      setChecked('')
      props.onChange(saveStateCheckbox)
      setListForCheckbox(saveStateCheckbox)
      setSaveStateCheckbox(saveStateCheckbox)
      setListForSlider(saveStateFilter)
      setValue(valueMinMax(saveStateCheckbox))
      // setListForSearch(listForSearch)
    }
  };

  const handelChange = (e, newValue) => {
    const clonedListItems = [...listForSlider]
    const newListItems = clonedListItems.filter(item => (newValue[0] <= item.props.price && item.props.price <= newValue[1]))
    
    props.onChange(newListItems)
    setSaveStateFilter(clonedListItems)
    setListForSearch(newListItems)
    setListForCheckbox(newListItems)
    setValue(newValue)
  }

  const searchChange = (e) => {
    const {value} = e.currentTarget
    const clonedItems = [...listForSearch]
    const lowerValue = value.toLowerCase()
    const lowerList = clonedItems.map((item) => ({...item, props: {...item.props, name: item.props.name.toLowerCase()}}))
    const listSearchResults = lowerList.filter(item => item.props.name.indexOf(lowerValue) !== -1)
    const isFind = lowerList.find(item => item.props.name.indexOf(lowerValue) !== -1)
    // setListForSlider()
    // setListForCheckbox()

    if (isFind) {
      props.onChange(listSearchResults.map((item) => ({...item, props: {...item.props, name: item.props.name[0].toUpperCase() + item.props.name.slice(1)}})))
    } else {
      props.onChange('Not found')
    }
  }

  return(
    <div css={styles.container}>
      <div css={styles.nameFilters}>Price range</div>
      <div css={styles.wrapInputRange}>
        <span css={styles.inputValues}>${minValue}</span>
        <InputRange min={minValue} max={maxValue} onChange={handelChange} value={value} />
        <span css={styles.inputValues}>${maxValue}</span>
      </div>
      <div css={styles.nameFilters}>Sex</div>
      <div css={styles.sortSexBlock}>
        <div>
          <Checkbox
            checked={checked === 'male'}
            onChange={checkboxChange}
            value='male'
          />
          <span>Male</span>
        </div>
        <div>
          <Checkbox
            checked={checked === 'female'}
            onChange={checkboxChange}
            value='female'
          />
          <span>Female</span>
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