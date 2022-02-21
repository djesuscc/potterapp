import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { routeImage } from '../../helpers/routeImage';
import useForm from '../../hooks/useForm';
import SquareButton from '../ui/SquareButton';
import StyledInputs from '../ui/StyledInputs';
import { postNewCharacter } from '../../actions/characters';

const CharacterModal = ({ isModalOpen, setIsModalOpen }) => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        name: '',
        image: '',
        eyeColour: '',
        hairColour: '',
        dateOfBirth: '',
    });

    const {
        name,
        image,
        eyeColour,
        hairColour,
        dateOfBirth,
    } = formValues;
    
    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log("Submit", formValues);
        dispatch(postNewCharacter(formValues));
    }
    return (
        <Modal
            isOpen={isModalOpen}
            className='modal'
            overlayClassName="background-modal"
            onRequestClose={closeModal}
            ariaHideApp={false}
        >
            <h1>
                Agrega un personaje
                <img
                    onClick={closeModal}
                    src={routeImage('./icon-close-modal.png')}
                    alt="close"
                />
            </h1>
            <form className='form' onSubmit={handleSubmitForm}>
                <StyledInputs
                    name="name"
                    value={name}
                    labelName="Nombre"
                    onChange={handleInputChange}
                />
                <StyledInputs
                    name="dateOfBirth"
                    type="date"
                    value={dateOfBirth}
                    labelName="Cumpleaños"
                    onChange={handleInputChange}
                />
                <StyledInputs
                    name="eyeColour"
                    value={eyeColour}
                    labelName="Color de ojos"
                    onChange={handleInputChange}
                />
                <StyledInputs
                    name="hairColour"
                    value={hairColour}
                    labelName="Color de pelo"
                    onChange={handleInputChange}
                />
                <div className='form-group'>
                    <label htmlFor="house">
                        CASA
                    </label>
                    <select
                        id="house"
                        name="house"
                        className='form-input'
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Slytherin">Slytherin</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="house">
                        VIVE
                    </label>
                    <select
                        id="alive"
                        name="alive"
                        className='form-input'
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Selecciona una opción</option>
                        <option value={true}>Si</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div className='section-radio'>
                    <div className='left-sect'>
                        <p>GÉNERO</p>
                        <div className='content-inputs'>
                            <div>
                                <input
                                    id='female'
                                    type='radio'
                                    name='gender'
                                    value="female"
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor='female'>Mujer</label>
                            </div>
                            <div>
                                <input
                                    id='male'
                                    type='radio'
                                    name='gender'
                                    value="male"
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor='male'>Hombre</label>
                            </div>
                        </div>
                    </div>
                    <div className='right-sect'>
                        <p>POSICIÓN</p>
                        <div className='content-inputs'>
                            <div>
                                <input
                                    type='radio'
                                    id='students'
                                    name='position'
                                    value='student'
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor='students'>Estudiante</label>
                            </div>
                            <div>
                                <input
                                    id='staff'
                                    type='radio'
                                    name='position'
                                    value="staff"
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor='staff'>Staff</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-file'>
                    <input
                        value={image}
                        type="file"
                        name='file'
                        id='file'
                        className='input-file'
                        accept="image/png, image/jpeg"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="file">FOTOGRAFIA (input type file)</label>
                </div>
                <div className='content-btn'>
                    <SquareButton type='submit' title="Guardar" />
                </div>
            </form>
        </Modal>
    )
}

CharacterModal.propTypes = {
    isModalOpen: PropTypes.bool,
    setIsModalOpen: PropTypes.func,
}

CharacterModal.defaultProps = {
    isModalOpen: false,
    setIsModalOpen: () => {},
}

export default CharacterModal;