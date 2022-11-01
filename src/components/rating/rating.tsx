import {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    ratingValue: RatingValueType
    setRatingValue : (ratingValue: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering');


    return <div>
        <Star selected={props.ratingValue > 0} setRatingValue={props.setRatingValue} num={1}/>
        <Star selected={props.ratingValue > 1} setRatingValue={props.setRatingValue} num={2}/>
        <Star selected={props.ratingValue > 2} setRatingValue={props.setRatingValue} num={3}/>
        <Star selected={props.ratingValue > 3} setRatingValue={props.setRatingValue} num={4}/>
        <Star selected={props.ratingValue > 4} setRatingValue={props.setRatingValue} num={5}/>

    </div>;
}

type StarTypeProps = {
    selected: boolean
    setRatingValue: (ratingValue: RatingValueType) => void
    num: RatingValueType
}

function Star(props: StarTypeProps) {
    console.log('Star rendering');
    const onclickHandler = () => {
        props.setRatingValue(props.num)
    }
        return <span onClick={onclickHandler}>{props.selected ? <b>Star</b>: 'Star'}</span>
}