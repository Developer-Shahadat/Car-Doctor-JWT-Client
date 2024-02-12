import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OrderRow from "./OrderRow";

const OrderDetails = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  const url = `http://localhost:5000/orders?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl">Order Size : {order.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead></thead>
          <tbody>
            {order.map((item) => (
              <OrderRow key={item._id} order={item}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
