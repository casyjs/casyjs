import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --menu-width: ${props => (props.width ? props.width : '50px')};
  --menu-height: ${props => (props.width ? props.height : '30px')};
  --bar-thickness: ${props => (props.thickness ? props.thickness : '4px')};
  --trans-speed: 450ms;
  --rotate: 0deg;
  /* -------------------------------- */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

const SubWrapper = styled.div`
  width: var(--menu-width);
  height: var(--menu-height);
  position: relative;
`;

const Menu = styled.div`
  background: black;
  position: absolute;
  width: 100%;
  height: var(--bar-thickness);
  top: 50%;
  transform: translateY(-50%) rotate(var(--rotate));
  transition: top var(--trans-speed) ease-in, transform var(--trans-speed);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    transition: top calc(var(--trans-speed) - 200ms) ease-in,
      transform calc(var(--trans-speed) + 300ms);
  }

  &::before {
    top: calc((var(--menu-height) / 2 - (var(--bar-thickness) / 2)) * -1);
  }

  &::after {
    top: calc(var(--menu-height) / 2 - (var(--bar-thickness) / 2));
  }

  ${MainWrapper}:hover &::before,
  ${MainWrapper}:hover &::after {
    top: 0;
    transform: rotate(90deg);
  }

  ${MainWrapper}:hover & {
    --rotate: 135deg;
  }
`;

const HamToX = props => {
  return (
    <MainWrapper
      width={this.props.width}
      height={this.props.height}
      thickness={this.props.thickness}
    >
      <SubWrapper>
        <Menu />
      </SubWrapper>
    </MainWrapper>
  );
};

export default HamToX;
