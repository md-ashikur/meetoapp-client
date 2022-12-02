import logo from "./logo.svg";
import "./App.css";
import Timeline from "./Pages/Timeline/Timeline";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Feed from "./Pages/Feed/Feed";
import Community from "./Components/Post/Community/Community";
import Messages from "./Pages/Messages/Messages";
import Notification from "./Pages/Notification/Notification";
import Explore from "./Pages/Explore/Explore";
import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/Settings/Settings";
function App() {
  return (
    <div className="">
      <Navbar />
     
      <Routes>
        {/* ===timeline================= */}
        <Route path="/" element={<Timeline />}>
        <Route
          index
            element={
             <Feed/>
            }
          ></Route>
          <Route
            path="community"
            element={
              <Community/>
            }
          ></Route>
          <Route
            path="messages"
            element={
              <Messages/>
            }
          ></Route>
          <Route
            path="notification"
            element={
              <Notification/>
            }
          ></Route>
          <Route
            path="explore"
            element={
              <Explore/>
            }
          ></Route>
          <Route
            path="profile"
            element={
              <Profile/>
            }
          ></Route>
          <Route
            path="settings"
            element={
              <Settings/>
            }
          ></Route>


        </Route>
      </Routes>
    </div>
  );
}

export default App;
