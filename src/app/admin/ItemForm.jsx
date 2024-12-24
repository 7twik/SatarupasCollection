import React from 'react'
import ItemFormm from './ItemFormm'

const ItemForm = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add New Item</h1>
      <div className="max-w-md mx-auto">
        <ItemFormm />
      </div>
    </div>
  )
}

export default ItemForm