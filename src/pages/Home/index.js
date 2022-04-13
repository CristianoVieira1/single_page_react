import React, { useState } from "react";
import { AboutData, DeliveryData } from "../../data";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import About from "../../components/About";
import Shop from "../../components/Shop";
import Dropdown from "../../components/Dropdown";
import Delivery from "../../components/Delivery";
import Menu from "../../components/Menu";
import Form from "../../components/Form";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header />
      <About {...AboutData} />
      <Shop />
      <Delivery {...DeliveryData} />
      <Menu />
      <Form />
    </>
  );
};

export default Home;
