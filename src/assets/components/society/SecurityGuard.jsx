import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "../../components/addflat.css";

export const SecurityGuard = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log(data); // log submitted data for debugging

    try {
      const res = await axios.post("/flat", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 201) {
        alert("SecurityGuard added successfully");
        navigate("/society"); // Navigate to another page on success
      } else {
        alert("Error: securityguard not created");
      }
    } catch (error) {
      console.error("Error adding flat:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="add-flat">
      <div className="title">Security Guard</div>
      <div className="form-container">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="container-body">
            <div className="from-1">
              <label className="form-label"> Full Name</label>
              <input
                type="text"
                className="form-control"
                {...register("Name", { required: "Name is required" })}
              />
              {errors.Name && <span>{errors.Name.message}</span>}
            </div>

            <div className="from-1">
              <label className="form-label">Gmail</label>
              <input
                type="text"
                className="form-control"
                {...register("gmail", { required: "email is required" })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="from-1">
              <label className="form-label">address</label>
              <input
                type="text"
                className="form-control"
                {...register("address", { required: "address is required" })}
              />
              {errors.address && <span>{errors.address.message}</span>}
            </div>

            <div className="from-1">
              <label className="form-label">Contact Number</label>
              <input
                type="text"
                className="form-control"
                {...register("contact_number", { required: "Contact number is required" })}
              />
              {errors.contact_number && <span>{errors.contact_number.message}</span>}
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
