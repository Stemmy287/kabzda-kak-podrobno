type OnOffPropsType = {
    setClickOn: (clickOn: boolean) => void
    clickOn: boolean
}

export const OnOff = (props: OnOffPropsType) => {


    const onStyle = {
        width: '50px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        paddingLeft: '5px',
        backgroundColor: props.clickOn ? 'green' : 'white'
    }
    const offStyle = {
        width: '50px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        paddingLeft: '5px',
        backgroundColor: !props.clickOn ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.clickOn ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={() => {props.setClickOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.setClickOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

