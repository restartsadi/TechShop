import { useState, useEffect, useContext } from "react";
import { Container, Table, Button } from "react-bootstrap";
import UserContext from "../../Context/UserContext";
import "./aboutus.css";

const AboutUs = () => {
  const [message, setMessage] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const { addUser, deleteUser, updateUser } = useContext(UserContext);
  const usersData = JSON.parse(localStorage.getItem("users"));

  // State for form inputs
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  // State for selected user for updating
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Update localStorage whenever name or email changes
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }, [name, email]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there's a selected user for updating
    if (selectedUserId !== null) {
      // Update the user with the new data
      if (name.length <= 0) {
        setMessage("Name field required!");
        return;
      }
      if (email.length <= 0) {
        setMessage("Email field required!");
        return;
      }
      updateUser(selectedUserId, { name, email });

      // Clear the form inputs and reset the selected user
      setName("");
      setEmail("");
      setSelectedUserId(null);
    } else {
      // Create a new user object
      const newUser = {
        id: Date.now(),
        name: name,
        email: email,
      };

      // Add the new user to the context state
      addUser(newUser);

      // Clear the form inputs
      setName("");
      setEmail("");
    }
    setOpenForm(!openForm);
  };

  // Function to handle the "Update" button click
  const handleUpdateClick = (user) => {
    setOpenForm(!openForm);
    // Set the selected user for updating
    setSelectedUserId(user.id);

    // Populate the form fields with the selected user's data
    setName(user.name);
    setEmail(user.email);
  };

  return (
    <Container className="table">
      <h1>Data Inserted from Homepage Form Are shows here...</h1>
      <hr />
      <div className="table-responsive">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersData &&
              usersData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="d-flex flex-column align-items-center">
                      <Button
                        style={{ margin: "15px" }}
                        variant="primary"
                        onClick={() => handleUpdateClick(user)}
                      >
                        Update
                      </Button>
                      <Button
                        style={{ margin: "15px" }}
                        variant="danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>

      {openForm && (
        <div className="contact" style={{ textAlign: "center" }}>
          <div className="container">
            <div className="row second_row">
              <div className="col-12 col-md-6 contact-form">
                <p className="p">
                  Want to contact us now? Just drop us a line below.
                </p>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="your@mail.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
          <p className="text-danger my-2">{message}</p>
        </div>
      )}
    </Container>
  );
};

export default AboutUs;
