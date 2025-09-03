import React from 'react';
import Navber from '../../Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';
import { useAuth } from '../../Hook/authHook';
import Loading from '../../sharedComponent/Loading';

const HomeLayOut = () => {
  const { user, loading, logout } = useAuth()
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <Navber user={user} logout={logout}></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayOut;