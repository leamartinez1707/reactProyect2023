import React, { useEffect } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import useFirebase from '../../hooks/useFirebase'
import { useParams } from 'react-router-dom'
import Spinner from '../spinnerLoad/Spinner'
import Button from 'react-bootstrap/Button';
import { BsFillArrowLeftSquareFill, BsHouseExclamationFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const ItemDetailContainer = () => {

  const { id } = useParams();
  const { product, fetchGetProduct, loading } = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    fetchGetProduct({ id })
  }, [id])



  return (
    <>
      <div className='detailContainer'>
        <div className="title-h1">
          <h1 className='m-2 p-4 text-danger'>Information about the product</h1>
        </div>

        {loading && <Spinner />}
        {!loading &&
          <ItemDetail item={product} />
        }
      </div>
      <div className='detailContainer'>
        <Button className='m-2' onClick={() => navigate(-1)}
          variant='danger'>
          <BsFillArrowLeftSquareFill />
        </Button>

        <Button className='m-2' onClick={() => navigate('/')}
          variant='danger'>
          <BsHouseExclamationFill />
        </Button>
      </div>
    </>

  )
}

export default ItemDetailContainer