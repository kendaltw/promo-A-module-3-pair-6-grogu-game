function Form(props) {
  const handleChange = (ev) => {
    setName({ ...props.name, name: ev.target.value });
    console.log(ev.target.value);
  };

  return (
    <form className="form">
      <label htmlFor=""></label>
      <input onChange={handleChange} type="text" />
    </form>
  );
}

export default Form;
