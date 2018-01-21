import React from 'react';
import {Actions , Scene , Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Account from './components/Account';
import Signup from './components/Signup';
import ModActes from './components/ModActes';
import ActesListe from './components/ActesListe';
// importer la page acount


const RouterComponent = () => {
return(

<Router>
  <Scene key="root" hideNavBar>

                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Connexion"/>
                    <Scene key="signup" component={Signup} title="Créer un compte"/>
                </Scene>

                <Scene key="main" >
                    <Scene
                      key="ActesListe"
                      onRight={ () => Actions.ModActes()}
                      rightTitle="Add"
                      component={ActesListe}
                      title="Employees"
                      initial
                      />

                    <Scene
                      key="ModActes"
                      onRight={ () => Actions.ActesListe()}
                      rightTitle="Enregistrer"
                      component={ModActes}
                      title="AJOUTTER UN ACTE"
                      />
              </Scene>
    </Scene>
</Router>
);





};

export default RouterComponent;
