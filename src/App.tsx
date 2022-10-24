import React from 'react';
import './App.css';
import {UnControlAccordion} from './components/accordion/accordion';
import {OnOff} from './components/on_off/on_off';
import {UnControlRating} from "./components/rating/rating";

function App() {
    console.log('App rendering');
    return (
        <div>
            <AppTitle/>
            <p>Commit</p>
            <UnControlAccordion titleValue={'Меню'}/>
            <UnControlAccordion titleValue={'Подменю'}/>
            <UnControlRating/>
            <OnOff/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <>This is APP component</>
}

export default App;
