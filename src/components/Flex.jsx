function Flex({ children, flexDirection = "row", gap }) {
  const flexContainerStyle = {
    display: "flex",
    flexDirection,
    gap,
    justifyContent: "center", // Center children horizontally
    flexWrap: "wrap",
  };

  return <div style={flexContainerStyle}>{children}</div>;
}

export default Flex;
