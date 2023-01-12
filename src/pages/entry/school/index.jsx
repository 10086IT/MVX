import React from 'react';
import {Page} from "@components";
import './index.less';
import {schoolList, songsKind} from "@mock";
import {Avatar, List, SideBar} from "antd-mobile";

const School = () => {


    // const stopPopDom = ()=> {
    //     // e.nativeEvent.stopImmediatePropagation();
    //     // e.stopPropagation();
    // }
    return (
        <Page nav={{children: '流派'}}>
            <div className='school-main'>
                <SideBar>
                    {songsKind.map((item, key) => (
                        <SideBar.Item key={key} title={item} />
                    ))}
                </SideBar>
                <div className='school-main-content'>
                    <List>
                        {
                            schoolList.map((item, key) => {
                               return (
                                   <List.Item
                                   key={key}
                                   prefix={<Avatar src={item} />}
                                   description='Deserunt dolor ea eaque eos' /> )
                            })
                        }
                    </List>
                </div>
            </div>


        </Page>
    );
};

export default School;
