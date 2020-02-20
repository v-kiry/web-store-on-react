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

    ::after {
      position: absolute;
      bottom: 0;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: rgba(51, 51, 51, 0.3);
    }

    @media (max-width: 500px) {
      flex-direction: column;
      justify-content: center;
    }
  `,

  imgItem:css`
    width: 216px;

    @media (max-width: 900px) {
      width: 81px;
    }

    @media (max-width: 500px) {
      width: initial;
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

      @media (max-width: 500px) {
        padding-left: 0;
        flex-direction: column;
      }
    }

    @media (max-width: 500px) {
      display: flex !important;
      justify-content: space-between;
      width: 100% !important;
      padding: 10px 0;

    }
  `,

  colCartMoreOne:css`
    display: block;
    align-items: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-top: 17px;

    @media (max-width: 500px) {
      display: flex !important;
      justify-content: space-between;
      width: 100% !important;
      padding: 10px 0;
    }
  `,

  nameItem:css`
    margin-left: 44px;

    @media (max-width: 900px) {
      margin-left: 10px;
    }

    @media (max-width: 500px) {
      margin-left: 0;
      padding-top: 20px;
    }
  `,

  blockInput:css`
    display: flex;
    width: 100%;
    padding-right: 66px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
      padding-right:0;
      width: initial;
    }
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

    @media (max-width: 500px) {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  `,

  priceItem:css`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #777777;

    @media (max-width: 900px) {
      font-size: 10px;
    }
  `,

  nameUnit:css`
    display: none;

    @media (max-width: 500px) {
      display: block;
    }
  `,
}