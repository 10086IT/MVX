import React, {useEffect, useState} from 'react'
import { IndexBar, List} from 'antd-mobile'
import {writersData} from "@mock";
import pinyin from 'js-pinyin'
import {Page} from "@components";
pinyin.setOptions({checkPolyphone: false, charCase: 0});

const getPinYinFirstChar = (str) => {
    return pinyin.getFullChars(str).toUpperCase().charAt(0) || '';
}

const formatePinYin = (data) => {
    const tempSort = [];
    let charSort = [];
    data.forEach((item) => {
        const firstChar = getPinYinFirstChar(item.writerName);
        if (tempSort[firstChar] && tempSort[firstChar].length) {
            tempSort[firstChar].push(item);
        } else {
            tempSort[firstChar] = [item];
            charSort.push(firstChar);
        }
    })
     charSort = charSort.sort(function(a, b) {
        return a > b ? 1 : -1;
    })

    return [charSort, tempSort];
}

const nav= {
    children: '我的关注',
};
const Writers = () => {

    const [data, setData] = useState([[], []]);
    useEffect(() => {
        const data = formatePinYin(writersData);
        console.log(data);
        setData([...data]);
    }, [])

    return (
        <Page nav={nav}>
            <IndexBar>
                {data[0].map((group) => {
                    console.log(group)
                    return (
                        <IndexBar.Panel
                            index={group}
                            title={`标题${group}`}
                            key={'标题' +group }
                        >
                            <List>
                                {data[1][group].map((item, index) => (
                                    <List.Item key={index}>{item.writerName}</List.Item>
                                ))}
                            </List>
                        </IndexBar.Panel>
                    )
                })}
            </IndexBar>
        </Page>
    )
}
export default Writers;
