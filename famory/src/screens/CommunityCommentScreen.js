import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Text, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Empty from "../components/Empty";

import Meteor from "../assets/icons/meteor";
import SendMessage from "../assets/icons/sendMessage";
import Rocket from "../assets/icons/rocket";
import Ufo from "../assets/icons/ufo";
import Comet from "../assets/icons/comet";

import LottieView from "lottie-react-native";

let comments = [
  {
    id: 0,
    text: 'import Meteor from "../assets/icons/meteor";',
  },
  {
    id: 1,
    text: 'Running application on HMA-AL00.Finished building JavaScript bundle in 220ms.Running application on HMA-AL00.',
  },
  {
    id: 2,
    text: 'It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its position or bottom padding based on the position of the keyboard.It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its position or bottom padding based on the position of the keyboard.',
  },
];

export default class CommunityCommentScreen extends Component {

  static navigationOptions = {
    title: 'Recent Comments',
    headerStyle: {
      backgroundColor: '#E0836B',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center',
      marginLeft: 50,
      flex: 1,
    },
    headerTintColor: '#FFFFFF',
  }

  state = {
    submitted: false,
    modalVisible: false,
  }

  handleSubmit = () => {
    this.setState({
      modalVisible: true,
    })
  }

  render() {

    return (
      <View style={styles.container}>
 
        <ScrollView style={styles.RectangleShapeView}>
          <View style={styles.Comments}>
            <Comet></Comet>
            <View style={styles.CommentArea}>
              <Text style={styles.TextStyle}>{comments[0].text}</Text>
            </View>
          </View>
          <View style={styles.Comments}>
            <Ufo></Ufo>
            <View style={styles.CommentArea}>
              <Text style={styles.TextStyle}>{comments[1].text}</Text>
            </View>
          </View>
          <View style={styles.Comments}>
            <Rocket></Rocket>
            <View style={styles.CommentArea}>
              <Text style={styles.TextStyle}>{comments[2].text}</Text>
            </View>
          </View>
        </ScrollView>
        <Empty/>
        <Empty/>
        <Empty/>
        <Empty/>
        <View style={{ flex: 1, justifyContent: 'center', width: "100%", flexDirection: "row"}}>
          <Meteor style={{marginTop: 8}}></Meteor>
          {(this.state.submitted) ? (
            <LinearGradient 
            colors={['#C0C0C0', '#808080']} 
            style={styles.LinearGradientStyle}
            start={[0.1, 0.9]}
            end={[0.9,0.1]}
            >
    
              <View style={styles.ChildViewStyle}>

                <Text style={styles.AlreadyCommented}>You have already commented.</Text>

              </View>
                    
            </LinearGradient>
          ) : (
            <LinearGradient 
            colors={['#E2E2E2', '#F4F3F3']} 
            style={styles.LinearGradientStyle}
            start={[0.1, 0.9]}
            end={[0.9,0.1]}
            >
    
              <View style={styles.ChildViewStyle}>

                <TextInput
                  placeholder="Write a comment..."
                  underlineColorAndroid='transparent'
                  multiline
                  blurOnSubmit={true}
                  style={styles.TextInputStyleClass}
                  onSubmitEditing={ () => this.handleSubmit() }
                />

              </View>
                    
            </LinearGradient>)
          }
        </View>

        <Modal style={styles.animationContainer} transparent={true} visible={this.state.modalVisible}
          onShow={()=>{ 
            this.animation.play();
            setTimeout(() => this.setState({modalVisible:false, submitted: true}), 3000);
            }}>
            <LottieView
              ref={animation => {
                this.animation = animation;
              }}
              loop={false}
              source={require('../assets/animation/send.json')}
            />
        </Modal>
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "95%",
    marginLeft: 9,
    marginTop: 10,
  },
  RectangleShapeView: {
    //justifyContent: "center",
    height: 380,
    borderColor: "#C9C7C7",
    borderRadius: 17,
    borderWidth: 2,
    paddingRight: 15,
  },
  LinearGradientStyle: {
    width: '80%',
    height: 45,
    borderRadius: 25,
    marginLeft: 15,
  },
  ChildViewStyle:{
    height: 50,
    borderRadius: 25,
    padding: 5,
  },
  TextInputStyleClass:{
    flex: 1,
    height: 50,
    fontSize: 16,
    marginLeft: 20,
    letterSpacing: 0.6,
    borderRadius: 25,
  },
  SendMessage: {
    marginTop: 5,
    marginLeft: 10,
  },
  Comments: {
    flexDirection: "row",
    padding: 5,
    margin: 5,
  },
  CommentArea: {
    alignSelf: 'flex-start',
    backgroundColor: '#E2E2E2',
    borderRadius: 17,
    marginLeft: 5,
    width: "88%",
    padding: 10,
  },
  TextStyle: {
    letterSpacing: 0.6,
  },
  AlreadyCommented: {
    flex: 1,
    height: 50,
    fontSize: 16,
    marginLeft: 20,
    letterSpacing: 0.6,
    borderRadius: 25,
    marginTop: 8,
  },
  animationContainer: {
    backgroundColor: '#FFCC00',
    flex: 1,
  },
});