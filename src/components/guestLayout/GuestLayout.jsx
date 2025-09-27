import React from "react";
import GuestHeader from "./GuestHeader";
import GuestFooter from "./GuestFooter";
import { Outlet } from "react-router-dom";  // ✅ Required for nested routes

const GuestLayout = () => {
  return (
    <>
      {/* Header */}
      <GuestHeader />

      {/* Page Content */}
      <div className="container my-4">
        <Outlet /> {/* ✅ This renders Home, About, Feedback, Contact */}
      </div>

      {/* Footer */}
      <GuestFooter />
    </>
  );
};

export default GuestLayout;

