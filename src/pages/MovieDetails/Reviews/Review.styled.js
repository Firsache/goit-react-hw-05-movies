import styled from 'styled-components';

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  transition: background-color ${p => p.theme.transition},
    color ${p => p.theme.transition}, border-radius ${p => p.theme.transition};

  &:hover {
    background-color: ${p => p.theme.colors.backgroundColorHeader};
    color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal};
  }
`;
