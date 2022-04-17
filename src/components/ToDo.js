import React from 'react';
const ToDo = (props) => {
    const { data: { text, id } } = props;
    return (
        <>
            {/* prints hyphen(-) when text is null and undefined */}
            {text && text.trim() || '-'}
            <br />
        </>
    )
}

export default ToDo;




