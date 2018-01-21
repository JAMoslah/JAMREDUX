import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

const FloatButton = ({  }) => {


  return (
    <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(237,76,60,1)">

          <ActionButton.Item buttonColor='blue' title="AJOUTTER " onPress={() => Actions.ModActes()}>
            <Text>3</Text>
          </ActionButton.Item>

          <ActionButton.Item buttonColor='green' title="SUPPRIMER" onPress={() => console.log("notes tapped!")}>
            <Text>2</Text>
          </ActionButton.Item>

          <ActionButton.Item buttonColor='yellow' title="AUTRE" onPress={() => console.log("notes tapped!")}>
            <Text>1 </Text>
          </ActionButton.Item>

        </ActionButton>
      </View>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export { FloatButton };
