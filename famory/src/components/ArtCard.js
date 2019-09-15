import React, {Component} from "react";
import { Text, Image, StyleSheet, View , Alert, KeyboardAvoidingView, ImageBackground} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../config/colors";

import { TouchableNativeFeedback } from "react-native-gesture-handler";

import Carousel from "react-native-snap-carousel";

const getAssetImagePath = (imagePh) => {
  return ("../assets/images/" + imagePh)
};

export default class ArtCard extends Component{
  static navigationOptions = {
    header: null
  }

  height = 350;

  render(){
    backgroundColorArtefact = {
      "text": ["#FFE2C2", "#AC8E6D", "#6F5E4C", "#FFECD8"],
      "image": ["#FDD2D2", "#926161", "#663C3C", "#FFDCDC"],
      "video": ["#FDD2D2", "#926161", "#663C3C", "#FFDCDC"],
    }

    let {item} = this.props;
    this.height = this.props.cardHeight ? this.props.cardHeight: 350;
    let numberOfLines = this.props.numberOfLines ? this.props.numberOfLines : 9;

    return (
      <View style={{backgroundColor: backgroundColorArtefact[item["type"]][0], flexDirection: "column", overflow: "hidden", minHeight: 350, ... this.props.style}}>
        <View style={{width: "100%", padding: 16, paddingTop: 22, flexDirection: "row", backgroundColor: backgroundColorArtefact[item["type"]][3]}}>
          <View style={{flex: 1, backgroundColor: colors.DODGER_BLUE}}>
          </View>
          <View style={{flex: 8, paddingLeft: 12, paddingRight: 12}}>
            <Text style={{fontSize: 22, marginTop: 3, color: backgroundColorArtefact[item["type"]][2]}}>{item["name"]}</Text>
            <Text style={{fontSize: 16, color: backgroundColorArtefact[item["type"]][2]}}>{item["description"]}</Text>
          </View>
        </View>
        <View style={{width: "100%", padding: 16, flexDirection: "row"}}>
            <View style={{flex: 1}}>
            </View>
            <View style={{flex: 8, paddingLeft: 12, paddingRight: 12}}>
            {numberOfLines == -1 ? 
              <Text style={{fontSize: 14, color: backgroundColorArtefact[item["type"]][1], marginTop: 17, width: "100%", overflow: "hidden"}}>{item["content"]}</Text>:
              <Text style={{fontSize: 14, color: backgroundColorArtefact[item["type"]][1], marginTop: 17, width: "100%", overflow: "hidden"}} numberOfLines={numberOfLines}>{item["content"]}</Text>}
              
            </View>
        </View>
      </View>
    )
  }
}