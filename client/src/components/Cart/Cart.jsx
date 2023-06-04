import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"



const Cart = () => {

  const data = [
    {
        id: 1 ,
        img: "https://i.insider.com/6259986433c02a0018ca1fef?width=1000&format=jpeg&auto=webp",
        img2: "https://i.insider.com/6259c94333c02a0018ca2db8?width=700&format=jpeg&auto=webp", 
        title: "Product ABC", 
        desc: "blablablabla",
        isNew: true,
        oldprice: 19,
        price: 12
      },
      {
        id: 2 ,
        img: "https://damro.lk/wp-content/uploads/2021/07/Britoli-2.jpg",
        img2: "https://i.insider.com/6259c9806e3336001926ea6c?width=700&format=jpeg&auto=webp", 
        title: "Product ABC 2", 
        desc: "blablablabla2",
        isNew: true,
        oldprice: 29,
        price: 22
      }
  ]


  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price"> 1 x ${item.price}</div>
            </div>
            <DeleteOutlinedIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <div className="reset">Reset Cart</div>
    </div>
  )
}

export default Cart
