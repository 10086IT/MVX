import React from 'react';
import {Avatar,  List} from 'antd-mobile';
import './index.less';

const Me = () => {

    return (
        <div className='me'>
            <div className='me-header'>
                <Avatar className='me-header-left' src={''} />
                <div className='me-header-right'>
                    <div className='me-name'>阿凡特</div>
                    <div>P6021144</div>
                </div>
            </div>
            <List>
                <List.Item>清理缓存</List.Item>
                <List.Item>清理缓存</List.Item>
                <List.Item>清理缓存</List.Item>
                <List.Item>主题配置</List.Item>
                <List.Item>退出登录</List.Item>
            </List>
        </div>
    );
};

export default Me;
