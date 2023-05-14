import React, { Fragment } from 'react'
import Cards from '../components/cards/Cards'
const Home = () => {


  const items = [
    {
      id: "1",
      title: "Buzo de algodón negro",
      description: "Descripción del producto",
      img: "https://f.fcdn.app/imgs/1eb02f/menpi.uy/menpuy/0c8e/original/catalogo/GK9076-0-1/2000-2000/buzo-adidas-entrenamiento-hombre-negro-blanco-s-c.jpg"
    },
    {
      id: "2",
      title: "Buzo de algodón blanco",
      description: "Descripción del producto",
      img: "https://f.fcdn.app/imgs/1eb02f/menpi.uy/menpuy/0c8e/original/catalogo/GK9076-0-1/2000-2000/buzo-adidas-entrenamiento-hombre-negro-blanco-s-c.jpg"
    },
    {
      id: "3",
      title: "Buzo de algodón blanco",
      description: "Descripción del producto",
      img: "https://f.fcdn.app/imgs/1eb02f/menpi.uy/menpuy/0c8e/original/catalogo/GK9076-0-1/2000-2000/buzo-adidas-entrenamiento-hombre-negro-blanco-s-c.jpg"
    },

    {
      id: "4",
      title: "Buzo de algodón blanco",
      description: "Descripción del producto",
      img: "https://f.fcdn.app/imgs/1eb02f/menpi.uy/menpuy/0c8e/original/catalogo/GK9076-0-1/2000-2000/buzo-adidas-entrenamiento-hombre-negro-blanco-s-c.jpg"
    }
  ]

  return (
    <Fragment>
      <h1 className=' fs-12 m-4 text-danger '>Shop now</h1>
      <div className='d-flex'>
        {items.map((item) => (
          <Cards key={item.id} {...item} />
        ))}
      </div>
    </Fragment>
  )
}

export default Home