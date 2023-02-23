import styled from 'styled-components';

export const FormStyled = styled.form`
  /* position: relative; */
  max-width: 500px;
  margin: 0 auto;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  padding-bottom: 0;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  width: 300px;
  border-radius: ${p => p.theme.radii.normal};
  border-width: 2px;

  transition: border-color ${p => p.theme.transition},
    outline-color ${p => p.theme.transition};

  &:hover {
    border-color: ${p => p.theme.colors.accent};
    outline-color: ${p => p.theme.colors.accent};
  }
  &:focus {
    border-color: ${p => p.theme.colors.accent};
    outline-color: ${p => p.theme.colors.accent};
  }
`;

export const Button = styled.button`
  position: absolute;
  top: ${p => p.theme.space[3]}px;
  right: ${p => p.theme.space[3]}px;
`;
