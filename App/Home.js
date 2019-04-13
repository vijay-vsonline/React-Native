import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { AsyncStorage } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GitHubUserList: ["mojombo​", "defunkt​", "​pjhyett​", "wycats​", "ezmobius​"],
    }
  }
  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    title: 'Home',
    headerStyle: { backgroundColor: 'black' },
    headerTitleStyle: { color: 'white' },
    
  };

  render() {
    const userList = this.state.GitHubUserList.map((data) => {
      return (
        <View >
          <View style={{ width: 250, height: 50, borderRadius: 15 }} >

            <Button title={data} onPress={() => this.props.navigation.push('Profile',{ Uname : data })}></Button>
          </View>
        </View>
      )
    })
    return (
      <View>
        <View>
        <Text style={{fontWeight:'bold'}}>Top 5 GitHub Users</Text>
        <Text>Tap the Username to see more information
        </Text>
        </View>
        <View style={{flexWrap: 'wrap', justifyContent: 'center',alignItems: 'center',margin:20}}>
        {userList}

        </View>
      </View>

    );
  }
}

