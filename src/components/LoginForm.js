import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button, Spinner, FloatButton, } from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import { Actions } from 'react-native-router-flux';





class LoginForm extends Component{

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress(){
    const { email, password} = this.props;
    this.props.loginUser({email, password});
  }

  onButtonPressSignup(){
    Actions.signup();
  }

renderButton(){
if (this.props.loading)
  {
    return <Spinner size="large"/>;}

return (
  <Button onPress={this.onButtonPress.bind(this)}>
    Se connecter
  </Button>
);
}

renderButtonSignup(){
  if (this.props.loading){
    return <Spinner size="large"/>;
  }

  return (
  <Button onPress={this.onButtonPressSignup.bind(this)}>
    Créé un compte
  </Button>
);
}

render(){
  let index = 0;
         const data = [
             { key: index++, section: true, label: 'Fruits banane ' },
             { key: index++, label: 'Red Apples' },
             { key: index++, label: 'Cherries' },
             { key: index++, label: 'Cranberries' },
             // etc...
             // Can also add additional custom keys which are passed to the onChange callback
             { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
         ];
  return(
    <View style = {styles.generale} >
      <Card>

          <CardSection>
              <Input
                  label="Email"
                  placeHolder="email@gmail.com"
                  onChangeText={this.onEmailChange.bind(this)}
                  value={this.props.email}
              />
          </CardSection>

          <CardSection>
              <Input
                  secureTextEntry
                  label="Mot de passe"
                  placeHolder="password"
                  onChangeText={this.onPasswordChange.bind(this)}
                  value={this.props.password}
              />
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
          <CardSection>
              {this.renderButton()}
          </CardSection>

          <CardSection>
              {this.renderButtonSignup()}
          </CardSection>

          
            </Card>

            <FloatButton style = {styles.position}/>


    </View>

  );
}
}

const styles = {
errorTextStyle: {
  fontSize: 20,
  alignSelf: 'center',
  color: 'red'
},
position: {
  flex:1,
  alignitems:'flex-end'
},
generale: {
  flex:1,

}
};

const mapStateToProps = ({ auth }) => {
const { email, password, error, loading } = auth;
return { email, password, error, loading};
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
