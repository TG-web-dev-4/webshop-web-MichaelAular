const CustomSelector = ({
  selectionArray,
  className,
  itemToAdd,
  setItemToAdd,
  property,
}) => {
  const optionsToDisplay = selectionArray.map((item) => (
    <option key={item + Math.random()} value={item}>
      {item}
    </option>
  ));

  return (
    <select
      value={itemToAdd[`${property}`]}
      className={className}
      onChange={(e) => {
        let newItemToAdd = { ...itemToAdd };
        newItemToAdd[property] = e.target.value;
        setItemToAdd(newItemToAdd);
      }}
    >
      <option key={Math.random()} value={''}>
        {property}
      </option>
      {optionsToDisplay}
    </select>
  );
};

export default CustomSelector;
