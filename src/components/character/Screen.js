import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../actions/characters';
import { routeImage } from '../../helpers/routeImage';
import { SquareButton } from '../ui/SquareButton';
import Card from './Card';


export const Screen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCharacters());
    }, [ dispatch ])
    
    const { loaded, characters } = useSelector( state => state.characterReducer );
    return (
        <div className='screen'>
            <div className=''>
                <img src={routeImage('./logo.png')} alt="logo" />
            </div>
            {loaded && characters.length && (
                <>
                    <h1>Selecciona tu filtro</h1>
                    <div className='content-buttons'>
                        <SquareButton
                            title="Estudiantes"
                        />
                        <SquareButton
                            title="Staff"
                        />
                    </div>
                    <div className='content-cards'>
                        {characters.map((character, key) => (
                            <Card
                                key={key}
                                index={key}
                                {...{...character}} 
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
