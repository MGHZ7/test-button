export const Button = (props) => {
    return (<button className={`${props.className} rounded-full p-2`} onClick={props.onClick}>{props.children}</button>);
};