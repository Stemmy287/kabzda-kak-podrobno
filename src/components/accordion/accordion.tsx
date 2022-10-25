import {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}



export function UnControlAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
        {collapsed && <AccordionBody/>}
    </div>;

}
type AccordionTitlePropsType = {
    title :string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    const OnclickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }

    return <h3 onClick={OnclickHandler}>{props.title}</h3>;
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}