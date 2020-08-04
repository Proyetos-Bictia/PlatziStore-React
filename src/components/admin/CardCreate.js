import React from 'react';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';

import { createNewProduct } from '../../actions/products';

export const CardCreate = () => {

    const dispatch = useDispatch();

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            id: '',
            title: '',
            image: 'assets/images/stickers2.png',
            price: 0,
            description: ''
        },
        onSubmit: (values) => {
            dispatch(createNewProduct(values));
        },
        validate: (values) => {
            const errors = {}
            if (!values.id || values.id.length < 1) errors.id = "id invalid"
            if (!values.title || values.title.length < 4) errors.title = "titulo invalid"
            if (!values.image || values.image.length < 8) errors.image = "image invalid"
            if (!values.price || values.price < 1000) errors.price = "price invalid"
            if (!values.description || values.description.length < 8) errors.description = "description invalid"
            return errors
        }
    })
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">Create Product</h5>
                <div className="form-group">
                    <TextField
                        label="Id"
                        name="id"
                        value={values.id}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                        autoComplete="false"
                        helperText={errors.id && errors.id }
                        error={errors.id ? true : false}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        label="Title"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                        autoComplete="false"
                        helperText={errors.title && errors.title}
                        error={errors.title ? true : false}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        label="Image"
                        name="image"
                        value={values.image}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                        autoComplete="false"
                        helperText={errors.image && errors.image}
                        error={errors.image ? true : false}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        type="number"
                        label="Price"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                        autoComplete="false"
                        helperText={errors.price && errors.price}
                        error={errors.price ? true : false}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        label="Description"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                        autoComplete="false"
                        helperText={errors.description && errors.description}
                        error={errors.description ? true : false}
                    />
                </div>
                <div className="form-group">
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ width: '100%' }}
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    )
}
