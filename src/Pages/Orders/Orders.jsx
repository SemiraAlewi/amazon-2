import React, { useContext, useEffect, useState } from "react";
import classes from "./Orders.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from '../../Components/Product/ProductCard'

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order__container}>
          <h2>Your Orders</h2>
          {
            Orders?.length == 0 && <div>You don't have orders yet!</div>
          }
          {/* orders */}
          <div>
            {
              Orders?.map((eachOrder,i) => {
                return(
                  <div key={i}>
                    <hr />
                    <p>Order Id:{eachOrder?.id}</p>
                    {
                      eachOrder?.data.basket.map((order) => (
                        <ProductCard flex={true}
                        product={order}
                        key={order.id}
                        
                        />
                      ))
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;