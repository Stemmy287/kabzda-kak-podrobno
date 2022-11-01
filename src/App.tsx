import React, {useState} from 'react';
import './App.css';
import {UnControlAccordion} from './components/accordion/Unconrolaccordion';
import {UnControlOnOff} from './components/on_off/UncontrolOnOff';
import {Rating, RatingValueType} from "./components/rating/rating";
import {Accordion} from "./components/accordion/accordion";
import {OnOff} from "./components/on_off/OnOff";
import {UnControlRating} from "./components/rating/Uncontrolrating";

function App() {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let [clickOn, setClickOn] = useState(false)

    return (
        <div>
            {/*<AppTitle/>
            <p>Commit</p>*/}
            <UnControlAccordion titleValue={'Меню'}/>
            <Accordion titleValue={'Подменю'} setCollapsed={setCollapsed} collapsed={collapsed}/>
            <UnControlRating/>
            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
            <UnControlOnOff setClickOn={setClickOn}/> {`${clickOn}`}
            {/*<OnOff setClickOn={setClickOn} clickOn={clickOn}/>*/}
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <>This is APP component</>
}

export default App;
