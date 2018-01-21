import React from 'react';
import { TextInput, View, Text } from 'react-native';
import ModalSelector from 'react-native-modal-selector';


const Picker = ({datao ,initialvalue, texto, onchange}) => {

        return (
          <View style={{flex:1, justifyContent:'space-around', padding:50}}>


                          <ModalSelector
                              data={datao}
                              initValue={initialvalue}
                              onChange={onchange}
                              cancelText='annuler '
                              animationType='none'
                              overlayStyle= {styles.overlayStyle}
                             />

                      </View>
        );
    }

    const styles = {
      overlayStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'

      }
    };


export { Picker };
