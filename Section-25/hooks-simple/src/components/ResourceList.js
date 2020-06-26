import React from 'react';
import useResources from './useResoucres';

const ResourceList = ({ resource }) => {
    const resources = useResources(resource);

    return (
    <ul>
        {resources.map(record => (
        <li key={record.id}>{record.title}</li> 
        ))}</ul>
    );
};

export default ResourceList;