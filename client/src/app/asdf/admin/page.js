"use client";
import React, { useEffect, useState } from "react";
import UserCard from "../../components/userCard";

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/asdf/admin");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="mx-20 my-3">Subscribed Users: </h1>
      <div className="user-cards-container flex flex-col justify-center items-center m-6">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
