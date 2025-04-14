import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "../../components/addflat.css";

export const AddFlat = () => {
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
        alert("Flat added successfully");
        navigate("/society"); // Navigate to another page on success
      } else {
        alert("Error: Flat not created");
      }
    } catch (error) {
      console.error("Error adding flat:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="add-flat">
      <div className="title">Add Flat</div>
      <div className="form-container">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="container-body">
            <div className="from-1">
              <label className="form-label">Flat Number</label>
              <input
                type="text"
                className="form-control"
                {...register("flat_number", { required: "Flat number is required" })}
              />
              {errors.flat_number && <span>{errors.flat_number.message}</span>}
            </div>

            <div className="from-1">
              <label className="form-label">Floor</label>
              <input
                type="text"
                className="form-control"
                {...register("floor", { required: "Floor is required" })}
              />
              {errors.floor && <span>{errors.floor.message}</span>}
            </div>

            <div className="from-1">
              <label className="form-label">Block</label>
              <input
                type="text"
                className="form-control"
                {...register("block", { required: "Block is required" })}
              />
              {errors.block && <span>{errors.block.message}</span>}
            </div>

            <div className="from-1">
              <label className="form-label">Owner Name</label>
              <input
                type="text"
                className="form-control"
                {...register("owner_name", { required: "Owner name is required" })}
              />
              {errors.owner_name && <span>{errors.owner_name.message}</span>}
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
