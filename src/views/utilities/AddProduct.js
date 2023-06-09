import React from 'react';
import axios from "axios";
import  { useEffect,useState } from "react";
import {  useParams } from "react-router-dom";
import "./newUser.css";
  export default function AddProduct() {
    const [restaurant, setRestaurant] = useState({
      name: "",
      address: "",
      log: "",
    });

    const { id } = useParams();
  
    useEffect(() => {
      loadRestaurant();
    }, []);
  
    const loadRestaurant = async () => {
      const result = await axios.get("http://localhost:8080/restaurant-configuration/restaurant/create");
      setRestaurant(result.data);
    };
  
    const deleteRestaurant = async (id) => {
      await axios.delete(`http://localhost:8080/restaurant-configuration/restaurant/create/${id}`);
      loadRestaurant();
    };
  return (
<div className="newUser">
      <h1 className="newUserTitle">New restaurant</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text"  />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text"  />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};