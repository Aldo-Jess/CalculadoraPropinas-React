import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item:MenuItem) => void
}


export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    
    <button 
    className="border-2 rounded-lg border-teal-100 w-full p-2 flex justify-between hover:bg-teal-100"
    onClick={()=> addItem(item)}
    >
    <p className="text-teal-800 font-semibold"> {item.name} </p>
    <p className="text-teal-950 font-bold"> ${item.price} </p>
    
    </button>
  )
}
