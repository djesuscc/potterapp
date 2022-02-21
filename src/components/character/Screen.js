import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../actions/characters';
import { routeImage } from '../../helpers/routeImage';
import ActionButtons from '../ui/ActionButtons';
import SquareButton from '../ui/SquareButton';
import Card from './Card';
import CharacterModal from './CharacterModal';


export const Screen = () => {
    const dispatch = useDispatch();
    const [groupCharacters, setGroupCharacters] = useState()
    const [groupSelected, setGroupSelected] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
      dispatch(getCharacters());
    }, [ dispatch ])
    
    const {
        loaded,
        characters: fetchCharacters,
    } = useSelector( state => state.characterReducer );
    
    useEffect(() => {
        const filterGroup = fetchCharacters.filter((character) => character[groupSelected]);
        const characters = filterGroup.length > 0 ? filterGroup : fetchCharacters;
        setGroupCharacters(characters);
    }, [ groupSelected, fetchCharacters ])

    return (
        <div className='screen'>
            <ActionButtons
                setIsModalOpen={setIsModalOpen}
                characters={fetchCharacters}
            />
            <div className=''>
                <img src={routeImage('./logo.png')} alt="logo" />
            </div>
            {loaded && groupCharacters.length > 0 && (
                <>
                    <h1>Selecciona tu filtro</h1>
                    <div className='content-buttons'>
                        <SquareButton
                            title="Estudiantes"
                            onClick={() => setGroupSelected("hogwartsStudent")}
                            className={groupSelected === "hogwartsStudent" && "active"}
                        />
                        <SquareButton
                            title="Staff"
                            onClick={() => setGroupSelected("hogwartsStaff")}
                            className={groupSelected === "hogwartsStaff" && "active"}
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
            <CharacterModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    )
}
