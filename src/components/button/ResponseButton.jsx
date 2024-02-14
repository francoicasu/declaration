import PropTypes from "prop-types";

export const ResponseButton = ({ newClass, children, ...props }) => {
  return (
    <button className={`btn ${newClass}`} {...props}>
      {children}
    </button>
  );
};

ResponseButton.propTypes = {
  newClass: PropTypes.string,
  children: PropTypes.string,
};
