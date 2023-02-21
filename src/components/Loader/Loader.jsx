import { Audio } from 'react-loader-spinner';
import { theme } from 'styles/theme';
import { Box } from '../index';

export const Loader = () => {
  return (
    <Box
      mt={theme.space[7]}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Audio
        height="80"
        width="80"
        color={theme.colors.accent}
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </Box>
  );
};
