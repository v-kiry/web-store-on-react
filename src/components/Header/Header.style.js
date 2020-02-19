import { css } from '@emotion/core'
import busketImg from '../../assets/img/busket.png'

export default {
  header:css`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    min-height: 60px;
    background-color: white;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  `,

  container:css`
    max-width: 1263px;
    padding: 0 20px;
    min-height: inherit;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  burgerButton:css`
    display: none;
    margin-right: 20px;
    width: 30px;
    height: 30px;

    @media (max-width: 900px) {
      display: block;
    }

    div {
      height: 3px;
      width: 100%;
      background-color: black;
      transition: transform .3s ease-in-out;

      :nth-of-type(1) {
        margin-top: 11px;
        margin-bottom: 5px;
      }
      :nth-of-type(2) {
        margin-top: 5px;
        margin-bottom: 11px;
      }
    }
  `,

  activeBurgerButton:css`
    div {
      :nth-of-type(1) {
        transform: translateY(4px) rotate(135deg);
      }
      :nth-of-type(2) {
        transform: translateY(-4px) rotate(-135deg);
      }
    }
  `,

  headerNavBlock:css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 455px;
    width: 100%;

    @media (max-width: 900px) {
      width: initial;
    }
  `,

  headerLogo:css`
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;

    @media (max-width: 500px) {
      font-size: initial;
    }
  `,

  headerMenu:css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    max-width: 221px;
    font-size: 18px;
    line-height: 22px;
    width:100%;
    padding: 0;
    margin: 0;

    @media (max-width: 900px) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      padding-top: 60px;
      padding-left: 20px;
      flex-direction: column;
      justify-content: initial;
      align-items: flex-start;
      background-color: white;
      max-width: 60%;
      transform: translateX(-100%);
      transition: transform .3s ease-in-out;
      height: 100vh;
    }

    li {
      @media (max-width: 900px) {
        margin-bottom: 40px;

        :first-of-type {
          margin-top: 50px;
        }
      }
    }

    li {
      position: relative;

      :hover {
        ::after{
          content: '';
          position: absolute;
          display: block;
          width: 100%;
          height: 1px;
          background-color: black;
        }
      }
    }
  `,

  activeHeaderMenu:css`
    @media (max-width: 900px) {
      transform: translateX(0);
    }
  `,

  headerBasket:css`
    font-size: 16px;
    line-height: 20px;
    padding-right: 32px;
    background-image: url(${busketImg});
    background-position: right;
    background-repeat: no-repeat;
    background-size: 20px 20px;

    @media (max-width: 500px) {
      min-height: 20px;

      span {
        display:none;
      }
    }
  `,

  basketPrice:css`
    color: #FFC09D;
  `,
}