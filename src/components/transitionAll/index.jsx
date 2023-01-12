import React from 'react';
import './index.less';

const TransitionAll = React.memo((props) => {
    const {children} = props;
    return (
        <div className='transition-all'>{children}</div>
    )
})

export default TransitionAll;
