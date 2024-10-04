export const PARTICIPANT_REGISTER_FORM_SET_VALUE = 'PARTICIPANT_REGISTER_FORM_SET_VALUE';
export const PARTICIPANT_REGISTER_FORM_SUBMIT = 'PARTICIPANT_REGISTER_FORM_SUBMIT';
export const PARTICIPANT_REGISTER_FORM_SUBMIT_SUCCESS = 'PARTICIPANT_REGISTER_FORM_SUBMIT_SUCCESS';
export const PARTICIPANT_REGISTER_FORM_SUBMIT_FAILED = 'PARTICIPANT_REGISTER_FORM_SUBMIT_FAILED';

export const setParticipantFormValue = (field, value) => ({
  type: PARTICIPANT_REGISTER_FORM_SET_VALUE,
  field,
  value
});

export const register = () => (dispatch, getState) => {
  dispatch({
    type: PARTICIPANT_REGISTER_FORM_SUBMIT
  });

  const { form } = getState().participantRegistration;

  fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form) // Передаем форму как есть
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: PARTICIPANT_REGISTER_FORM_SUBMIT_SUCCESS,
        data
      });
    })
    .catch(err => {
      dispatch({
        type: PARTICIPANT_REGISTER_FORM_SUBMIT_FAILED
      });
    });
};
