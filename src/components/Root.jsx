import React from 'react';
import Header from './Header';
import MobileHeader from './MobileHeader';
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <>
            <Header />
            <MobileHeader />
            <Outlet />
        </>
    )
}
