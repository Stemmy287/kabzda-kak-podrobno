import {useState} from "react";

type UnControlOnOffPropsType = {
    setClickOn: (clickOn: boolean) => void
}

export const UnControlOnOff = (props: UnControlOnOffPropsType) => {

    let [clickOn, setClickOn] = useState(false)

    const onStyle = {
        width: '50px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        paddingLeft: '5px',
        backgroundColor: clickOn ? 'green' : 'white'
    }
    const offStyle = {
        width: '50px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        paddingLeft: '5px',
        backgroundColor: !clickOn ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: clickOn ? 'green' : 'red'
    }

    const onClickHandler = (on: boolean) => {
        setClickOn(on)
        props.setClickOn(on)
    }

    return (
        <div>
            <div style={onStyle} onClick={() => onClickHandler(true)}>On</div>
            <div style={offStyle} onClick={() => onClickHandler(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

