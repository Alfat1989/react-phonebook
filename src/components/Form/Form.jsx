import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/todos/todos-actions";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const onChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
  };

  const clearData = () => {
    setName("");
    setPhone("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || phone === "") {
      return alert("enter date");
    }
    dispatch(addContact({ name, phone, id: nanoid(4) }));

    clearData();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Name"
          name="name"
          value={name}
        />
        <input
          onChange={onChange}
          type="tel"
          placeholder="phone"
          name="phone"
          value={phone}
        />
        <button type="submit">Add contacts</button>
      </form>
    </>
  );
};

export default Form;
