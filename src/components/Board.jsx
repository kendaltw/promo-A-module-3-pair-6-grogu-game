import Grogu from "./Grogu";

function Board() {
  const miArray = [1, 2, 3, 4, 5, 6, 7];
  miArray.fill(null);
  console.log(miArray);

  return (
    <section className="board">
      {miArray.map((cell, index) => {
        return <div key={index} className="cell"></div>;
      })}
    </section>
  );
}

export default Board;

/*
Posición de Grogu
Al cargar la página, Grogu esté en la primera celda

*/
