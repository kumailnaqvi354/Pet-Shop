import React from 'react'
import { useSelector } from 'react-redux'

export default function Adopters() {
    const adoptersList = useSelector((state) => {
        return state.adoptReducer.adopters
        
            
    })
   


    return (
        <div>
            <div>
                Adopters List
            </div>
            <div>
                {
                    adoptersList.map((list,index)=>(
                        list!='0x0000000000000000000000000000000000000000'?<div key={index}>index= {index} - {list}</div>:null
                    ))
                }
            </div>
        </div>
    )
}
