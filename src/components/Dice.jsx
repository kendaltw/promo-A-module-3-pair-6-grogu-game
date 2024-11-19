function Dice(props) {
  console.log(props.patata);
  const handleClick = () => {
    props.rollDiceClick();
  };
  return (
    <button onClick={handleClick} className="dice">
      Lanzar Dado
    </button>
  );
}

export default Dice;
