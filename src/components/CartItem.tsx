import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from '../data/items.json'
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProp = {
    id: number;
    quantity: number;
}

export const CartItem = ({ id, quantity }: CartItemProp) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find(i => i.id === id)
  if (item === null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center" >
        <img className="shopping-cart-img" src={item!.imgUrl} />
        <div className="me-auto ">
            <div>
                {item!.name} {quantity > 1 && <span className="text-muted cart-item-quantity">x{quantity}</span>}
            </div>
            <div className="text-muted cart-item-pricing">
                {formatCurrency(item!.price)}
            </div>
        </div>
        <div className="me-auto">
            {formatCurrency(item!.price * quantity)}
        </div>
        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item!.id)}>&times;</Button>
    </Stack>
  )
}
