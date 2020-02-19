import { css } from '@emotion/core'

export default {
  container: css`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(auto-fill, 50px);
    align-items: stretch;
    margin-bottom: 44px;
    min-height: 50px;
    background-color: white;
    border: 1px solid #C4C4C4;
  `,

  inputText: css`
    min-height: 20px;
    padding-left: 7px;
    padding-bottom: 3px;
    font-size: 15px;
    display: block;
    border: 1px solid #C4C4C4;

    ::placeholder {
      padding: 0;
      margin: 0;
      font-size: 15px;
      color: #b8b8b8;
      width:inherit;
    }
  `,

  inputImgSearch: css`
    display: block;
    margin-left: 5px;
  `,

  blockFilters: css`
    display: flex;
    width: 100%;
    align-items: center;
    border-left: 1px solid #C4C4C4;

    :first-of-type {
      border-left: 0;
      border-right: 0;
    }

    :last-of-type {
      border-left: 0;
      border-right: 0;
    }
  `,

    nameFilters: css`
      display: flex;
      padding: 0 20px;
      height: 100%;
      align-items: center;
      border-right: 1px solid #C4C4C4;
      font-size: 16px;
      font-weight: bold;
      white-space: nowrap;
    `,

  wrapInputText: css`
    display: flex;
    align-items: center;
    padding: 0 20px;
  `,

  wrapInputRange: css`
    display: flex;
    align-items:center;
    justify-content:space-between;
    height:100%;
    width: 100%;
    padding: 0 20px;
  `,

  inputRangeSlider: css`
    .input-range__slider {
  appearance: none;
  background: #3f51b5;
  border: 1px solid #3f51b5;
  border-radius: 100%;
  cursor: pointer;
  display: block;
  height: 1rem;
  margin-left: -0.5rem;
  margin-top: -0.65rem;
  outline: none;
  position: absolute;
  top: 50%;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  width: 1rem; }
  .input-range__slider:active {
    transform: scale(1.3); }
  .input-range__slider:focus {
    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2); }
  .input-range--disabled .input-range__slider {
    background: #cccccc;
    border: 1px solid #cccccc;
    box-shadow: none;
    transform: none; }

.input-range__slider-container {
  transition: left 0.3s ease-out; }

.input-range__label {
  color: #aaaaaa;
  font-family: "Helvetica Neue", san-serif;
  font-size: 0.8rem;
  transform: translateZ(0);
  white-space: nowrap; }

.input-range__label--min,
.input-range__label--max {
  bottom: -1.4rem;
  position: absolute; }

.input-range__label--min {
  left: 0; }

.input-range__label--max {
  right: 0; }

.input-range__label--value {
  position: absolute;
  top: -1.8rem; }

.input-range__label-container {
  left: -50%;
  position: relative; }
  .input-range__label--max .input-range__label-container {
    left: 50%; }

.input-range__track {
  background: #eeeeee;
  border-radius: 0.3rem;
  cursor: pointer;
  display: block;
  height: 0.3rem;
  position: relative;
  transition: left 0.3s ease-out, width 0.3s ease-out; }
  .input-range--disabled .input-range__track {
    background: #eeeeee; }

.input-range__track--background {
  left: 0;
  margin-top: -0.15rem;
  position: absolute;
  right: 0;
  top: 50%; }

.input-range__track--active {
  background: #3f51b5; }

.input-range {
  height: 1rem;
  position: relative;
  width: 100%; }
  `,

  inputValues: css`
    :first-of-type {
      margin-right: 15px;
    }

    :last-of-type {
      margin-left: 15px;
    }
  `,

  sortSexBlock: css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  `,
}