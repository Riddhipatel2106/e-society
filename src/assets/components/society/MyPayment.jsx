import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const MyPayment = () => {
  const [payment, setpayment] = useState([])
    const getAllMyPayment = async()=>{
        const res = await axios.get("/payments")
        console.log(res.data)
        setpayment(res.data.data)
    }


    useEffect(()=> {
        getAllMyPayment()
    },[])
  return (
    <div> Payment
    <table className='table '>
            <thead className='table-dark'>
                <tr>
                    <th> Name</th>
                    <th> Payment Date</th>
                    <th> Amount</th>
                    <th>Payment Type</th>
                    <th>Payment Mode </th>
                </tr>
            </thead>
            <tbody>
                {
                  payment?.map((payment)=>{
                    return<tr>
                      <td> {payment.name}</td>
                      <td> {payment.paymentdate}</td>
                      <td> {payment.amount}</td>
                      <td> {payment.paymenttype}</td>
                      <td> {payment.paymentmode}</td>
                    </tr>
                  })
                }
            </tbody>
        </table>
        </div>
  )
}