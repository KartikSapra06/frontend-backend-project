interface CartItemProps {
  item: any
  onRemove: (id: string) => void
  onQuantityChange: (id: string, quantity: number) => void
}

export default function CartItem({ item, onRemove, onQuantityChange }: CartItemProps) {
  return (
    <div className="border border-yellow-600 rounded-lg p-4 flex gap-4 hover:shadow-lg hover:shadow-yellow-600/30 transition-all">
      {/* Image */}
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-playfair text-lg gold-text">{item.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{item.description}</p>
        <p className="font-playfair text-xl gold-text">₹{item.price}</p>
      </div>

      {/* Quantity and Remove */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-400 hover:text-red-300 text-sm"
        >
          Remove
        </button>
        <div className="flex items-center gap-2 bg-black border border-yellow-600 rounded px-3 py-1">
          <button
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            className="text-yellow-500 hover:text-yellow-400"
          >
            −
          </button>
          <span className="text-white px-2 min-w-[1.5rem] text-center">{item.quantity}</span>
          <button
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            className="text-yellow-500 hover:text-yellow-400"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
