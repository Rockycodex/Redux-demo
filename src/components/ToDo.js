import React from 'react';

const ToDo = (props) => {
    const { data: { text, id } } = props;
    return (
        <div>
            {/* prints hyphen(-) when text is null and undefined */}
            {text && text.trim() || '-'}
            <br />
        </div>
    )
}

export default ToDo;




