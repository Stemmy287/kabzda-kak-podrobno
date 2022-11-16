import React, {useState} from 'react';
import './App.css';
import {UnControlAccordion} from './components/accordion/Unconrolaccordion';
import {UnControlOnOff} from './components/on_off/UncontrolOnOff';
import {Rating, RatingValueType} from "./components/rating/rating";
import {Accordion} from "./components/accordion/accordion";
import {OnOff} from "./components/on_off/OnOff";
import {UnControlRating} from "./components/rating/Uncontrolrating";
import {
    ControlCheckBox,
    ControlInput,
    ControlSelect,
    GetValueOfUnControlInput,
    TrackUnControlInput
} from "./components/input/input";
import {Selected} from "./components/selected/Selected";

export type itemsType = {
    title: string
    value: number
}

function App() {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let [clickOn, setClickOn] = useState(false)
    const [titleValue, setTitleValue] = useState('none')


    const [items, setItems] = useState<itemsType[]>([
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}
    ])

    return (
        <div>
            <Selected items={items} collapsed={collapsed} titleValue={titleValue} setCollapsed={setCollapsed} setTitleValue={setTitleValue}/>
            {/*<AppTitle/>
            <p>Commit</p>*/}
            {/*<UnControlAccordion titleValue={'Подменю'}/>*/}
            {/*<Accordion titleValue={'Меню'} setCollapsed={setCollapsed} collapsed={collapsed} items={items} onClick={(id: number) =>alert(`Clicked on ${id}`) }/>*/}
            {/*<UnControlRating/>*/}
            {/*<Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>*/}
            {/*<UnControlOnOff setClickOn={setClickOn}/> {`${clickOn}`}*/}
            {/*<TrackUnControlInput/>*/}
            {/*<GetValueOfUnControlInput/>*/}
            {/*<ControlInput/>*/}
            {/*<ControlCheckBox/>*/}
            {/*<ControlSelect/>*/}
            {/*<OnOff setClickOn={setClickOn} clickOn={clickOn}/>*/}
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <>This is APP component</>
}

export default App;
