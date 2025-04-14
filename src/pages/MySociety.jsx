import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../components/addflat.css"; // reuse styles

export const MySociety = ({ userId }) => {
  const [society, setSociety] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSociety = async () => {
      try {
        const res = await axios.get(`/mysociety/${userId}`);
        setSociety(res.data);
      } catch (err) {
        console.error("Failed to load society:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSociety();
  }, [userId]);

  if (loading) return <p>Loading your society...</p>;
  if (!society) return <p>No society found for this user.</p>;

  return (
    <div className="add-flat">
      <div className="title">My Society Details</div>
      <div className="form-container">
        <div className="container-body">
          <div className="from-1">
            <label className="form-label">Society Name</label>
            <p className="form-control">{society.society_name}</p>
          </div>

          <div className="from-1">
            <label className="form-label">City</label>
            <p className="form-control">{society.city}</p>
          </div>

          <div className="from-1">
            <label className="form-label">Address</label>
            <p className="form-control">{society.society_address}</p>
          </div>

          <div className="from-1">
            <label className="form-label">Flat Number</label>
            <p className="form-control">{society.flat_no}</p>
          </div>
        </div>
      </div>
    </div>
  );
};