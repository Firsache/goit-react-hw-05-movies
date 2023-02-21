import styled from 'styled-components';

export const HeaderBlock = styled.header`
  /* margin: 0 auto; */
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.backgroundColorHeader};

  font-size: ${p => p.theme.fontSizes.m};
`;

export const Navigation = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[5]}px;
`;
