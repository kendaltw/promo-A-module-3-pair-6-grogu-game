// import { useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Board from "./Board";

function App() {

function rollDice (){
  return Math.floor(Math.random() * 4) + 1;
  
}
console.log(rollDice);
  return (
    <>
    <Header/>
    <main className="page">
    <Board/>
        <section>
        <button onClick={rollDice} className="dice">Lanzar Dado</button>
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
    </>
  )
}

export default App
