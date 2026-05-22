import styled from "styled-components";
import { shuffle } from "lodash";
export function CharachterCard({
  hpInfo,
  sethpInfo,
  count,
  setCount,
  bestScore,
  setBestScore,
}) {
  const shufflehpArray = () => {
    sethpInfo((hpInfo) => shuffle(hpInfo));
  };
  const resetCLicks = () => {
    console.log(`before reset: `, hpInfo);
    sethpInfo(hpInfo.map((card) => ({ ...card, clicked: false })));
    setCount(0);
    console.log(`after reset `, hpInfo);
  };
  const checkIfCLicked = (card, setCount) => {
    if (!card.clicked) {
      sethpInfo((hpInfo) =>
        hpInfo.map((hpCard) => {
          if (hpCard.name == card.name) {
            return { ...hpCard, clicked: true };
          } else {
            return hpCard;
          }
        }),
      );
      setCount(count + 1);
    } else {
      checkIfBest(count);
      resetCLicks();
    }
  };

  // checks if the last count is greater than current best score, if yes replaces it

  const checkIfBest = (currentCount) => {
    if (currentCount > bestScore) {
      setBestScore(currentCount);
    }
  };
  return (
    <>
      {hpInfo.map((card) => (
        <HpCardInfo
          className="hpCard"
          key={card.name}
          onClick={(e) => {
            checkIfCLicked(card, setCount);

            shufflehpArray();
          }}
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
  animation: cardPopIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  transition:
    transform 0.15s ease-out,
    box-shadow 0.15s ease-out,
    background-color 0.3s ease-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    font-size: 1.2rem;
    font-weight: 900;
    margin: 0px;
    text-align: center;
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

  @media screen and (max-width: 665px) {
    &:active {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      animation: clickFade 2s 1s ease-in backwards;
      p {
        color: white;
      }
    }
  }

  @keyframes clickFade {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.8);
    }
  }

  /* ADD THIS TO YOUR @KEYFRAMES SECTION */
  @keyframes cardPopIn {
    from {
      opacity: 0;
      transform: scale(0.8) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;
