import React, { Component } from "react";
import { PieSpinner } from "./components/piespinner";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PieSpinner
          duration={5000}
          backgroundColor="rgb(109, 172, 175)"
          border="15px solid white"
          color="white"
          fontSize="1em"
          height="110px"
          width="110px"
        />
      </div>
    );
  }
}

export default App;
