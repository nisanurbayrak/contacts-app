import React, { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContanct, contacts }) {
  const [form, setForm] = useState({ initialFormValues });

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //form taginin default davranışı submit olunca sayfayı yenilemek bunu engellemek için kullandım.
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContanct([...contacts, form]);
    // setForm({ fullname: "", phone_number: "" });
    // setForm(initialFormValues);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          value={form.fullname}
          placeholder="Fullname"
          onChange={onChangeInput}
        ></input>
      </div>

      <div>
        <input
          name="phone_number"
          value={form.phone_number}
          placeholder="Phone Number"
          onChange={onChangeInput}
        ></input>
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
