import React from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdb-react-ui-kit'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromcartlist, emptyCart } from '../slices/cartSlice';
import { Button } from 'react-bootstrap';

function Cart() {
  const cartlistArray = useSelector((state) => state.cartlistReducer)
  const dispatch = useDispatch()

  const totalItems = cartlistArray.length
  const totalPrice = cartlistArray.reduce((total, item) => total + item.price, 0)

  const handleCartOrder=()=>{
    dispatch(emptyCart())
    alert("Order Placed Successfully")
  }
  return (
    <div>
      <div>
        <div className="row text-center m-5 p-2">
          <div className="col-5 shadow">
            <MDBTable className='caption-top'>
              <caption></caption>
              <MDBTableHead>
                <tr style={{ color: 'darkblue' }}>
                  <th scope='col'>Id</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Image</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {cartlistArray.length > 0 ? cartlistArray.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td><img height={'100px'} width={'100px'} src={item.thumbnail} alt="" /></td>
                    <td>{item.price}</td>
                    <td>
                      <MDBBtn onClick={() => dispatch(deleteFromcartlist(item.id))} className='bg-light'> 
                        <i className='fa-solid fa-trash text-danger fs-2'></i>
                      </MDBBtn>
                    </td>
                  </tr>
                )) : 'No Products Available'}
              </MDBTableBody>
            </MDBTable>
          </div>
          <div className="col-2"></div>
          <div className="col-5 shadow">
            <h1 className='m-5'>Cart Summary</h1>
            <h5>Total Cart Item: {totalItems}</h5>
            <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
            <Button onClick={() => handleCartOrder()} className='m-4'>Check Out</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
