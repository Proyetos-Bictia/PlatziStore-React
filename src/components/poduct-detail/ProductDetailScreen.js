import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { startLoadingOneProduct, clearOneProduct } from '../../actions/products';
import { useDispatch, useSelector } from 'react-redux';

export const ProductDetailScreen = () => {

    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const [imagePath, setImagePath] = useState('')

    const idPath = pathname.split('/')[2];
    const { productSelected } = useSelector(state => state.products);

    useEffect(() => {
        if (productSelected !== null) {
            setImagePath(require(`../../${productSelected.image}`))
        }
    }, [productSelected])

    useEffect(() => {
        dispatch(startLoadingOneProduct(idPath))
        return () => {
            dispatch(clearOneProduct());
        }
    }, [dispatch, idPath])

    const handleAddCar = () => {
        alert('add car')
    }

    return (
        <div className="detail__main">
            {
                productSelected !== null
                    ?
                    <div className="card" style={{ width: '18rem' }}>
                        <img
                            className="card-img-top"
                            src={imagePath}
                            alt="pruabq"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{productSelected.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                            <p className="card-text">{productSelected.description}</p>

                            <NumberFormat
                                value={productSelected.price}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                renderText={value => <p className="card-text">{value}</p>}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleAddCar}
                                startIcon={<AddShoppingCartIcon />}
                            >
                                Add to car
                            </Button>
                        </div>
                    </div>
                    :
                    <h1>Loading</h1>
            }
        </div>
    )
}
