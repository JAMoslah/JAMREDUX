import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { actesFetch } from '../actions';
import ListItem from './ListItem';




class ActesListe extends Component {
  componentWillMount(){
    this.props.actesFetch();
    this.createDataSource(this.props);

  }

  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps);
  }

  createDataSource({actes}){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(actes);
  }

  renderRow(acte){
    return <ListItem acte={acte} />;
  }

  render(){
    console.log("liste:")
    console.log(this.props);
    return(
      <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const actes = _.map(state.actes, (val, uid) => {
    return {...val, uid};
  });

  return { actes };

};

export default connect(mapStateToProps, { actesFetch })(ActesListe);
