
function CardTrash({ trash }) {
  
	return (
		<div className="card_trash">
      
      <div>
       {trash.name_category && 
        <img src={"/img/" + trash.name_category.toLowerCase().replaceAll(' ', '-') + ".svg"}></img>
       } 
      </div>

      <div>
			  <h1>{trash.name_category}</h1>
      </div>

		</div>
	);
}

export default CardTrash;