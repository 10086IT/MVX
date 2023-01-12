import React from 'react';
import { ErrorBlock, Space } from 'antd-mobile'
import {Page} from "@components";

export default (props) => {

    return (
        <Page nav={{children: 404,backArrow: true}}>
                <Space block direction='vertical' style={{ '--gap': '16px' }}>
                    <ErrorBlock status='empty' />
                    {props.message}
                </Space>
        </Page>
    )
}
