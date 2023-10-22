import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting, stock, initial}) => {
  return (
    <div className='bg-white text-black py-96'>
        {greeting}
        <ItemCount stock={5} initial={1} />
    </div>

  )
}

export default ItemListContainer