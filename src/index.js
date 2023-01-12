import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider} from 'react-router-dom';
import routers from './routers';
import './theme.less';
import { SafeArea} from "antd-mobile";
const renderSafeArea = (position) => {
    return (
        <div style={{background: '#ace0ff'}}>
            <SafeArea position={position} />
        </div>
    )
}

function App() {
    return <React.StrictMode>
        {renderSafeArea('top')}
        <RouterProvider router={routers}/>
        {renderSafeArea('bottom')}
    </React.StrictMode>
}

ReactDOM.render(<App />, document.getElementById('app'));
