import React from 'react';
import {Page} from "@components";
import {
    AppOutline,
    MessageFill, MessageOutline,
    UnorderedListOutline, UserOutline
} from "antd-mobile-icons";
import Home from "@pages/entry/home";
import Me from './me';
import Writers from './writers';
import School from "@pages/entry/school";
import {Badge, TabBar, Swiper} from "antd-mobile";
import './index.less';


export default function Entry() {
    const [activeKey, setActiveKey] = React.useState('3');
    const swiperRef = React.useRef();
    const [activeArr, setActiveArr] = React.useState([]);
    const pageMainRef = React.useRef([Home, School, Writers, Me]);
    const items = pageMainRef.current.map((PageContainer, index) => {
        return  (
            <Swiper.Item  style={{height: '100%' }} key={index}>
                <div style={{ height: '100%' }}>
                    {activeArr.includes(`${index}`) ? <PageContainer />  : ''}
                </div>
            </Swiper.Item>
        )
    }
       )
    const tabs = [
        {
            key: '0',
            title: '首页',
            icon: <AppOutline />,
            badge: Badge.dot,
        },
        {
            key: '1',
            title: '流派',
            icon: <UnorderedListOutline />,
            badge: '5',
        },
        {
            key: '2',
            title: '我的关注',
            icon: (active) =>
                active ? <MessageFill /> : <MessageOutline />,
            badge: '99+',
        },
        {
            key: '3',
            title: '我的',
            icon: <UserOutline />,
        },
    ];
    const onTabsChange = (index) => {
        setActiveKey(index);
        swiperRef.current.swipeTo(Number(index));
    }
    const renderBottom = () => {
        return (
            <TabBar className='entry-tab' activeKey={activeKey} onChange={onTabsChange}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        )
    }
    React.useEffect(() => {
        if (!activeArr.includes(activeKey)) {
           setActiveArr([...activeArr, activeKey])
        }
    }, [activeKey]);
    return(
        <Page startSafeArea showNav={false} renderBottom={renderBottom}>
            <Swiper
                ref={swiperRef}
                style={{height: '100%'}}
                indicator={() => null}
                defaultIndex={Number(activeKey)}
                onIndexChange={(index)=> setActiveKey(`${index}`)}
            >{items}</Swiper>
        </Page>
    )
}
