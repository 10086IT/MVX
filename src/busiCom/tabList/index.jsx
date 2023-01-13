import React from 'react';
import {PlayOutline} from "antd-mobile-icons";
import {Avatar, List, Swiper, Toast} from "antd-mobile";
import './index.less';

const TabList = (props) => {
    const {data} = props;
    const items = data.map((value, index) => (
        <Swiper.Item key={index}>
            <div
                onClick={() => {
                    Toast.show(`你点击了卡片 ${index + 1}`)
                }}
            >
                <List className='busi-com-tab-list-list'>
                    {
                        value.map((items, keys) => {
                            return (
                                <List.Item
                                    prefix={<Avatar src={items.imgUrl} />}
                                    description={items.songName}
                                    key={keys}
                                >
                                    {items.singer}
                                </List.Item>
                            )
                        })
                    }

                </List>

            </div>
        </Swiper.Item>
    ))
    return (
        <>
            <div className='busi-com-tab-list-title'>
                <span>大家都在听</span>
                <div className='busi-com-tab-list-title-play' >
                    <PlayOutline />&nbsp;播放
                </div>
            </div>
            <Swiper
                style={{
                    '--border-radius': '8px',
                }}
                indicator={() => null}
            >
                {items}
            </Swiper>
        </>
    );
};

export default TabList;
