import React, {useState} from 'react';
import {itemsType} from "../../App";
import s from './Selected.module.css'
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

type SelectedPropsType = {
    items: itemsType[]
    collapsed: boolean
    titleValue: string
    setCollapsed: (collapsed: boolean) => void
    setTitleValue: (titleValue: string) => void
}

export const Selected = (props: SelectedPropsType) => {

    const onClickSelectHandler = () => {
        props.setCollapsed(!props.collapsed)
    }

    const onClickOptionHandle = (title: string) => {
        props.setTitleValue(title)
        props.setCollapsed(false)
    }

    return (
        <div>
            <div className={s.select} onClick={onClickSelectHandler}>{props.titleValue}</div>
            {props.collapsed &&
                props.items.map(el => <div className={s.option} onClick={() => onClickOptionHandle(el.title)}>{el.title}</div>)
            }
        </div>
    );
};

