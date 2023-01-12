import React, {Fragment} from 'react';
import {Badge, Ellipsis, Image} from "antd-mobile";
import './index.less';
const SquareList = (props) => {
    const {data, title} = props;
    return (

        <div className='square-list'>
            <div className='square-list-header'>{title} <span>/</span><span>&nbsp;Live</span></div>
            <div className='square-list-main'>
                {
                    data.map((values, keys) => {
                        return (
                            <Fragment  key={keys}>
                                <div className='square-list-item'>
                                    <Badge className='square-list-item-badge' wrapperClassName='square-list-badge' content={values.opener+ '+'}>
                                        <Image className='square-list-img' src={values.imgUrl} fit='fill' />
                                    </Badge>
                                    <Ellipsis className='square-list-description' direction='end' rows={3} content={values.description} />
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
