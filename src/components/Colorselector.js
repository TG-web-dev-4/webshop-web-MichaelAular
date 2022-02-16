const Colorselector = ({selectionArray, setItemToAdd, itemToAdd}) => {

   const handleOption = (e) => {
       console.log(e.target.value)
       setItemToAdd({...itemToAdd, color:e.target.value})
   }

    const optionsToDisplay = selectionArray.map((item =>
        <option key={item} value={item}> {item}
        </option>))

    return (
        <select className="colorselector" onChange={handleOption}>
            {optionsToDisplay}
        </select>
    )
}

export default Colorselector;