import styled from "styled-components";
export default function Header({ count, bestScore }) {
  return (
    <Head>
      <div className="headerContainer">
        <h1 className="gameName">Harry Potter Memory Game</h1>
        <div className="scoreContainer">
          <h3>Count: 📝 {count}</h3>
          <h3> Best Score: 🏆 {bestScore}</h3>
        </div>
      </div>
      <h2>
        Get points by clicking on an Harry Potter Charachters but don't click on
        any more than once!
      </h2>
    </Head>
  );
}

const Head = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3,
  h2 {
    font-size: 1.5rem;
    margin: 0px;
    text-align: center;
  }

  .headerContainer {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    padding-top: 1rem;
    gap: 2rem;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    background-color: #d1d0d0;
    .gameName {
      padding-left: 1rem;
      font-family: "Parry Hotter";
    }
  }

  .scoreContainer {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    font-family: "Parry Hotter";
  }

  @media screen and (max-width: 665px) {
    .headerContainer {
      display: flex;
      flex-direction: column;
      .gameName {
        padding: 0px;
        margin: 0px;
      }
      .scoreContainer {
        padding: 0px;
      }
    }
    h2 {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;
