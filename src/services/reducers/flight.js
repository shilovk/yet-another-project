import {
  PARTICIPANT_REGISTER_FORM_SET_VALUE,
  PARTICIPANT_REGISTER_FORM_SUBMIT,
  PARTICIPANT_REGISTER_FORM_SUBMIT_SUCCESS,
  PARTICIPANT_REGISTER_FORM_SUBMIT_FAILED
} from '../actions/flight';

const initialState = {
  form: {
    name: '',
    surname: '',
    numberOfPets: null,
    extraSocket: false,
    ownRack: false,
  },
  registrationRequest: false,
  registrationFailed: false,
}

export const participantRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARTICIPANT_REGISTER_FORM_SET_VALUE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value
        }
      };
    }
    case PARTICIPANT_REGISTER_FORM_SUBMIT: {
      return {
        ...state,
        registrationRequest: true,
        registrationFailed: false
      };
    }
    case PARTICIPANT_REGISTER_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        form: {
          ...initialState.form
        },
        registrationRequest: false
      };
    }
    case PARTICIPANT_REGISTER_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        registrationRequest: false,
        registrationFailed: true
      };
    }
    default: {
      return state;
    }
  }
};
