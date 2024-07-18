import React, { useState } from "react";

function Form() {
  //statemanagement
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //event handler

  // const handleNameChange = (e) => {
  //   setUser({
  //     name: e.target.value,
  //     email,
  //     password,
  //   });
  // };

  // const handleEmailChange = (e) => {
  //   setUser({
  //     name ,
  //     email:e.target.value,
  //     password,
  //   });
  // };
  // const handlePasswordChnage = (e) => {

  // };

  const handleChnage = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(name, email, password);
    console.log("form is submitted");

    console.log(user)
  };

  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="name"
            onChange={handleChnage}
            value={user.name}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
            onChange={handleChnage}
            value={user.email}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="password"
            onChange={handleChnage}
            value={user.password}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
