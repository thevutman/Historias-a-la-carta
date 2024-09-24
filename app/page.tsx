import React from "react";
import Hero from "./_components/hero"
import Introduccion from "./_components/introduccion"
import Seccionario from "./_components/seccionario"
import Section1 from "./_components/section1"
import Section2 from "./_components/section2"
import Navbar from "./_components/navbar"

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Introduccion></Introduccion>
      <Seccionario></Seccionario>
      <Section1></Section1>
      <Section2></Section2>
    </div>
  );
}
