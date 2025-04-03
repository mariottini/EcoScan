function Cerca({handleSearch}) {

  function onChange(e) {
    handleSearch(e.target.value);
  }
  return (
    
    <input className="cerca" type="text" placeholder="Cerca.." onChange={onChange}></input>

  )
}

export default Cerca;