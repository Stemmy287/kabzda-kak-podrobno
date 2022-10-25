import {useState} from "react";


export function UnControlRating() {
    console.log('Rating rendering');

    let [value, setValue] = useState(0)

    return <div>
        <Star selected={value > 0} setValue={setValue} num={1}/>
        <Star selected={value > 1} setValue={setValue} num={2}/>
        <Star selected={value > 2} setValue={setValue} num={3}/>
        <Star selected={value > 3} setValue={setValue} num={4}/>
        <Star selected={value > 4} setValue={setValue} num={5}/>

    </div>;
}

type StarTypeProps = {
    selected: boolean
    setValue: (value: number) => void
    num: number
}

function Star(props: StarTypeProps) {
    console.log('Star rendering');
    if (props.selected) {
        return <span onClick={() => {props.setValue(props.num)}}><b>Star</b></span>
    }
    return (
        <span onClick={() => {props.setValue(props.num)}}>Star</span>
    )
}