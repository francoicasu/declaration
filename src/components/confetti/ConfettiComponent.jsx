import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import PropTypes from 'prop-types'

export const ConfettiComponent = ({ yes, ...props }) => {
  const { width, height } = useWindowSize();

  return <>{yes && <Confetti width={width} height={height} {...props} />}</>;
};

ConfettiComponent.propTypes = {
  yes: PropTypes.bool.isRequired
}
