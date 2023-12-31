import { AlphaStack, css, styled } from '@ch-four-cuts/bezier-design-system';

export const Container = styled(AlphaStack).attrs({ direction: 'vertical', spacing: 8 })`
  height: 100%;
  padding: 8px;
  overflow-y: auto;
`;

export const Header = styled(AlphaStack).attrs({ direction: 'horizontal', spacing: 8 })`
  align-items: center;
  margin-bottom: 8px;
`;

export const Section = styled(AlphaStack).attrs({ direction: 'vertical', spacing: 8 })`
  ${({ foundation }) => foundation?.rounding.round8}
  ${({ foundation }) => foundation?.elevation.ev3()}
  overflow: visible;
  padding: 16px;
`;

export const Preview = styled.img`
  ${({ foundation }) => foundation?.rounding.round8}
  ${({ foundation }) => foundation?.elevation.ev3()}
  background: ${({ foundation }) => foundation?.theme['bg-grey-dark']};
  width: 100%;
  aspect-ratio: 3 / 2;
  appearance: none;
`;

export const Buttons = styled(AlphaStack).attrs({ direction: 'horizontal', spacing: 8 })``;

export const DropdownInterpolation = css`
  padding: 4px;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
`;
