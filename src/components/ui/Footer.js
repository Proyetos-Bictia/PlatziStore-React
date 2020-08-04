import React from 'react';
import TextField from '@material-ui/core/TextField';


export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="footer__box">
                            <h3>Products</h3>
                            <ul>
                                <li>
                                    <a href="google.com">
                                        Nuevos Productos
                                </a>
                                </li>
                                <li>
                                    <a href="google.com">
                                        Nuevos Productos
                                </a>
                                </li>
                                <li>
                                    <a href="google.com">
                                        Nuevos Productos
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="footer__box">
                            <h3>Acerca de Platzisotre</h3>
                            <ul>
                                <li>
                                    <a href="google.com">
                                        Sobre Nosotros
                                    </a>
                                </li>
                                <li>
                                    <a href="google.com">
                                        NUestras tiendas
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="footer__box">
                            <h3>Contacto</h3>
                            <TextField className="footer__input" color="secondary" label = "email" type="email" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
