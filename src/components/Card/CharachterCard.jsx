import styled from "styled-components";
export function CharachterCard({ hpInfo }) {
  return (
    <HpCardInfo className="hpCard">
      <img src="https://ik.imagekit.io/hpapi/harry.jpg" />
      <p>harryPotter</p>
    </HpCardInfo>
  );
}
const HpCardInfo = styled.div``;
