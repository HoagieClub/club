import React from 'react';

const Button = (props) => {
    let outlined = props.outlined ? " outlined" : "";
    let target = props.external ? "_blank" : "";
    const style = props.color ? { borderColor: props.color } : {};
    return (
        <a href={props.href} target={target}>
            <div className={"button" + outlined} style={style}>
                {props.children}
            </div>
        </a>
    );
}

export default Button;