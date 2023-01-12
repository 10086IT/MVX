import React from 'react';
import {DownFill, PlayOutline} from "antd-mobile-icons";
import {Avatar, List, Swiper, Toast} from "antd-mobile";
import './index.less';

const TabList = (props) => {
    const {data, title} = props;
    const items = data.map((value, index) => (
        <Swiper.Item key={index}>
            <div
                onClick={() => {
                    Toast.show(`你点击了卡片 ${index + 1}`)
                }}
            >
                <List className='tab-list-list'>
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
            <div className='tab-list-header'>
                <div className='tab-list-header-left'>
                    <span>{title}</span>
                    <div className='tab-list-header-left-play' >
                        <PlayOutline />&nbsp;播放
                    </div>
                </div>
                <div className='tab-list-header-right'>
                    查看更多<DownFill className='tab-list-header-right-ico' />
                </div>
            </div>
            <Swiper
                className='tab-list-swiper'
                indicator={() => null}
            >
                {items}
            </Swiper>
        </>
    );
};

export default TabList;
