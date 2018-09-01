const Loading = ({ className }) => (
  <div className={`${classnames('loader')} ${classnames(className)}`} />
);

Loading.defaultProps = {
  className: ''
};

Loading.propTypes = {
  className: PropTypes.string
};

export default Loading;
