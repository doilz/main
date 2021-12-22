// cx('클래스이름')
// cx('one', 'tow')
// cx('my-component',{   condition: true  } )
// cx('my-component', ['another', 'classname'])
//class에 바인드라는 기능이 있는데 조금 더 쉽게 쓸수 있다.

import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import Styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);
function CheckBox({children, checked, ...rest}) {
    return (
        <div className={cx('checkbox')}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div className={cx('icon')}>{checked ? <MdCheckBox className={cx("checked")}/> : <MdCheckBoxOutlineBlank />}</div>
                    
            </label>
            <span>{children}</span>
        </div>
    )
}

export default CheckBox;