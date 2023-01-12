import React from 'react';

import PropTypes from "prop-types";
import './index.less';
import Header from "@components/Header";

const Page = React.memo((props) => {
    const {showNav, nav, children, renderBottom, bodyClass} = props;

    return (<div className='page'>
        {showNav && <Header nav={nav} />}
        <div className={`page-body ${bodyClass}`}>{children}</div>
        {renderBottom && renderBottom()}
    </div>)
})

Page.defaultProps = {
    showNav: true,
    nav: {},
    startSafeArea: true
}
Page.propTypes = {
    showNav: PropTypes.bool,
    nav: PropTypes.object
}
export default Page;
