// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./components/Header";
import CreateListing from "./components/CreateListing/CreateListing";
import PrivateRoute from "./components/privateRoute";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Mortgage from "./pages/Mortgage";
import Search from "./pages/Search";

// privateRoute
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/listing/:listingId" element={<Listing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createListing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
        

        <Route path="/about" element={<About />} />
        {/* <Provider store={store}>
          <CreateListing />
        </Provider> */}
        <Route path="/Mortgage" element={<Mortgage />}></Route>
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
