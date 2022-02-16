const Sizeselector = ({selectionArray,  setItemToAdd, itemToAdd}) => {

    const handleOption = (e) => {
        console.log(e.target.value)
        setItemToAdd({...itemToAdd, size:e.target.value})
    }

    const optionsToDisplay = selectionArray.map((item => <option key={item} value={item}>{item}</option>))
    return (
        <select className="sizeselector" onChange={handleOption}>
            {optionsToDisplay}
        </select>
    )

}

export default Sizeselector;