import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../actions/characters';
import { routeImage } from '../../helpers/routeImage';
import SquareButton from '../ui/SquareButton';
import Card from './Card';


export const Screen = () => {
    const dispatch = useDispatch();
    const [groupCharacters, setGroupCharacters] = useState()
    const [groupSelected, setGroupSelected] = useState()
    useEffect(() => {
      dispatch(getCharacters());
    }, [ dispatch ])
    
    const {
        loaded,
        characters: fetchCharacters,
    } = useSelector( state => state.characterReducer );
    
    useEffect(() => {
        const filterGroup = fetchCharacters.filter((character) => character[groupSelected]);
        const characters = filterGroup.length ? filterGroup : fetchCharacters

        setGroupCharacters(characters);
    }, [ groupSelected, fetchCharacters ])

    return (
        <div className='screen'>
            <div className=''>
                <img src={routeImage('./logo.png')} alt="logo" />
            </div>
            {loaded && groupCharacters.length && (
                <>
                    <h1>Selecciona tu filtro</h1>
                    <div className='content-buttons'>
                        <SquareButton
                            title="Estudiantes"
                            onClick={() => setGroupSelected("hogwartsStudent")}
                        />
                        <SquareButton
                            title="Staff"
                            onClick={() => setGroupSelected("hogwartsStaff")}
                        />
                    </div>
                    <div className='content-cards'>
                        {groupCharacters.map((character, key) => (
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
