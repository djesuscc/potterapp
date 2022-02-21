import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFavoriteCharacter } from '../../actions/characters';
import { routeImage } from '../../helpers/routeImage';

const ActionButtons = ({ setIsModalOpen, characters }) => {
    const dispatch = useDispatch();
    const [showList, setShowList] = useState(false);
    const [listCharacters, setListCharacters] = useState([]);

    useEffect(() => {
        const favCharacter = characters.filter((ch) => ch.isFavorite);
        setListCharacters(favCharacter);
    }, [characters])

    const handleRemoveFavorite = (id, item) => {
        dispatch(removeFavoriteCharacter(id, item));
    }
    
    return (
        <div className='content-list-fav'>
            <div className='actions-btn'>
                <p onClick={() => setShowList(!showList)}>
                    FAVORITOS
                    <img src={routeImage('./icon-white-fav.png')} alt="fav" />
                </p>
                <p onClick={() => setIsModalOpen(true)}>
                    AGREGAR
                    <img src={routeImage('./icon-user-add.png')} alt="fav" />
                </p>
            </div>
            {showList && listCharacters.length > 0 && (
                <div className='content-list'>
                    <ul>
                        {listCharacters.map((item) => (
                            <li key={item.id}>
                                <div className='info'>
                                    <div>
                                        <div
                                            className='img'
                                            style={{
                                            backgroundImage: `url(${item.image})`
                                        }} />
                                        <p>{item.name}</p>
                                    </div>
                                    <img
                                        onClick={() => handleRemoveFavorite(item.id, item)}
                                        src={routeImage('./icon-trash.png')}
                                        alt="trash"
                                    />
                                </div>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ActionButtons;