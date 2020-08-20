import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import * as dataActions from './actions/actions';

class TestApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      isLoading: true
    };
  }

  componentDidMount() {
    var data = "089347274628799";
    // console.log(this.props.dataActions.postData(data))
    // fetch('http://192.168.0.168:8888/piglet', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: data,
    // })
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({ data: data });
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // })    
    // .finally(() => {
    //   this.setState({ isLoading: false });
    // });
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    );
  }
};

function mapState(state) {
    return {
        serialapp: state.serialapp
    };
}

function mapDispatch(dispatch) {
  
    return {
        dataActions: bindActionCreators(dataActions, dispatch),
    };
}

export default connect(mapState, mapDispatch)(TestApp);

