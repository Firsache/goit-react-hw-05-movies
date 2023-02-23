import styled from 'styled-components';

export const HeaderBlock = styled.header`
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.backgroundColorHeader};
  font-size: 22px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[5]}px;

  font-size: ${p => p.theme.fontSizes.m};

  a {
    padding: ${p => p.theme.space[2]}px 0;
  }

  .active {
    padding: ${p => p.theme.space[2]}px 0;
    border-bottom: 2px solid ${p => p.theme.colors.white};
  }
`;
