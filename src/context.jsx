import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
export const  VinayContext = createContext();

export default    function VinayProvider({children}) {
    const [bulb, Setbulb]=useState(true)
 
    
  return (
    <VinayContext.Provider value={ bulb}  >
{children}
    </VinayContext.Provider >
  )
}

 