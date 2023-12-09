import { useState } from "react";
import UserContext from "../Context/UserContext";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  //global state
  //let title = "Tech Shop";
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    // Retrieve existing users from localStorage
    const usersData = localStorage.getItem("users");

    // Check if there is data in localStorage
    if (usersData) {
      // Parse the JSON string into a JavaScript array
      const usersArray = JSON.parse(usersData);

      // Filter out the user with the specified id
      const updatedUsers = usersArray.filter((user) => user.id !== id);

      // Save the updated users back to localStorage
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Optionally, you can also update the state if needed
      setUsers(updatedUsers);
    } else {
      console.log("No data found in localStorage for 'users'");
    }
  };

  const updateUser = (id, updatedUserData) => {
    // Retrieve existing users from localStorage
    const usersData = localStorage.getItem("users");

    // Check if there is data in localStorage
    if (usersData) {
      // Parse the JSON string into a JavaScript array
      const usersArray = JSON.parse(usersData);

      // Find the index of the user with the specified id
      const userIndex = usersArray.findIndex((user) => user.id === id);

      // Check if the user with the specified id exists
      if (userIndex !== -1) {
        // Update the user data
        usersArray[userIndex] = {
          ...usersArray[userIndex],
          ...updatedUserData,
        };

        // Save the updated users back to localStorage
        localStorage.setItem("users", JSON.stringify(usersArray));

        // Optionally, you can also update the state if needed
        setUsers(usersArray);
      } else {
        console.log(`User with id ${id} not found.`);
      }
    } else {
      console.log("No data found in localStorage for 'users'");
    }
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
