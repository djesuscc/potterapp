import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { routeImage } from '../../helpers/routeImage';
import { setFavoriteCharacter } from '../../actions/characters';

const Card = (props) => {
    const dispatch = useDispatch();
    const {
        name,
        alive,
        index,
        image,
        house,
        gender,
        eyeColour,
        hairColour,
        isFavorite,
        dateOfBirth,
        hogwartsStaff,
        hogwartsStudent,
    } = props;
    const [houseColor, setHouseColor] = useState("");

    useEffect(() => {
        let gradient;
        switch (house) {
            case "Gryffindor":
                gradient = 'linear-gradient(135deg, #FF0000 0%, #FED482 100%)';
                break;
            case "Hufflepuff":
                gradient = 'linear-gradient(135deg, #FFC700 0%, #FFF388 100%)';
                break;
            case "Ravenclaw": 
                gradient = 'linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)';
                break;
            case "Slytherin":
                gradient = 'linear-gradient(135deg, #1C792B 0%, #82E95E 100%)';
                break;
            default:
                gradient = "";
                break;
        }
        setHouseColor(gradient);
    }, [ house ])

    const handleClickFavBtn = () => {
        if (!isFavorite) {
            dispatch(setFavoriteCharacter(props))
        }
    }
    const icon = isFavorite ? './icon-dark-fav.png' : './icon-light-fav.png';

    return (
        <div
            className='card'
            style={{
                backgroundColor: alive ? '#FFF' : '#CCCCCC',
                justifySelf: index%2 === 0 ? 'end' : 'start',
            }}
        >
            <div
                className='content-img'
                style={{
                    background: houseColor
                }}
            >
                <div
                    className='img'
                    style={{
                        backgroundImage: `url(${image})`
                    }}
                />
            </div>

            <div className='content-info'>
                <div className='desktop'>
                    <p className='truncate'>
                        {alive ? 'VIVO' : 'FINADO'}
                        /
                        {hogwartsStaff && 'STAFF'}
                        {hogwartsStudent && 'ESTUDIANTE'}
                    </p>
                    
                    <img
                        onClick={handleClickFavBtn}
                        src={routeImage(icon)}
                        alt="icon"
                    />
                </div>
                <div className='mobile'>
                    <div>
                        <p>
                            {alive ? 'VIVO' : 'FINADO'}
                        </p>
                        <p>
                            {hogwartsStaff && 'STAFF'}
                            {hogwartsStudent && 'ESTUDIANTE'}
                        </p>
                    </div>
                    <img
                        onClick={handleClickFavBtn}
                        src={routeImage(icon)}
                        alt="icon"
                    />
                </div>
                <h1 className='truncate'>
                    {name}
                </h1>
                <ul>
                    <li>
                        <b>Cumpleaños:</b>
                        &nbsp;
                        <span>
                            {dateOfBirth}
                        </span>
                    </li>
                    <li>
                        <b>Género:</b>
                        &nbsp;
                        <span>
                            {gender}
                        </span>
                    </li>
                    <li>
                        <b>Color de ojos:</b>
                        &nbsp;
                        <span>
                            {eyeColour}
                        </span>
                    </li>
                    <li>
                        <b>Color de pelo:</b>
                        &nbsp;
                        <span>
                            {hairColour}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

Card.propTypes = {
    props: PropTypes.shape({
        alive: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        house: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        eyeColour: PropTypes.string.isRequired,
        hairColour: PropTypes.string.isRequired,
        dateOfBirth: PropTypes.string.isRequired,
        hogwartsStaff: PropTypes.bool.isRequired,
        hogwartsStudent: PropTypes.bool.isRequired,
    })
}

export default Card;