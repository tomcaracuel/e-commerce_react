import React from 'react'
import './List.scss'
import '../Card/Card'

const List = () => {

  const data = [
    {
      id: 1 ,
      img: "https://i.insider.com/6259986433c02a0018ca1fef?width=1000&format=jpeg&auto=webp",
      img2: "https://i.insider.com/6259c94333c02a0018ca2db8?width=700&format=jpeg&auto=webp", 
      title: "Product ABC", 
      isNew: true,
      oldprice: 19,
      price: 12
    },
    {
      id: 2 ,
      img: "https://damro.lk/wp-content/uploads/2021/07/Britoli-2.jpg",
      img2: "https://i.insider.com/6259c9806e3336001926ea6c?width=700&format=jpeg&auto=webp", 
      title: "Product ABC 2", 
      isNew: true,
      oldprice: 29,
      price: 22
    }



  ]

  return (
    <div className="list">
        hola
    </div>
  )
}

export default List
