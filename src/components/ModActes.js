import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {FloatButton, Card, CardSection, Input, Button, Spinner, Picker, Form,} from './common';

import {changetexto, changePicker, changeform,
        changeprof,acteUpdate, acteCreate,
        showDateTimePicker, hideDateTimePicker} from '../actions';

import {profChirurgie, profParo, profOce, profProthese ,} from '../data/Prof';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DateTimePicker from 'react-native-modal-datetime-picker';




const dataProf = [];
class ModActes extends Component{

  onshowDateTimePicker = () => {
    this.props.showDateTimePicker();
  };

  onhideDateTimePicker = () => {
    this.props.hideDateTimePicker();
  };

  handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.onhideDateTimePicker();
  };





  onButtonPress(){
      const { Nom, Prenom, Commentaire, Dossier } = this.props;
      this.props.acteCreate({ Nom, Prenom, Commentaire, Dossier });
    }

onchangetexto (text){
this.changeDataProf();
this.props.changetexto(text);

};

onchangeform (text){
this.props.changeform(text);
};

onchangeprof (text){
this.props.changeprof(text);
};

changeDataProf() {
   switch (this.props.texto) {

  case 'Chirurgie': return (
    <Picker
    initialvalue='Enseignant'
    datao={profChirurgie}
    onchange={(val) => {this.onchangeprof(val.label)}}
    />
    );

  case 'Endodontie': return (
    <Picker
      initialvalue='Enseignant'
      datao={profOce}
      onchange={(val) => {this.onchangeprof(val.label)}}
      />
    );

  case 'Parodontie': return (
      <Picker
        initialvalue='Enseignant'
        datao={profParo}
        onchange={(val) => {this.onchangeprof(val.label)}}
      />
    );

  case 'Prothèse': return (
    <Picker
      initialvalue='Enseignant'
      datao={profProthese}
      onchange={(val) => {this.onchangeprof(val.label)}}
    />
  );

  default:
    return (<View></View>);

  };
};

changeDataForm() {
   switch (this.props.texto) {

  case 'Chirurgie': return (
    <KeyboardAwareScrollView>
      <Card>

          <CardSection>
              <Input
                  label="Dossier"
                  value={this.props.Dossier}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Dossier', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Nom"
                  value={this.props.Nom}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Nom', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Prenom"
                  value={this.props.phone}
                  onChangeText={value => this.props.acteUpdate({ prop: 'phone', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Commentaire"
                  value={this.props.Commentaire}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Commentaire', value })}
              />
          </CardSection>

            </Card>
    </KeyboardAwareScrollView>
  );

  case 'Endodontie': return (
    <KeyboardAwareScrollView>
      <Card>

          <CardSection>
              <Input
                  label="Dossier"
                  value={this.props.Dossier}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Dossier', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Nom"
                  value={this.props.Nom}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Nom', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Prenom"
                  value={this.props.Prenom}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Prenom', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Commentaire"
                  value={this.props.Commentaire}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Commentaire', value })}
              />
          </CardSection>

            </Card>
    </KeyboardAwareScrollView>

    );

  case 'Parodontie': return (
    <KeyboardAwareScrollView>
      <Card>

          <CardSection>
              <Input
                  label="Dossier"
                  value={this.props.Dossier}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Dossier', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Nom"
                  value={this.props.Nom}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Nom', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Prenom"
                  value={this.props.Prenom}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Prenom', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Commentaire"
                  value={this.props.Commentaire}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Commentaire', value })}
              />
          </CardSection>

            </Card>
    </KeyboardAwareScrollView>
    );

  case 'Prothèse': return (
    <KeyboardAwareScrollView>
      <Card>

          <CardSection>
              <Input
                  label="Dossier"
                  value={this.props.Dossier}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Dossier', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Nom"
                  value={this.props.Nom}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Nom', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Prenom"
                  value={this.props.Prenom}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Prenom', value })}
              />
          </CardSection>

          <CardSection>
              <Input
                  label="Commentaire"
                  value={this.props.Commentaire}
                  onChangeText={value => this.props.acteUpdate({ prop: 'Commentaire', value })}
              />
          </CardSection>

            </Card>
    </KeyboardAwareScrollView>
  );

  default:
    return (<View></View>);

  };
  };

render(){

  let index = 0;
         const data = [
             { key: index++, label: 'Odonto Concervatrice' },
             { key: index++, label: 'Chirurgie' },
             { key: index++, label: 'Endodontie' },
             { key: index++, label: 'Parodontie' },
             { key: index++, label: 'Prothèse' },
             { key: index++, label: 'Pedodontie' },
                                                                  ];
  return (
    <View style = {styles.generale}>

        <View style={{flex:1}}>
        <Picker
          initialvalue='Discipline'
          datao={data}
          onchange={(val) => {this.onchangetexto(val.label)}}
        />
        </View>


        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={this.onshowDateTimePicker.bind(this)}>
            <Text>Show DatePicker</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.props.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked.bind(this)}
            onCancel={this.onhideDateTimePicker.bind(this)}
          />
        </View>


        <View style={{flex:1}}>
          {this.changeDataProf()}
        </View>

        <View style={{flex:3}}>
        {this.changeDataForm()}
        </View>

        <View style={{flex:0.3}}>
      <Button
        onPress={ this.onButtonPress.bind(this)}>
        Validé
      </Button>
        </View>

        <View style={{flex:0.1}}>

        </View>

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
  alignItems:'flex-end'
},
generale: {
  flex:1,

},

};

const mapStateToProps = ({ Mode }) => {
const {texto, prof, Nom, Prenom, Dossier, Commentaire, isDateTimePickerVisible} = Mode;
return {texto, prof, Nom, Prenom, Dossier, Commentaire, isDateTimePickerVisible};
};

export default connect(mapStateToProps, {hideDateTimePicker, showDateTimePicker, acteCreate, acteUpdate, changetexto, changePicker, changeform, changeprof, })(ModActes);
