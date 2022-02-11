const Colorselector = ({selectionArray}) => {

    const optionsToDisplay = selectionArray.map((item => <option key={item} value={item}>{item}</option>))
    return (
        <select className="colorselector">
            {optionsToDisplay}
        </select>
    )
}

export default Colorselector;