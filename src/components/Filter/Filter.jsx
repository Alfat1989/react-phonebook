import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "../../redux/todos/todos-actions";

const Filter = () => {
  const selector = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const onInputName = (e) => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <label>
      Filter contacts by value
      <input type="text" name="filter" value={selector} onInput={onInputName} />
    </label>
  );
};

export default Filter;
