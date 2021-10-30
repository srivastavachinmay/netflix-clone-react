import React from 'react';

const Row = ({title,fetchUrl,IsLargeRow=false}) => {

    return (
        <div className={'row'}>
            <h2>{title}</h2>
        </div>
    );
};

export default Row;