import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OrderRow from "./OrderRow";
import Swal from "sweetalert2";

const OrderDetails = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  const url = `http://localhost:5000/orders?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [url]);
  const handleDelete = (id) => {
    // const procced =
    //   Swal.fire({
    //     icon: "error",
    //     title: "Are you Confirm !!!!",
    //     text: "Order Added!",
    //   })

    const procced = confirm("Are You Sure Deleted Order !!!");
    if (procced) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Delete SuccesFull !!!!",
              // text: "Order Added!",
              icon: "success",
            });
            // alert("successful");
            const remaining = order.filter((item) => item._id !== id);
            setOrder(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = order.filter((item) => item._id !== id);
          const updated = order.find((item) => item._id === id);
          updated.status = "confirm";
          const newOrder = [updated, ...remaining];
          setOrder(newOrder);
        }
      });
  };
  return (
    <div>
      <h1 className="text-center text-4xl">Order Size : {order.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead></thead>
          <tbody>
            {order.map((item) => (
              <OrderRow
                key={item._id}
                order={item}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
