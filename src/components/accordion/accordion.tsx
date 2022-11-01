type AccordionPropsType = {
    titleValue: string;
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

export function  Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');


    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
        {props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    console.log('AccordionBody rendering');
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}