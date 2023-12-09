import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState, useContext } from "react";
import UserContext from "../Context/UserContext";

import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
const InputUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { users, addUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Load users from localStorage on component mount
  // useEffect(() => {
  //   const storedUsers = localStorage.getItem("users");
  //   if (storedUsers) {
  //     addUser(JSON.parse(storedUsers));
  //   }
  // }, [addUser]);

  const handleAdd = (e) => {
    e.preventDefault();
    const id = Date.now();
    const user = {
      id,
      name,
      email,
    };
    const usersData = JSON.parse(localStorage.getItem("users"));
    localStorage.setItem("users", JSON.stringify([...usersData, user]));
    addUser(user);
    setName("");
    setEmail("");
    console.log(user);

    // Save users to localStorage whenever the users state changes

    navigate("/aboutus");
  };

  return (
    <>
      <div className="contact" style={{ textAlign: "center" }}>
        <div className="container">
          <div className="row first_row">
            <div className="col-md-4"></div>
            <div className="col-md-4 head">
              <h1>Contact</h1>
            </div>
          </div>
          <div className="row second_row">
            <div className="col-12 col-md-6 map">
              <p>Where are we located?</p>
              <iframe
                //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.07301973665!2d90.34971881458003!3d23.7447753845921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf6be3341b5f%3A0xaaf31d01e4d749d0!2z4Kau4KeH4Kaf4KeN4Kaw4KeLIOCmueCmvuCmieCmnOCmv-CmgiDgprLgpr_gpq7gpr_gpp_gp4fgpqE!5e0!3m2!1sbn!2sbd!4v1521014242046"
                width="308px"
                height="309px"
                //frameborder="0"
                style={{ border: "6px solid green" }}
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-12 col-md-6 contact-form">
              <p>Want to contact us now? Just drop us a line below.</p>
              <form onSubmit={handleAdd}>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  //ref={nameRef}
                />
                <input
                  type="email"
                  placeholder="your@mail.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  //ref={emailRef}
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputUser;

// import { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import UserContext from "../Context/UserContext";

// import "./form.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const InputUser = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const { users, addUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   // Load users from localStorage on component mount
//   useEffect(() => {
//     const storedUsers = localStorage.getItem("users");
//     if (storedUsers) {
//       addUser(JSON.parse(storedUsers));
//     }
//   }, [addUser]);

//   const handleAdd = (e) => {
//     e.preventDefault();
//     let id = Date.now();
//     let user = {
//       id,
//       name,
//       email,
//     };
//     addUser(user);

//     // Save users to localStorage whenever the users state changes
//     localStorage.setItem("users", JSON.stringify([...users, user]));

//     // setName("");
//     // setEmail("");
//     navigate("/aboutus");
//   };

//   return (
//     <>
//       <div className="contact" style={{ textAlign: "center" }}>
//         {/* ... (rest of your component code) */}
//         <form onSubmit={handleAdd}>
//           <input
//             type="text"
//             placeholder="Enter Your Name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="your@mail.com"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     </>
//   );
// };

// export default InputUser;
