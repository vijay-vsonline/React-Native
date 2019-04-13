import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import { ListItem } from 'react-native-elements';
import {apiURL} from '../Config/Conf/';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username: '',
      avatar_url: '',
      location: '',
    }
  }
  componentDidMount() {
    const name = this.props.navigation.getParam('Uname').replace(/[\u200B-\u200D\uFEFF]/g, '');
    fetch(apiURL + decodeURI(name))
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          id: responseJson.id,
          avatar_url: responseJson.avatar_url,
          location: responseJson.location,
          username: responseJson.login,
          localResponse:responseJson
        })
      }).catch(error => console.log(error))
  }

  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    title: 'Profile',
    headerStyle: { backgroundColor: 'black' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
  };

  render() {
    const { navigate } = this.props;
    return (
      <ListItem
      key={0}
        leftAvatar={{
          title: this.state.username,
          source: { uri: this.state.avatar_url },
          showEditButton: true,
        }}
        title={this.state.username}
        subtitle={this.state.location}
        chevron
      />
    );
  }
}