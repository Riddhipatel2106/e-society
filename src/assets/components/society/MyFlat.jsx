import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const MyFlat = () => {
  const [flat, setflat] = useState([])
    const getAllMyFlat = async()=>{
        const res = await axios.get("/flats")
        console.log(res.data)
        setflat(res.data.data)
    }


    useEffect(()=> {
        getAllMyFlat()
    },[])
  return (
    <div>My Flat
    <table className='table '>
            <thead className='table-dark'>
                <tr>
                    <th>Flat Number</th>
                    <th>Floor</th>
                    <th>Block</th>
                    <th>Owner Name</th>
                    <th>Contact Number</th>
                </tr>
            </thead>
            <tbody>
                {
                  flat?.map((ft)=>{
                    return<tr>
                      <td> {ft.flat_number}</td>
                      <td> {ft.floor}</td>
                      <td> {ft.block}</td>
                      <td> {ft.owner_name}</td>
                      <td> {ft.contact_number}</td>
                    </tr>
                  })
                }
            </tbody>
        </table>
        </div>
  )
}
