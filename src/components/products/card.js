import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { addToCar } from '../../actions/car';

export const CardContain = ({ title, description, price, image, id }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const imageEdita = require(`../../${image}`);

    const handleNavigation = () => {
        history.push(`/products/${id}`)
    }

    const handleAddCar = () => {
        dispatch(addToCar({ title, description, price, image, id }))
    }

    return (
        <Card>
            <CardActionArea>
                <img
                    style={{ height: 250, width: '100%', objectFit: "contain", objectPosition: "center" }}
                    src={imageEdita}
                    alt="prueba"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={handleNavigation}
                >
                    view more
        </Button>
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={handleAddCar}
                >
                    Add car
        </Button>
            </CardActions>
        </Card>
    )
}
