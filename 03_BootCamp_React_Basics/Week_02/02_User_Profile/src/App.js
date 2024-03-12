import "./styles.css";
import { Component } from "react";
// Use Hero, Skills and About component to display your information
import Hero from "./Hero";
import Skill from "./Skills";
import About from "./About";


class App extends Component {
  render() {
    return (
      <>
      {/* render your component here  */}
      <Hero/>
      <Skill/>
      <About/>
      </>

    )}
}
export default App