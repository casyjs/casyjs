import React from 'react';
import styled, { keyframes } from 'styled-components';

const arrowAni = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  5% {
    transform: translateX(-0.1rem);
  }
  100% {
    transform: translateX(1rem);
    opacity: 0;
  }
`;

const arrowFixedAni = keyframes`
  5% {
    opacity: 0;
  }
  20% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  --ease: cubic-bezier(0.2, 1, 0.3, 1);

  svg {
    width: 100px;
    height: auto;
    margin: 0 2rem;
    cursor: pointer;
    overflow: visible;
    polygon,
    path {
      transition: all 0.5s var(--ease);
    }
    &:hover polygon,
    &:hover path {
      transition: all 1s var(--ease);
      fill: var(--cp-pri-color);
      /* fill: #ff4136; */
    }

    &:hover .arrow {
      animation: ${arrowAni} 2.5s var(--ease) infinite;
    }
    &:hover .arrow-fixed {
      animation: ${arrowFixedAni} 2.5s var(--ease) infinite;
    }
  }
`;

const NextButton = props => {
  return (
    <Wrapper>
      {props.left && (
        <svg
          width="18px"
          height="17px"
          viewBox="0 0 18 17"
          version="1.1"
          // xmlns="http://www.w3.org/2000/svg"
          // xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="prev"
            transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)"
          >
            <polygon
              class="arrow"
              points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
            />
            <polygon
              class="arrow-fixed"
              points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
            />
            <path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z" />
          </g>
        </svg>
      )}

      {props.right && (
        <svg
          width="18px"
          height="17px"
          viewBox="-1 0 18 17"
          version="1.1"
          // xmlns="http://www.w3.org/2000/svg"
          // xlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <polygon
              class="arrow"
              points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
            />
            <polygon
              class="arrow-fixed"
              points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
            />
            <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z" />
          </g>
        </svg>
      )}
    </Wrapper>
  );
};

export default NextButton;