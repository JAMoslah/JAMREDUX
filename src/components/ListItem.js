import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

  onRowPress(){
      //Actions.acteEdit({ acte: this.props.acte });
      console.log("item pressed");
  }

  render(){
    const { Nom, Prenom, Commentaire, Dossier, uid } = this.props.acte;

    return(
      <TouchableWithoutFeedback onPress={ this.onRowPress.bind(this)}>
          <View>
                <CardSection style={styles.textcCarde}>
                    <Text style={styles.titleStyle}>
                        {Nom}
                    </Text>
                    <Text style={styles.titleStyle}>
                        {Prenom}
                    </Text>
                    <Text style={styles.titleStyle}>
                        {Commentaire}
                    </Text>
                    <Text style={styles.titleStyle}>
                        {Dossier}
                    </Text>
                </CardSection>
          </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  textcCarde: {
    flexDirection:'column'
  }
};

export default ListItem;
