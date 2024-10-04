import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setParticipantFormValue, register } from '../../services/actions/flight';

export const Registration = () => {
  const {
    name,
    surname,
    numberOfPets,
    extraSocket,
    ownRack
  } = useSelector(state => state.participantRegistration.form);

  const { registrationRequest } = useSelector(state => state.participantRegistration);

  const dispatch = useDispatch();

  const onFormChange = (e) => {
    const { name, type, value, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    dispatch(setParticipantFormValue(name, fieldValue));
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(register());
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="name">Имя</label>
      <input type="text" onChange={onFormChange} value={name} name="name" id="name" />

      <label htmlFor="surname">Фамилия</label>
      <input type="text" onChange={onFormChange} value={surname} name="surname" id="surname" />

      <label htmlFor="numberOfPets">Количество питомцев</label>
      <input type="number" min="1" onChange={onFormChange} value={numberOfPets} name="numberOfPets" id="numberOfPets"/>

      <label htmlFor="extraSocket">Требуется дополнительная розетка</label>
      <input type="checkbox" onChange={onFormChange} checked={extraSocket} name="extraSocket" id="extraSocket"/>

      <label htmlFor="ownRack">Собственный стеллаж</label>
      <input type="checkbox" onChange={onFormChange} checked={ownRack} name="ownRack" id="ownRack"/>

      <button type="submit" disabled={registrationRequest}>Зарегистрироваться</button>
    </form>
  );
};
