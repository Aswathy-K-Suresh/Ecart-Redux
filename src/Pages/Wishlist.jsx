import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import { deleteFromWishlist } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartSlice';
import { RiH1 } from 'react-icons/ri';

function Wishlist() {
    const wishlistArray = useSelector((state) => state.wishlistReducer)//to get wishlist array
    const dispatch=useDispatch()
    return (
        <div>
            <div className="row">
                {
                    wishlistArray?.length > 0 ? wishlistArray.map((products) => (
                        <div className="col">
                            <MDBCard style={{ width: '300px', height: '530px', margin: '20px' }}>
                                <MDBCardImage src={products.thumbnail} height={'250px'} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle>{products.title}</MDBCardTitle>
                                    <MDBCardText>
                                        {products.description}
                                        <br />
                                        Price: {products.price}
                                    </MDBCardText>
                                    <div className='d-flex justify-content-evenly'>
                                        <MDBBtn onClick={()=>dispatch(deleteFromWishlist(products.id))} className='bg-light'> <i className='fa-solid fa-trash text-danger fs-3'></i></MDBBtn>
                                        <MDBBtn onClick={()=>dispatch(addToCart(products))} className='bg-light'> <i className='fa-solid fa-cart-plus text-success fs-3'></i></MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )) : <h1 className='text-center m-5 p-5'>No WishList products</h1>
                }
            </div>
        </div>


    )
}

export default Wishlist