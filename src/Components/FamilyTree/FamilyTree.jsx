import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'
export const AssetsContext = createContext('');
export const MoneyContext = createContext(0);
const FamilyTree = () => {
    const [money,setMoney] =useState(0)
    const asset = 'diamond';
    const newAssets ='gold'
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family Money: {money}</h4>
           <MoneyContext value={[money,setMoney]}>
             <AssetsContext.Provider value={newAssets}>
            <Grandpa asset={asset}></Grandpa>
            </AssetsContext.Provider>
           </MoneyContext>
        </div>
    );
};

export default FamilyTree;
