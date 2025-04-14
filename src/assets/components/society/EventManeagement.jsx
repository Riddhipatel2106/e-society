import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "../../components/addflat.css";

export const EventManeagement = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("Submitted Data:", data);

    try {
      const res = await axios.post("/event", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        alert("User created event");
        navigate("/society");
      } else {
        alert("User not created");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="add-flat">
      <div className="title">Event Maneagement</div>
      <div className="form-container">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="container-body">
            <div className="from-1">
              <label className="form-label">Event Name</label>
              <input
                type="text"
                className="form-control"
                {...register("name", { required: true })}
              />
            </div>

            <div className="from-1">
              <label className="form-label">Event description</label>
              <input
                type="text"
                className="form-control"
                {...register("description", { required: true })}
              />
            </div>

            <div className="from-1">
              <label className="form-label">Date</label>
              <input
                type="text"
                className="form-control"
                {...register("date", { required: true })}
              />
            </div>

            <div className="from-1">
              <label className="">location</label>
              <input
                type="text"
                className="form-control"
                {...register("location", { required: true })}
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

