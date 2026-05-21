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
  max-width: 100%;
  max-height: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  object-fit: contain;
  padding: 1rem;
  background-color: white;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    font-size: 1.2rem;
    font-weight: 900;
    margin: 0px;
  }

  &:hover {
    box-shadow: 20px 20px 15px -3px rgba(8, 0, 255, 0.1);
    transform: translate(3px, 3px);
  }

  &:active {
    background-color: #e1a667;
    p {
      color: white;
    }
  }
`;
