import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "../../components/addflat.css";

export const Payment = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("Submitted Data:", data);

    try {
      const res = await axios.post("/payment", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        alert("User created complaint");
        navigate("/society");
      } else {
        alert("User not created");
      }
    } catch (error) {
      console.error("Error creating society:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="add-payment">
      <div className="title">Payment</div>
      <div className="form-container">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="container-body">
            <div className="from-1">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                {...register("name", { required: true })}
              />
            </div>

            <div className="from-1">
              <label className="form-label">Payment Date</label>
              <input
                type="text"
                className="form-control"
                {...register("paymentdate", { required: true })}
              />
            </div>

            <div className="from-1">
              <label className="form-label">Amount</label>
              <input
                type="text"
                className="form-control"
                {...register("amount", { required: true })}
              />
            </div>

            <div className="from-1">
            <div className="mb-3">
                <label className="form-label">Payment Type</label>
                <select className="form-select" {...register("paymenttype")}>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Fine">Fine</option>
                  <option value="Utility">Utility</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              </div>
              
              <div className="from-1">
            <div className="mb-3">
                <label className="form-label"> Payment Mode  </label>
                <select className="form-select" {...register("paymentmode")}>
                  <option value="Credit">Credit</option>
                  <option value="Online"> Online</option>
                  
                </select>
              </div>
              </div>
          </div>
            <button type="submit" className="btn btn-primary w-100">
                Submit
            </button>
        </form>
      </div>
    </div>
  );
};
