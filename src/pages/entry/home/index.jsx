import React from 'react';
import {Page} from "@components";
import {SquareList, TabList} from '@common';
import {useNavigate} from 'react-router-dom';
import {
    ArrowDownCircleOutline, SearchOutline,
} from 'antd-mobile-icons'
import './index.less';
import {songs, songSquare, tabs} from "@mock";
import {Footer} from "antd-mobile";

const Home = React.memo(() => {
    const router = useNavigate();

    const toPage = (options) => {
        const {key} = options;
        router(key, options);
    }

    const openSearchModal = () => {

    }

    const openDownLoaded = () =>{

    }

    const nav={
        left: <ArrowDownCircleOutline className='home-nav-icon'  onClick={openDownLoaded}/>,
        children: '首页',
        right: <SearchOutline className='home-nav-icon' onClick={openSearchModal} />
    };
    return (
        <Page nav={nav} hasBodySpace>
            {tabs.map(options => (
                <div className='home-body-options' key={options.key} onClick={() => toPage(options)}>
                    <span>{options.icon}</span>
                    <div>{options.title}</div>
                </div>
            ))}
            <div className='home-body'>

               <div className='home-body-tab'>
                   <TabList data={songs} title='最近热搜' />
                   <TabList data={songs} title='新歌推荐' />
               </div>
                <div className='home-body-tab'>
                    <SquareList data={songSquare} title={'海王特选'} />
                    <SquareList data={songSquare} title='方向' />
                </div>
           </div>

            <Footer content='@ 2023 by github user 10086IT'></Footer>
        </Page>
    )
});

export default Home;
