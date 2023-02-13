import React from 'react'
import fetchAllProducts from '../utilities/fetchAllProducts'

function Products() {

    useEffect(() => {
        fetchAllProducts().then((data) => console.log(data.Products))
    }, [])

  return (
    <div>

    </div>
  )
}

export default Products