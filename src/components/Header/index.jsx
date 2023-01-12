import React from 'react';
import {NavBar} from "antd-mobile";

const Header = (props) => {
    const {nav} = props;
    return (<NavBar className='page-nav' backArrow={false} {...nav} />)
};

export default Header;
