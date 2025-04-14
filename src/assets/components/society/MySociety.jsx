import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const MySociety = () => {
  const [society, setsociety] = useState([])
    const getAllMySociety = async()=>{
        const res = await axios.get("/newsocietys")
        console.log(res.data)
        setsociety(res.data.data)
    }


    useEffect(()=> {
        getAllMySociety()
    },[])
  return (
    <div>My Society
    <table className='table '>
            <thead className='table-dark'>
                <tr>
                    <th>society name</th>
                    <th>city</th>
                    <th>society address</th>
                    <th>Flat number</th>
                </tr>
            </thead>
            <tbody>
                {
                  society?.map((sc)=>{
                    return<tr>
                      <td> {sc.society_name}</td>
                      <td> {sc.city}</td>
                      <td> {sc.society_address}</td>
                      <td> {sc.flat_no}</td>
                    </tr>
                  })
                }
            </tbody>
        </table>
        </div>
  )
}
