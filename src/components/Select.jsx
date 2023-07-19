const Select = (props) => {
  return (
    <select
      className="table__select"
      name="카테고리"
      id=""
      onChange={props.selectHandler}
      onBlur={props.selectBlurHandler}
      value={props.selectState.value}
    >
      {props.options.map((option) => (
        <option value={option.val} key={option.val}>
          {option.title}
        </option>
      ))}
    </select>
  );
};
export default Select;
