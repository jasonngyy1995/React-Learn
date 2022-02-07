import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div 
                    className='chart-bar__fill' 
                    /* target CSS property 
                    - double curly braces because another curly braces is needed to 
                    output a dynamic value (which is a JS object)*/
                    style={{height: barFillHeight}}
                ></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;