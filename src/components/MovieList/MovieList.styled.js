import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[3]}px;

  li {
    transition: color ${p => p.theme.transition},
      transform ${p => p.theme.transition};
    &:hover,
    &:focus {
      color: ${p => p.theme.colors.accent};
      transform: scale(1.01);
    }
  }
`;
