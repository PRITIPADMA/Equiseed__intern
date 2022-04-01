import React from "react";
import "./table.css";
import { AiOutlineMenu } from "react-icons/ai";

function table() {
  return (
    <>
      <div className="header">Your Campaigns</div>
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

          <tr>
            <td>Covid Help</td>
            <td id="status">Active</td>
            <td>$25 out of $6000</td>
            <td>22/02/2022</td>
            <td className="action">
              <AiOutlineMenu />
            </td>
          </tr>

          <tr>
            <td>Whatever</td>
            <td id="status">Pending</td>
            <td>$25 out of $6000</td>
            <td>22/02/2022</td>
            <td className="action">
              <AiOutlineMenu />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default table;
