import React from 'react'
import Product from './Product'

const page = ({params}) => {
    const {id} = params
    const data={
        id:5,
        category:"painting",
        title:"The Last Supper",
        price:3000,
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        description:"The Last Supper is a late 15th-century mural painting by Italian artist Leonardo da Vinci housed by the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy. It is one of the Western world's most recognizable paintings."
    }
  return (
    <div>
        <Product {...data} />
    </div>
  )
}

export default page