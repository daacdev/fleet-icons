import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { IconProps, IconComponentType } from './types';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const animation = css`
  animation: ${rotate} 2s linear infinite;
`;

export const GenerateIcon = (
  children: React.ReactElement[]
): IconComponentType => {
  return styled.svg.attrs<IconProps>(({ title, desc }) => ({
    children: (
      <>
        {title && <title> {title} </title>}
        {desc && <desc> {desc} </desc>}
        {children.map((Element, key) => (
          <Element.type {...Element.props} key={key} />
        ))}
      </>
    ),
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
  }))<IconProps>`
    fill: ${({ fill }) => fill || 'currentColor'};
    stroke: ${({ stroke }) => stroke || 'currentColor'};
    stroke-width: ${({ strokeWidth }) => strokeWidth || 0};
    width: ${({ size }) => size || '1em;'};
    height: ${({ size }) => size || '1em;'};
    ${({ spinner }) => spinner && animation}
    ${({ rotate }) => rotate && `transform: rotate(${rotate}deg);`}
  `;
};
