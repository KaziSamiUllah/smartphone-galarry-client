import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
       <Outlet></Outlet>
    );
};

export default RootLayout;