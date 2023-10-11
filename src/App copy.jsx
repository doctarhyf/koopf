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
    <BrowserRouter basename="koopf">
      <Routes>
        <Route path="/" element={loggedInUser ? <Layout /> : <Login />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
