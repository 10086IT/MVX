import React, {Fragment} from 'react';
import {Badge, Ellipsis, Image} from "antd-mobile";
import './index.less';
const SquareList = (props) => {
    const {data} = props;
    return (

        <div className='busi-com-square-list'>
            <p className='busi-com-square-list-title'>海王推荐</p>
            <div className='busi-com-square-list-main'>
                {
                    data.map((values, keys) => {
                        return (
                            <Fragment  key={keys}>
                                <div className='busi-com-square-list-item'>
                                    <Badge className='busi-com-square-list-item-badge' wrapperClassName='busi-com-square-list-badge' content={values.opener+ '+'}>
                                        <Image className='busi-com-square-list-img' src={values.imgUrl} fit='fill' />
                                    </Badge>
                                    <Ellipsis className='busi-com-square-list-description' direction='end' rows={3} content={values.description} />
                                </div>
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SquareList;
