import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating} from './components/rating/rating';
import {Accordion} from './components/accordion/accordion';
import {OnOff} from './components/on_off/on_off';

function App() {
    console.log('App rendering');
    return (
        <div>
            <AppTitle/>
            <Rating value={1}/>
            <p>Commit</p>
            <Accordion titleValue={'Меню'} collapsed={true}/>
            <Accordion titleValue={'Подменю'} collapsed={false}/>
            <Rating value={2}/>
            <OnOff color={true}></OnOff>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <>This is APP component</>
}

export default App;
