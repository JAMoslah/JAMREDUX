import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {emailCreate, passwordCreate, userCreate} from '../actions';
import { Actions } from 'react-native-router-flux';

class Signup extends Component{

  onEmailCreate(text){
    this.props.emailCreate(text);
  }

  onPasswordCreate(text){
    this.props.passwordCreate(text);
  }

  onButtonPress(){
    const { email, password} = this.props;
    this.props.userCreate({email, password});
  }

renderButton(){
  if (this.props.loading){
    return <Spinner size="large"/>;
  }

  return (
  <Button onPress={this.onButtonPress.bind(this)}>
    signup
  </Button>
);
}
render(){
  return(
    <Card>

        <CardSection>
            <Input
                label="Adresse email"
                placeHolder="email@gmail.com"
                onChangeText={this.onEmailCreate.bind(this)}
                value={this.props.email}
            />
        </CardSection>

        <CardSection>
            <Input
                secureTextEntry
                label="Mot de passe"
                placeHolder="password"
                onChangeText={this.onPasswordCreate.bind(this)}
                value={this.props.password}
            />
        </CardSection>


        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
            {this.renderButton()}
        </CardSection>
    </Card>

  );
}
}

const styles = {
errorTextStyle: {
  fontSize: 20,
  alignSelf: 'center',
  color: 'red'
}
};

const mapStateToProps = ({ sign }) => {
const { email, password, error, loading } = sign;
return { email, password, error, loading};
};

export default connect(mapStateToProps, {emailCreate, passwordCreate, userCreate})(Signup);
