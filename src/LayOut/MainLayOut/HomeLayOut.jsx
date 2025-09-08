import React from "react";
import Navber from "../../Navber/Navber";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";
import { useAuth } from "../../Hook/authHook";
import Loading from "../../sharedComponent/Loading";

const HomeLayOut = () => {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col">
      {/* Navbar */}
      <Navber user={user} logout={logout} />

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayOut;
