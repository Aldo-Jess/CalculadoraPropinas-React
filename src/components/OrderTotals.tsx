import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
  Order: OrderItem[],
  tip:number,
  placeOrder: () => void
}
export default function OrderTotals({Order, tip , placeOrder}:OrderTotalsProps) {

  const subtotalAmount = useMemo(() => Order.reduce((Total, item)=> Total + (item.quantity 
    * item.price), 0 ), [Order])
  const tipAmound = useMemo(()=> subtotalAmount * tip, [subtotalAmount, tip])
  const totalAmound = useMemo(()=> subtotalAmount + tipAmound, [subtotalAmount, tipAmound])
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-cyan-900 font-bold text-2xl">Totales y propinas: </h2>
        <p>Subtotal a pagar:{' '}
          <span className="font-bold"> {formatCurrency(subtotalAmount)} </span> 
          </p>
          <p>Propinas: {' '}
          <span className="font-bold"> {formatCurrency(tipAmound)} </span> 
          </p>
          <p>Total a pagar:{' '}
          <span className="font-bold"> {formatCurrency(totalAmound)} </span> 
          </p>
      </div>

      <button className="w-full p-3 uppercase mt-10 bg-slate-200 border-2 border-slate-500 disabled:opacity-0"
      disabled={totalAmound === 0}
      onClick={placeOrder}>
        Guardar orden 
      </button>
    </>
  )
}
