import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const NewNotice = ({ societyId, userId }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/notices", {
        ...data,
        society_id: societyId,
        created_by: userId,
      });

      if (res.status === 201) {
        alert("Notice posted successfully");
        reset();
      }
    } catch (error) {
      console.error("Error posting notice:", error);
      alert("Failed to post notice");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="notice-form">
      <h2>Create Notice</h2>
      <input type="text" placeholder="Title" {...register("title", { required: true })} />
      <textarea placeholder="Message" {...register("message", { required: true })}></textarea>
      <button type="submit">Post Notice</button>
    </form>
  );
};