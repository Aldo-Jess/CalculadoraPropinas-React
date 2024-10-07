import { formatCurrency } from '../helpers'
import { MenuItem, OrderItem } from '../types'

type OrderContentsProps = {
  Order: OrderItem[],
  removeItem: (id:MenuItem['id'])=> void
}

export default function OrderContents({Order, removeItem}:OrderContentsProps) {
  return (
    <div>
      <h2 className='text-4xl font-semibold text-center'>Consumo</h2>

    <div className='space-y-3 mt-5'>
      {Order.map(item => (
        <div className='flex justify-between p-5 border-2 items-center border-cyan-200 rounded-2xl bg-cyan-50' 
        key={item.id}>
          <div>
            <p className='text-lg'>
            {item.name} - {formatCurrency(item.price)}
          </p>
          <p className='text-cyan-800 font-bold'>
            Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
          </p>
          </div>
          
          <button className='bg-red-100 rounded-full h-8 w-8 border-2 font-semibold border-red-300'
          onClick={()=>removeItem(item.id)}
          >
            X
          </button>
        </div>
      )) }
    </div>
    </div>
  )
}
