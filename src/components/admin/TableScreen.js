import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSelector } from 'react-redux';

function createData(title, price, description, carbs, protein) {
    return { title, price, description, carbs, protein };
}

// const rows = [
//     // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     // createData('Eclair', 262, 16.0, 24, 6.0),
//     // createData('Cupcake', 305, 3.7, 67, 4.3),
//     // createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export const TableScreen = () => {

    const [rows, setRows] = useState([])

    const { products } = useSelector(state => state.products)

    useEffect(() => {
        const finalRow = products.map((product) => {
            return createData(product.title, product.price, product.description, 'prueba', 3)
        })
        setRows(finalRow)
    }, [products])


    return (
        <div className="container" >
            {
                rows.length !== 0
                    ? <TableContainer component={Paper}>
                        <Table style={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.description}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <h1>Cargando...</h1>
            }
        </div>
    )
}
