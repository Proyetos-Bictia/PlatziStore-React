import React from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import { startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            dispatch(startLoginEmailPassword(values.email, values.password))
        },
        validate: (values) => {
            const errors = {}
            if(!values.email || values.email.length < 6) errors.email="formato invalido"
            return errors
        }
    })
    return (
        <div className="auth__main">
            <div className="card" style={{ width: '18rem' }}>
                <img
                    src={require('../../assets/images/stickers2.png')}
                    alt="sticker"
                    className="auth__img"
                />
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <form>
                        <div className="form-group">
                            <TextField
                                error={errors.email ? true : false}
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                style={{ width: '100%' }}
                                autoComplete="false"
                                helperText={errors.email ? errors.email : ''}
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                style={{ width: '100%' }}
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
                    </form>
                </div>
            </div>
        </div>
    )
}
