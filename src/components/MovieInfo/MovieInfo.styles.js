import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  display: flex;
  gap: ${p => p.theme.space[5]}px;

  img {
    border-radius: ${p => p.theme.radii.normal};
  }
`;
export const Info = styled.div`
  padding-top: ${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
`;

export const AddSection = styled.section`
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[5]}px;
`;

export const StyledLink = styled(Link)`
  padding: 10px 32px;
  max-width: 196px;
  max-height: 42px;

  display: flex;
  align-items: center;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  text-align: center;

  background-color: ${p => p.theme.colors.backgroundColorHeader};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  border: 2px solid transparent;
  outline: none;

  transition: background-color ${p => p.theme.transition},
    border-color ${p => p.theme.transition}, color ${p => p.theme.transition},
    transform ${p => p.theme.transition}, box-shadow ${p => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.backgroundColor};
    border: 2px solid ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.text};
    transform: translateY(-2px);
    box-shadow: 0 5px 0 ${p => p.theme.colors.accent};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 0 ${p => p.theme.colors.accent};
  }
`;
