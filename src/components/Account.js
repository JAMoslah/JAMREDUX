import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View , Text, StyleSheet } from 'react-native';
import {FloatButton, Card, CardSection, Input, Button, Spinner,Calindar, Picker} from './common';



class Account extends Component {

  render(){
    console.log(this.props);
    return(
      <View>
        <Text>coucou</Text>
        <Card>

            <CardSection>
                <Input
                    label="Email"
                    placeHolder="email@gmail.com"

                    value={this.props.email}
                />
            </CardSection>

            <CardSection>
                <Input
                    secureTextEntry
                    label="Mot de passe"
                    placeHolder="password"

                    value={this.props.password}
                />
            </CardSection>

            <CardSection>
                <Input
                    label="Email"
                    placeHolder="email@gmail.com"

                    value={this.props.email}
                />
            </CardSection>

            <CardSection>
                <Input
                    secureTextEntry
                    label="Mot de passe"
                    placeHolder="password"

                    value={this.props.password}
                />
            </CardSection>

        </Card>

        <FloatButton  style = {styles.position}/>



      </View>
    );
  }
}
const styles = StyleSheet.create({
  position: {
    flex:1,
    alignItems:'center'
  },
});



export default Account;
