import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const SocietySecurityGuard = () => {
  const [securityguard, setsecurityguard] = useState([])
    const getAllSecurityguard = async()=>{
        const res = await axios.get("/complaints")
        console.log(res.data)
        setsecurityguard(res.data.data)
    }


    useEffect(()=> {
        getAllSecurityguard()
    },[])
  return (
    <div> Security Guard
    <table className='table '>
            <thead className='table-dark'>
                <tr>
                    <th>Full Name</th>
                    <th>Gmail</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                  securityguard?.map((sg)=>{
                    return<tr>
                      <td> {sg.Name}</td>
                      <td> {sg.gmail}</td>
                      <td> {sg.address}</td>
                      <td> {sg.contact_number}</td>
                      
                    </tr>
                  })
                }
            </tbody>
        </table>
        </div>
  )
}
