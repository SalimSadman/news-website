import React from 'react';

const DynamicNewspage = ({searchParams}) => {
    return (
        <div>
            <h3>{searchParams.category}</h3>
        </div>
    );
};

export default DynamicNewspage;