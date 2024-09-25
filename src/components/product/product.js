import React from 'react';

const Product = function ({productId}) {
  const [state, setState] = React.useState({
    productData: null,
    loading: true
  })

  React.useEffect(function () {
    const getProductData = async function () {
      setState({...state, loading: true});
      const res = await fetch(`/api/v1/products/${productId}`);
      const data = await res.json();
      setState({productData: data.productData, loading: false});
    }

    getProductData();
  }, [productId])

  return (
    <div></div>
  )
}

export default Product;
