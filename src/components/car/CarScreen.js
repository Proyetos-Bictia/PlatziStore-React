import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { deleteToCar } from '../../actions/car';

export const CarScreen = () => {

    const dispatch = useDispatch();

    const { carCustomer } = useSelector(state => state.car)

    const handelDeleteProduct = (product) => {
        dispatch(deleteToCar(product.id))
    }

    return (
        <div className="container">
            <div>
                <h3 style={{ fontWeight: "bold", fontFamily: "cursive" }}>Tu lista de compras</h3>
                <br />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Events</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carCustomer.length !== 0
                            ?
                            carCustomer.map((item) => {
                                return (
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.image}</td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => handelDeleteProduct(item)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            <h1>waiting...</h1>
                    }
                </tbody>
            </table>
        </div>
    )
}
