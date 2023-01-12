import React from 'react';
import { Form, Input, Button } from 'antd-mobile'
import {Page} from '@components';
const Register = React.memo(() =>{
    return(
        <Page nav={{children: '注册'}}>
            <Form layout='horizontal' mode='card'>
                <Form.Item label='手机号'>
                    <Input placeholder='请输入' />
                </Form.Item>
                <Form.Item label='密码'>
                    <Input placeholder='请输入' />
                </Form.Item>
                <Button color='primary' size='large' block>提交</Button>
            </Form>
        </Page>
    )
});

export default Register;
