import {  Popover, PopoverTrigger, Text, Image, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import "../pages/HomePage.css";
import TopNavbar from "../components/Navbar/TopNavbar";
import logo from "../assets/logo.jpg";
import { Navigate, useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import login from "../assets/login.jpg"
import truck from "../assets/truck.png"
import cart from "../assets/cart.jpg"
import { Categories_Data } from "../assets/Data";
import { Link } from "react-router-dom";


const HomePage = () => {
  // const navigate = useNavigate();
  // const [scrollTop, setScrollTop] = useState(0);
  // let name = localStorage.getItem("userName");
  // let role = localStorage.getItem("role");

  // const onScroll = () => {
  //   const winScroll = document.documentElement.scrollTop;
  //   const height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   const scrolled = (winScroll / height) * 100;
  //   setScrollTop(scrolled);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  // }, []);

  // const handleLogout= ()=> {
  //   localStorage.clear();
  //   window.location.reload(false);
  // }
  return (
    <>
      <div className="div_one_container">
        <p>WELCOME TO KITCHEN COOK</p>
      </div>
      <div className="div_two_container">
        <div className="logo">
           <img src={logo} alt="logo" />
        </div>
        <div className="searchbox">
        <input
          className="searchbox_input"
            type="text"
            id="Email"
            name="title"
            placeholder="Enter Title or Keyword"
            />
             <input
            className="searchbox_button--submit"
            value="SEARCH"
            type="submit"
          />
        </div>
        <div className="div_three_container">
        <div className="entry">
        <img src={login} alt="login icon" />
        <p>Login</p>
        </div>
        <div className="entry">
        <img src={truck} alt="truck icon" />
        <p>Your Order</p>
        </div>
        <div className="entry">
        <img src={cart} alt="cart icon" />
        <p>Cart</p>
        </div>
        </div> 
      </div>
      <div className="category_container">
       
      </div>
    </>
  );
};

export default HomePage;
