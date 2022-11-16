import {ChangeEvent, useRef, useState} from "react";

export const TrackUnControlInput = () => {
    const [value, setValue] =useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <div><input  onChange={onChangeHandler}/> track - {value}</div>
}

export const GetValueOfUnControlInput = () => {
    const [value, setValue] =useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        if (inputRef.current)
        setValue(inputRef.current.value)
    }

    return <div><input ref={inputRef}/> <button onClick={onClickHandler} >save</button> get - {value} </div>
}

export const ControlInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div><input value={value} onChange={onChangeHandler}/></div>
    )
}

export const ControlCheckBox = () => {
    const [value, setValue] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return (
        <div><input type={'checkbox'} checked={value} onChange={onChangeHandler}/></div>
    )
}

export const ControlSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <select value={value} onChange={onChangeHandler}>
                <option>none</option>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Moscow</option>
                <option value={'3'}>Kiev</option>
            </select> </div>
    )
}