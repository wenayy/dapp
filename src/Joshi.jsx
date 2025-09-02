import React from 'react'
import { useContext } from 'react'
import { VinayContext } from './context'
 
function Joshi() {
    const bulb= useContext(VinayContext)
  return (
    <div>
        hello this is {bulb.toString()}
    </div>
  )
}

export default Joshi