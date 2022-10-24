import {useState} from "react";



export function UnControlRating() {
    console.log('Rating rendering');

    let [ratingStar, setRatingStar] = useState(0)

    return <div>
        <Star selected={ratingStar > 0}/> <button onClick={() => {setRatingStar(1)}}>1</button>
        <Star selected={ratingStar > 1}/> <button onClick={() => {setRatingStar(2)}}>2</button>
        <Star selected={ratingStar > 2}/> <button onClick={() => {setRatingStar(3)}}>3</button>
        <Star selected={ratingStar > 3}/> <button onClick={() => {setRatingStar(4)}}>4</button>
        <Star selected={ratingStar > 4}/> <button onClick={() => {setRatingStar(5)}}>5</button>

    </div>;
}

type StarTypeProps = {
    selected: boolean
}

function Star(props: StarTypeProps) {
    console.log('Star rendering');
    if (props.selected) {
        return <span><b>Star</b></span>
    }
    return (
        <span>Star</span>
    )
}