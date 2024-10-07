import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder () {

  const [Order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const addItem = (item:MenuItem) => {
    const itemExit = Order.find(OrderItem => OrderItem.id === item.id)
    if (itemExit) {
      const updateOrder = Order.map(orderItem => orderItem.id === item.id ? 
        {...orderItem, quantity: orderItem.quantity + 1}: orderItem)
        setOrder(updateOrder)
      
    }else{
      const newItem = {...item, quantity: 1}
    setOrder([...Order, newItem])
    }
  }

  const removeItem = (id:MenuItem['id']) => {
    setOrder(Order.filter(item => item.id !== id))
    
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
    
  }
  
  return {
    Order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}