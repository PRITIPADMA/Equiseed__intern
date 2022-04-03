import React, { useState } from "react";
import "./table.css";
import { AiOutlineMenu } from "react-icons/ai";
import axios from "axios";

function Table() {
  const [event, setEvent] = useState([]);
  const getDetails = () => {
    axios
      .get("http://localhost:4000/api/v1/event")
      .then((res) => {
        setEvent(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="header">Your Campaigns</div>
      <div className="get__details" onClick={getDetails}>
        Get details
      </div>
      <div className="table">
        <table className="content-table">
          <thead>
            <tr>
              <td>Title</td>
              <td>Status</td>
              <td>Amt. Raised</td>
              <td>Due Date</td>
              <td>Action</td>
            </tr>
          </thead>

          {event.length &&
            event.map((data) => (
              <tr>
                <td>{data.category}</td>
                <td id="status">{data.status}</td>
                <td>$25 out of $6000</td>
                <td>{data.deadline}</td>
                <td className="action">
                  <AiOutlineMenu />
                </td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
}

export default Table;
