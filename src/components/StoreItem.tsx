import { Card, Button } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'
import { useState } from 'react'

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
}

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleItemAdd = () => {
    setQuantity(quantity + 1)
  }

  const handleItemRemove = () => {
      setQuantity(quantity - 1)
  }

  const handleAllRemove = () => {
      setQuantity(0)
  }

  return (
    <Card className="h-100">
        <Card.Img className="store-item-img" variant="top" src={imgUrl} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span>{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={handleItemAdd}>+ Add to cart</Button>
                ) : (
                    <div className="store-counter-button d-flex align-items-center flex-column">
                        <div className="store-counter-button d-flex align-items-center justify-content-center">
                            <Button className="bg-danger" onClick={handleItemRemove}>-</Button>
                            <div>
                                <span className="fs-4">{quantity}</span> {quantity < 2 ? "item" : "items"} in cart
                            </div>
                            <Button onClick={handleItemAdd}>+</Button>
                        </div>
                        <Button className="bg-danger" onClick={handleAllRemove}>Remove all</Button>
                    </div>
                )}
            </div>
        </Card.Body>
    </Card>
  )
}
