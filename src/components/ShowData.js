import React from "react";

const ShowData = ({ number, addNumberClick, minuNumberClick }) => (
    <div>
        <button
            onClick={() => {
                addNumberClick(2);
            }}
        >
            +
        </button>
        <button
            onClick={() => {
                minuNumberClick(1);
            }}
        >
            -
        </button>
        <span>show {number}</span>
    </div>
);

export default ShowData;
