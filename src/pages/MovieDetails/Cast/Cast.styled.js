import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[4]}px;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 4 * 16px) / 5);

  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;

  img {
    width: 200px;
    border-radius: ${p => p.theme.radii.normal};
  }
`;
