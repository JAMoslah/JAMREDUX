import {  CHANGE_TEXTO , CHANGE_PICKER, CHANGE_FORM,
          CHANGE_PROF, ACTE_UPDATE, ACTE_CREATE,
          IS_DATE_TIME_PICKER_VISIBLE_TRUE,
          IS_DATE_TIME_PICKER_VISIBLE_FALSE } from '../actions/types';

const INITIAL_STATE = { isDateTimePickerVisible: false, texto: 'coucou' , dataProf :'', form:'', prof:'lolo', Commentaire:'', Prenom: '', Dossier:'', Nom:'' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CHANGE_TEXTO:
        return {...state, texto: action.payload  };
      case CHANGE_PICKER:
        return {...state, dataProf: action.payload  };
      case CHANGE_FORM:
        return {...state, form: action.payload  };
      case CHANGE_PROF:
        return {...state, prof: action.payload  };
      case IS_DATE_TIME_PICKER_VISIBLE_TRUE:
        return {...state, isDateTimePickerVisible: true  };
      case IS_DATE_TIME_PICKER_VISIBLE_FALSE:
        return {...state, isDateTimePickerVisible: false  };
      case ACTE_UPDATE:
        return {...state, [action.payload.prop]: action.payload.value };
      case ACTE_CREATE:
        return INITIAL_STATE;
      default:
        return state;

    }
};
