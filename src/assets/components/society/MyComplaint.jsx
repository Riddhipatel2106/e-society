import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const MyComplaint = () => {
  const [complaint, setcomplaint] = useState([])
    const getAllMyComplaint = async()=>{
        const res = await axios.get("/complaints")
        console.log(res.data)
        setcomplaint(res.data.data)
    }


    useEffect(()=> {
        getAllMyComplaint()
    },[])
  return (
    <div> Complaint
    <table className='table '>
            <thead className='table-dark'>
                <tr>
                    <th>Complaint Name</th>
                    <th>Flat Number</th>
                    <th>Complaint Date</th>
                    <th>Complaint Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  complaint?.map((cp)=>{
                    return<tr>
                      <td> {cp.complaintName}</td>
                      <td> {cp.Flat_Number}</td>
                      <td> {cp.complaintdate}</td>
                      <td> {cp.complaintdescription}</td>
                      <td> {cp.status}</td>
                    </tr>
                  })
                }
            </tbody>
        </table>
        </div>
  )
}
