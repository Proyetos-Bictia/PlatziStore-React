import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';

export const Navbar = () => {

    const { carCustomer } = useSelector(state => state.car)

    const history = useHistory();
    const { pathname: pathName } = history.location;

    const handleNavigate = (route) => {
        history.push(`/${route}`)
    }

    return (
        <div style={{ flexGrow: 1, margin: 0 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <Button
                                variant="contained"
                                color={pathName === '/home' ? 'secondary' : 'primary'}
                                onClick={() => handleNavigate('home')}
                                className="navbar__buttons"
                            >
                                Home
                            </Button>
                            <Button
                                variant="contained"
                                color={pathName === '/products' ? 'secondary' : 'primary'}
                                onClick={() => handleNavigate('products')}
                                className="navbar__buttons"
                            >
                                Products
                            </Button>
                            <Button
                                variant="contained"
                                color={pathName === '/contact' ? 'secondary' : 'primary'}
                                onClick={() => handleNavigate('contact')}
                                className="navbar__buttons"
                            >
                                Contact
                            </Button>
                        </div>
                        <div>
                            {/* <IconButton color="primary" aria-label="add to shopping cart">
                                <AddShoppingCartIcon />
                            </IconButton> */}
                            <Button
                                color="inherit"
                                onClick={() => handleNavigate('admin/create')}
                            >
                                login
                            </Button>
                        </div>
                    </div>
                    <Badge badgeContent={carCustomer.length} color="secondary">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="add to shopping cart"
                            onClick={() => handleNavigate('car')}
                            disabled={carCustomer.length === 0 ? true : false}
                        >
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Badge>
                </Toolbar>
            </AppBar>
        </div>
    )
}
