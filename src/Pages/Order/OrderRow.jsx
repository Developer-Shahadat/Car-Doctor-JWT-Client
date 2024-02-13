import React from "react";
// import Swal from "sweetalert2";

const OrderRow = ({ order, handleDelete, handleUpdate }) => {
  const { _id, price, service, img, date,status } = order;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-24 rounded-xl h-12">
            <img src={img} />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
         {
         status==='confirm' ? <span className="text-bold text-primary">Updated</span> :
         <button onClick={() => handleUpdate(_id)} className="btn bg-[#FF3811] text-white">Please Update</button>
      }
      </th>
    </tr>
  );
};

export default OrderRow;
