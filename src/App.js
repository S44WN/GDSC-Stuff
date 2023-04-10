import ProjectBlog from "./components/ProjectBlog/ProjectBLog";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Profile from "./components/Profile/Profile";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <ProjectBlog />
      <Leaderboard />
      <Profile />
    </React.Fragment>
  );
}

export default App;
