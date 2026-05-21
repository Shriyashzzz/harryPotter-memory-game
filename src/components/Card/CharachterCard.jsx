import styled from "styled-components";
import { shuffle } from "lodash";
export function CharachterCard({ hpInfo, sethpInfo }) {
  const shufflehpArray = () => {
    sethpInfo(shuffle(hpInfo));
  };
  return (
    <>
      {hpInfo.map((card) => (
        <HpCardInfo
          className="hpCard"
          key={card.name}
          onClick={() => shufflehpArray()}
        >
          <img src={card.image} />
          <p>{card.name}</p>
        </HpCardInfo>
      ))}
    </>
  );
}

const HpCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  object-fit: contain;
  padding-top: 1rem;
  background-color: white;
  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
  p {
    font-size: 1.2rem;
    font-weight: 900;
    padding-bottom: 5px;
  }

  &:hover {
    box-shadow: 20px 20px 15px -3px rgba(0, 242, 255, 0.1);
  }

  &:active {
    background-color: #e1a667;
    p {
      color: white;
    }
  }
`;
