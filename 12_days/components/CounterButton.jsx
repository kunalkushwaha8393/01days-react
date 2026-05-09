import React from "react";

function CounterButton({
    onButtonClick,
    children,
    className
}) {

    return (
        <button
            onClick={onButtonClick}
            className={className}
        >
            {children}
        </button>
    );
}

export default CounterButton;