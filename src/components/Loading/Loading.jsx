import { InfinitySpin } from "react-loader-spinner";

export function Loading() {
  return (
    <div style={divStyle}>
      <InfinitySpin color="purple" />
    </div>
  );
}
/** @type {React.CSSProperties} */
const divStyle = {
  height: "100dvh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
