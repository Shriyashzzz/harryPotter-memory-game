import { CharachterCard } from "../Card/CharachterCard";
import styled from "styled-components";

export function Board({
  hpInfo,
  sethpInfo,
  count,
  setCount,
  bestScore,
  setBestScore,
}) {
  return (
    <GameBoard>
      <CharachterCard
        hpInfo={hpInfo}
        sethpInfo={sethpInfo}
        setCount={setCount}
        count={count}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </GameBoard>
  );
}

const GameBoard = styled.section`
  max-height: 100%;
  max-width: 100%;
  display: grid;
  padding: 15px;
  gap: 1rem;
  row-gap: 4rem;
  column-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: auto;
`;
