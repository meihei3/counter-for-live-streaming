import React from 'react';

const Display = (props) => {
    return (
    <div id="count-display" class="counter-display center flex border-gray">
        <svg width="100%" height="100%">
            <text id="count-number" class="counter-number" x="50%" y="50%" text-anchor="middle" dominant-baseline="central">{props.text}</text>
        </svg>
    </div>
    )
};
export { Display };
