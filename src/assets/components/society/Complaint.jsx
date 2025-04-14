import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "../../components/addflat.css";

export const Complaint = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("Submitted Data:", data);

    try {
      const res = await axios.post("/complaint", data, {
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
    <div className="add-flat">
      <div className="title">Complaint</div>
      <div className="form-container">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="container-body">
            <div className="from-1">
              <label className="form-label">Complaint Name</label>
              <input
                type="text"
                className="form-control"
                {...register("complaintName", { required: true })}
              />
            </div>
            <div className="from-1">
              <label className="form-label">Flat Number</label>
              <input
                type="text"
                className="form-control"
                {...register("Flat_Number", { required: true })}
              />
            </div>

            <div className="from-1">
              <label className="form-label">Complaint Date</label>
              <input
                type="text"
                className="form-control"
                {...register("complaintdate", { required: true })}
              />
            </div>

            <div className="from-1">
              <label className="form-label">Complaint Description</label>
              <input
                type="text"
                className="form-control"
                {...register("complaintdescription", { required: true })}
              />
            </div>
            <div className="from-1">
            <div className="mb-3">
                <label className="form-label">Status</label>
                <select className="form-select" {...register("status")}>
                  <option value="Open">Open</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Pending">Pending</option>
            
                </select>
              </div>
              </div>
            
          </div>
          <div className="card-footer">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
