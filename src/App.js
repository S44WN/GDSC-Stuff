import ProjectBlog from "./components/ProjectBlog/ProjectBLog";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Profile from "./components/Profile/Profile";
import "./App.css";
import React from "react";
import Accordian from "./components/Accordian/Accordian";

function App() {
  return (
    <React.Fragment>
      {/* <ProjectBlog /> */}
      {/* <Leaderboard /> */}
      <Accordian />
      {/* <Profile /> */}
    </React.Fragment>
  );
}

export default App;
