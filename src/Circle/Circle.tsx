import React from 'react';

interface ICircleProps {
    number: number;
}

const Circle: React.FC<ICircleProps> = props => {
    return (
        <div className="circle">{props.number}</div>
    );
};

export default Circle;