import firebase from 'firebase';
import { CHANGE_TEXTO, CHANGE_PICKER, CHANGE_FORM,
         CHANGE_PROF, ACTES_FETCH, ACTE_UPDATE, ACTE_CREATE,
         IS_DATE_TIME_PICKER_VISIBLE_TRUE,
         IS_DATE_TIME_PICKER_VISIBLE_FALSE} from './types';

export const changetexto = (text) => {
  return {
    type: CHANGE_TEXTO,
    payload: text
  };
};

export const actesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/acte`)
    .on('value', snapshot => {
      dispatch({ type: ACTES_FETCH, payload: snapshot.val() })
    });
  };
};

export const changePicker = (text) => {
  return {
    type: CHANGE_PICKER,
    payload: text
  };
};

export const changeform = (text) => {
  return {
    type: CHANGE_FORM,
    payload: text
  };
};

export const changeprof = (text) => {
  return {
    type: CHANGE_PROF,
    payload: text
  };
};

export const acteUpdate = ({ prop, value }) => {
    return {
      type: ACTE_UPDATE,
      payload: { prop, value }

    };
};

export const acteCreate = ({ Nom, Prenom, Commentaire, Dossier }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/acte`)
      .push({ Nom, Prenom, Commentaire, Dossier})
      .then (() => {
        dispatch({ type: ACTE_CREATE});
        Actions.main({ type: 'reset' });
      });
  };
};

export const showDateTimePicker = (dispatch) => {
  dispatch({ type: IS_DATE_TIME_PICKER_VISIBLE_TRUE});
};

export const hideDateTimePicker = (dispatch) => {
  dispatch({ type: IS_DATE_TIME_PICKER_VISIBLE_FALSE});
};
