import { menuItems } from "./db/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"


function App() {

  const { Order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-300 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
        <h2 className="text-4xl font-semibold text-center">Menú</h2> 
        <div className="space-y-3 mt-8">
            {menuItems.map(item => (
            <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
            />
          ))}
        </div>
        </div>

        <div className="border border-dashed border-slate-400 p-5 rounded-lg space-y-10">
        {Order.length ? (
          <>
          <OrderContents
        Order={Order}
        removeItem={removeItem}
        />

        <TipPercentageForm
        setTip={setTip}
        tip={tip}
        />

        <OrderTotals 
        Order={Order}
        tip={tip}
        placeOrder={placeOrder}
        />
          </>
        ) : (
          <p className='text-center'>La orden esta vacia</p> 
        )}
        
        </div>
      </main>
    </>
  )}

export default App
