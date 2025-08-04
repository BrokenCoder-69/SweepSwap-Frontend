// import { useState } from 'react'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
// import './App.css'


//Importing Routes
import Login from "./pages/Login";
import Register from "./pages/Register"



import DashboardLayout from "./pages/dashboard/DashboardLayout";
import UserDashboard from "./pages/dashboard/UserDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";


import ProfileView from "./pages/profile/ProfileView";
import EditProfile from "./pages/profile/EditProfile";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />



        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

        <Route path="/profile" element={<ProfileView />} />
        <Route path="/profile/edit" element={<EditProfile />} />

        {/* Other routes like /login, /register will be added later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

