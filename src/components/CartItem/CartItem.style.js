import { css } from '@emotion/core';
import exitImg from '../../assets/img/exit.png';

export default {
  rowCart:css`
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px 0;

    :first-of-type {
      padding-top: 0;
    }

    :first-of-type,
    :last-of-type {
      ::after {
        position: absolute;
        bottom: 0;
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: rgba(51, 51, 51, 0.3);
      }
    }

  `,

  colCart:css`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    :first-of-type {
      padding-left: 25px;
    }
  `,

  colCartMoreOne:css`
    display: block;
    align-items: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-top: 17px;
  `,

  nameItem:css`
    margin-left: 44px;
  `,

  blockInput:css`
    display: flex;
    width: 100%;
    padding-right: 66px;
    justify-content: space-between;
    align-items: center;
  `,

  input:css`
    max-width: 67px;
    min-height: 37px;
    background: none;
    border: 1px solid #777777;
  `,

  exit:css`
    width: 17px;
    height: 29px;
    background-image: url(${exitImg});
    background-position: center;
    background-repeat: no-repeat;
  `,

  priceItem:css`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #777777;
  `,
}