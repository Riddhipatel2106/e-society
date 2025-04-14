import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "../../components/addflat.css";

export const NewSociety = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("Submitted Data:", data);

    try {
      const res = await axios.post("/newsociety", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        alert("User created society");
        navigate("/society/mysociety");
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
      <div className="title">New Society</div>
      <div className="form-container">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="container-body">
            <div className="from-1">
              <label className="form-label">Society Name</label>
              <input
                type="text"
                className="form-control"
                {...register("society_name", { required: true })}
              />
            </div>

            <div className="from-1">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                {...register("city", { required: true })}
              />
            </div>

            <div className="from-1">
              <label className="form-label">Society Address</label>
              <input
                type="text"
                className="form-control"
                {...register("society_address", { required: true })}
              />
            </div>

            <div className="from-1">
              <label className="">Flat Number</label>
              <input
                type="text"
                className="form-control"
                {...register("flat_no", { required: true })}
              />
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
