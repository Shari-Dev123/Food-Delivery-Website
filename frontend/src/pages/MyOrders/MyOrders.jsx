import React from 'react'
import './MyOrders.css'
import { useState } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { useEffect } from 'react'
import parcelIcon from '../../assets/parcel_icon.png';



const MyOrders = () => {

  const { url, token } = useContext(StoreContext)
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setData(response.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token])

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className='my-orders-order'>
              <img src="/images/parcel_icon.png" alt="Parcel Icon" />

              <p>{order.item.map((item, index) => {
                if (index===order.items.lenght-1) {
                  return item.name+"x"+item.quantity
                } else{
                    return item.name+"x"+item.quantity+","
                }
              })}</p>
              <p>${order.amount}.00</p>
              <p>Items: {order.item.lenght}</p>
              <p><span>$#x25cf;</span> <b>{order.status}</b></p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
