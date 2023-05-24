import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'


const FeaturedProducts = ({ type }) => {

  const data = [
    {
        id:1, 
        img: "https://cdn.create.vista.com/api/media/small/171588658/stock-photo-modern-light-interior",
        img2: "https://www.shutterstock.com/image-illustration/interior-living-room-framed-vertical-260nw-520190392.jpg",
        title: "Chair",
        isNew: true,
        oldPrice: 139,
        price: 105,
    },
    {
        id:2, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWwndXirOcRHg1F8akblKUK3bfiiHApwlPQwDIGYxi05iYYIOBJCk_-DDESXjVs6927Y&usqp=CAU",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnRrzg28l44yPUL_kPCsLeGoAGhKNLleYbA&usqp=CAU",
        title: "Chair",
        isNew: true,
        oldPrice: 129,
        price: 99,
    },

    {
        id:3, 
        img: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2: "https://cdn.shopify.com/s/files/1/0550/3903/3494/products/sidneyblancacopy_300x300.jpg?v=1643219419",
        title: "Chair",
        isNew: true,
        oldPrice: 129,
        price: 99,
    }



    
  ];


    
    
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit natus itaque labore magni obcaecati tempora ad neque delectus quos sunt aperiam impedit minima quasi fugit cumque, ipsa doloribus molestias.
            </p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts
