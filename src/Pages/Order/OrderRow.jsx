import React from "react";

const OrderRow = ({ order }) => {
  const { price, service, img, date } = order;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
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
        <button className="btn bg-[#FF3811] text-white">Pending</button>
      </th>
    </tr>
  );
};

export default OrderRow;
