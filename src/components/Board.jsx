import Grogu from "./Grogu";

function Board() {
  const miArray = [1, 2, 3, 4, 5, 6, 7];
  miArray.fill(null);
  console.log(miArray);

  return (
    <section className="board">
      <div className="cell">
        <Grogu />
      </div>
    </section>
  );
}

export default Board;
