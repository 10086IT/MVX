import React from 'react';
import Entry from "@pages/entry";
import Login from "@pages/user/login";
import Register from "@pages/user/register";
import NotMatch from "@pages/notMatch";
import {createHashRouter} from "react-router-dom";

const routerTable = [
    {path: '/entry', element: <Entry />},
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />},
    {path: '*', element: <NotMatch />}
]
export default createHashRouter(routerTable);
