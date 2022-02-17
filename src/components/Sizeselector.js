const Sizeselector = ({ selectionArray }) => {
  const optionsToDisplay = selectionArray.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  return <select className='sizeselector'>{optionsToDisplay}</select>;
};

export default Sizeselector;
