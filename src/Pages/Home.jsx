import React from 'react'
import useFetch from '../hooks/useFetch'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartSlice';

function Home() {

  const dispatch =useDispatch();

  const result = useFetch("https://dummyjson.com/products")
  console.log(result);

  return (
    <>
      <div className="row">
      <img height={'649px'} width={'100%'} src="https://img.freepik.com/premium-vector/summer-online-shopping-store-website-mobile-phone-design-smart-business-marketing-concept_62391-427.jpg" alt="" />
        {
          result?.length > 0 ? result.map((products) => (
            <div className="col">
              <MDBCard style={{width:'300px', height:'530px',margin:'20px'}}>
                <MDBCardImage src={products.thumbnail} height={'250px'} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{products.title}</MDBCardTitle>
                  <MDBCardText>
                   {products.description}
                   <br />
                   Price: {products.price}
                  </MDBCardText>
                 <div className='d-flex justify-content-evenly'>
                 <MDBBtn onClick={()=>dispatch(addToWishlist(products))} className='bg-light'> <i className='fa-solid fa-heart text-danger fs-3'></i></MDBBtn>
                  {/* <MDBBtn  className='bg-light'> <i className='fa-solid fa-cart-plus text-success fs-3'></i></MDBBtn> */}
                 </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          )) : "null"
        }
      </div>
    </>
  )
}

export default Home