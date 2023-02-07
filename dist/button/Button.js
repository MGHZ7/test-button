export const Button = props => {
  return /*#__PURE__*/React.createElement("button", {
    className: `${props.className} rounded-full p-2`,
    onClick: props.onClick
  }, props.children);
};