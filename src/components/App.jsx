import { useState, useEffect } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Form from "./Form";
import Footer from "./Footer";

function App(props) {
  const [name, setName] = useState({
    name: "",
  });

  const [position, setPosition] = useState("");

  useEffect(() => {});

  const [goodsRemaining, setGoodsRemaining] = useState("");

  const [diceResult, setDiceResult] = useState("");

  const [gameStatus, setGameStatus] = useState("");

  function rollDice() {
    // console.log("rollDice");
    return Math.floor(Math.random() * 4) + 1;
  }

  return (
    <>
      <Header />
      <main className="page">
        <Form />
        <Board />
        <section>
          <Dice rollDiceClick={rollDice} patata="cualquiercosa" />
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
