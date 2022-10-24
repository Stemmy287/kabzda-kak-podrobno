type RatingTypeProps = {
    value: number
}

export function Rating(props: RatingTypeProps) {
    console.log('Rating rendering');
    return <div>
        <Star selected={props.value > 0}/>
        <Star selected={props.value > 1}/>
        <Star selected={props.value > 2}/>
        <Star selected={props.value > 3}/>
        <Star selected={props.value > 4}/>
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