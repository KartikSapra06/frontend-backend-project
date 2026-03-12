export function generateWhatsAppMessage(cartItems: any[], total: number): string {
  const restaurantName = 'AKAG RESIDENCY'
  const restaurantPhone = '+91 9896819800'
  const restaurantAddress = '123 Ambala, Haryana'

  const items = cartItems
    .map(item => `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
    .join('\n')

  const message = `🍽️ *Order from ${restaurantName}*\n\n*Items:*\n${items}\n\n*Subtotal:* ₹${total}\n*Delivery:* Free\n*Tax:* Included\n\n📍 ${restaurantAddress}\n📞 ${restaurantPhone}\n\nPlease confirm my order!`

  return message
}
