import { CharachterCard } from "../Card/CharachterCard";
import styled from "styled-components";

export function Board({ hpInfo, sethpInfo }) {
  return (
    <GameBoard>
      <CharachterCard hpInfo={hpInfo} sethpInfo={sethpInfo} />
    </GameBoard>
  );
}

const GameBoard = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  gap: 1rem;
  row-gap: 4rem;
  column-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: auto;
`;
