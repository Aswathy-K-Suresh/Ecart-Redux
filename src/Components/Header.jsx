import React from 'react'
import { MDBContainer, MDBNavbar, MDBNavbarBrand,MDBIcon,MDBBtn } from 'mdb-react-ui-kit';
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Header() {

  const wishlistArray = useSelector((state)=>state.wishlistReducer)//to get wishlist array
  console.log(wishlistArray);
  const cartistArray = useSelector((state)=>state.cartlistReducer)
  console.log(cartistArray);
  return (

    <div>
      <MDBNavbar className='bg bg-primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-white'>
            <BsCart4 className='text-white fs-1' />
            ShopNShop
          </MDBNavbarBrand>
          <div className='d-flex justify-content-end'>
          <Link to="/wishlist">
            <div className="row">
              <MDBIcon fas icon="heart" color="danger" className='fs-2 m3-4'/>
              <MDBBtn className='btn btn-secondary w-25'>{wishlistArray.length}</MDBBtn>
            </div>
          </Link>
          <Link to='/cart'>
          <div className="row">
              <MDBIcon fas icon="shopping-cart" color="success" className='fs-2 m3-4'/>
              <MDBBtn className='btn btn-secondary w-25'>{cartistArray.length}</MDBBtn>
            </div>
          </Link>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header