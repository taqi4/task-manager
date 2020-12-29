import React from "react";
import Nav from "./Nav";
import Tasks from "./Tasks";
import InitFirebase from "../helper/initFirebase";

function Home() {
  InitFirebase();

  return (
    <>
      <Nav />
      <Tasks />
    </>
  );
}
export default Home;
