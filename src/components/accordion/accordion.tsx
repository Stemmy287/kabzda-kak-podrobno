import {itemsType} from "../../App";

type AccordionPropsType = {
    titleValue: string;
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
    items: itemsType[]
    onClick: (id: number) => void
}

export function  Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
        {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>;

}
type AccordionTitlePropsType = {
    title :string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');

    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }

    return <h3 onClick={onClickHandler}>{props.title}</h3>;
}

type AccordionBodyPropsType = {
    items: itemsType[]
    onClick: (id: number) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return <ul>
        {props.items.map(el => <li onClick={() => props.onClick(el.value)} key={el.value}>{el.title}</li>)}
    </ul>

}