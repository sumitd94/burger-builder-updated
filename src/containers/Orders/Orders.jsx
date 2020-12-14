import React, { useState, useEffect } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get('/orders.json').then((response) => {
      const fetchedOrders = Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }));
      setIsLoading(false);
      setOrders(fetchedOrders);
    });
  }, []);
  return (
    <div>
      {isLoading && <Spinner />}
      {
        orders.map(({ id, ingredients, price }) => (
          <Order key={id} ingredients={ingredients} price={price} />
        ))
      }
    </div>

  );
};

export default Orders;
