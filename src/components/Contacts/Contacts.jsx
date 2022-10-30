import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/todos/todos-actions";

const Contacts = () => {
  const filterItem = useSelector((state) => state.contacts.filter);
  const allContacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const visibleContacts = allContacts.filter((el) =>
    el.name.toLowerCase().includes(filterItem.toLowerCase())
  );

  const contactItems = visibleContacts.map(({ name, phone, id }) => {
    return (
      <li key={id}>
        <div className="contact__container">
          <p>
            {name}: <span>{phone}</span>
          </p>
          <button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete contact
          </button>
          <hr />
        </div>
      </li>
    );
  });

  return (
    <>
      <ul>{contactItems}</ul>
    </>
  );
};

export default Contacts;
