import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let { categoryId, categoryName } = useParams()
  return (
    <>
      <h5 key={categoryId}>
        Anda sekarang berada di kategori : {categoryName}
      </h5>
    </>
  )
}

export default ProductDetail
