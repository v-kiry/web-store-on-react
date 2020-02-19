/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Global, css } from '@emotion/core';
import './assets/fonts/fonts.css'

import Header from './components/Header';
import Main from './components/Main';

const bodyFillColor = `#FAFAFA`;

function App() {
  return (
   <div>
     <Global styles={css`
        body {
          background: ${bodyFillColor};
          font-family: 'Montserrat', sans-serif;
        }

        a {
          cursor: pointer;
          color: inherit;
          text-decoration: inherit;
        }

        .input-range__slider {
          appearance: none;
          background: #FFC09D;
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
          width: 1rem;
        }

        .input-range__slider:active {
          transform: scale(1.3);
        }

        .input-range__slider:focus {
          box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2);
        }

        .input-range--disabled .input-range__slider {
          background: #cccccc;
          border: 1px solid #cccccc;
          box-shadow: none;
          transform: none;
        }

        .input-range__slider-container {
          transition: left 0.3s ease-out;

          :active, :hover {
            .input-range__label--value {
              opacity: 1;
            }
          }
        }

        .input-range__label {
          display:block;
          color: #aaaaaa;
          font-size: 0.8rem;
          transform: translateZ(0);
          white-space: nowrap;
        }

        .input-range__label--min,
        .input-range__label--max {
          display: none;
          bottom: -1.4rem;
          position: absolute;
        }

        .input-range__label--min {
          left: 0;
        }

        .input-range__label--max {
          right: 0;
        }

        .input-range__label--value {
          position: absolute;
          display: block;
          top: -1.8rem;
          transform: translateX(-7px) rotateZ(-45deg);
          background: #FFC09D;
          height: 15px;
          width: 10px;
          opacity: 0;
          transition: opacity .1s ease-in-out
        }

        .input-range__label-container {
          /* left: -50%;
          position: relative; */
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: #FFC09D;
          color: white;
          transform: translateX(-4px) rotateZ(45deg);
          height: 20px;
          width: 40px;
          border-radius: 2px;
        }

        .input-range__label--max .input-range__label-container {
          left: 50%;
        }

        .input-range__track {
          background: #eeeeee;
          border-radius: 0.3rem;
          cursor: pointer;
          display: block;
          height: 0.3rem;
          position: relative;
          transition: left 0.3s ease-out, width 0.3s ease-out;
        }

        .input-range--disabled .input-range__track {
          background: #eeeeee;
        }

        .input-range__track--background {
          left: 0;
          margin-top: -0.15rem;
          position: absolute;
          right: 0;
          top: 50%;
        }

        .input-range__track--active {
          background: #FFC09D;
        }

        .input-range {
          height: 1rem;
          position: relative;
          width: 100%;
        }
      `
      }
     />
     <div>
        <Header />
        <Main />
     </div>
   </div>
  );
}

export default  App;
