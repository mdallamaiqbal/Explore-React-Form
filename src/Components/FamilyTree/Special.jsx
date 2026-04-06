import React, { useContext } from 'react';
import { AssetsContext } from './FamilyTree';

const Special = ({name,asset}) => {
    const newAssets = useContext(AssetsContext);
    return (
        <div>
            <h3>Special {name}</h3>
            <p>Asset: {asset}</p>
            <p>New Asset: {newAssets}</p>
        </div>
    );
};

export default Special;