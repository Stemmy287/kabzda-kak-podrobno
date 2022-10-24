import {buildTimeValue} from '@testing-library/user-event/dist/utils';

type OnOffTypeProps = {
    color: boolean
}


const OnOffStyleGreen = {
    background: 'green'
}

const OnOffStyleRed = {
    background: 'Red'
}


export const OnOff = (props: OnOffTypeProps) => {
    if (props.color) {
        return (
        <span>
            <button style={OnOffStyleGreen} >On</button>
            <button>Off</button>
            <button style={OnOffStyleGreen}>o</button>
        </span>
        )
    }
    return (
        <span>
            <button>On</button>
            <button style={OnOffStyleRed}>Off</button>
            <button style={OnOffStyleRed}>o</button>
        </span>
    )
}

