import React from 'react';

const ToDo = (props) => {
    const { data: { text, id, isCompleted } } = props;
    return (
        <div>

            {isCompleted ? <strike>{text && text.trim() || '-'}</strike>
            : text && text.trim() || '-'}
            
            <br />
        </div>
    )
}

export default ToDo;
