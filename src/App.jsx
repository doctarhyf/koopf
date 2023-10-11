import { Typography, Card } from "@material-tailwind/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";
import Home from "./pages/Home";
import { GetLoogedInUser } from "./db/sb";
import Layout from "./pages/Layout";
import { DEBUG } from "./helpers/const";
import NoPage from "./pages/NoPage";

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);

  useState(() => {
    setLoggedInUser(GetLoogedInUser());
  }, []);

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={loggedInUser ? <Home /> : <Login />}>
          <Route index element={<Home />} />
        
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
