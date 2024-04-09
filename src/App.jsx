import React from "react";
import TeacherHomePage from "./pages/TeacherHomePage";
import { Routes, Route } from "react-router-dom";
import ProfileDetails from "./pages/ProfileDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TeacherHomePage />} />
        <Route path="/profile" element={<ProfileDetails />} />
      </Routes>
    </div>
  );
};

export default App;
