import React from 'react';
import { StyledComponent } from 'styled-components';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  readonly size?: number | string;
  readonly rotate?: number;
  readonly spinner?: boolean;
  readonly title?: string;
  readonly desc?: string;
}

export type IconComponentType = StyledComponent<
  'svg',
  Record<string, unknown>,
  IconProps,
  never
>;
