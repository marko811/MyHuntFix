import React, {Component} from "react";
import {View, Image, Dimensions, Linking} from "react-native";
import HTML from 'react-native-render-html'
//import sanitizeHtml from 'sanitize-html';
import {Constants} from "@common";
const {width, height} = Dimensions.get("window");

export default class Index extends Component {

  static defaultProps = {
    onLinkPress: ()=>{}
  }

  render() {
    // const htmlContent = sanitizeHtml(this.props.html, {
    //   allowedTags: ['img', 'a', 'p', 'span', 'br', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4'],
    //   allowedAttributes: {
    //     'a': ['href'],
    //     'img': ['src']
    //   }
    // });

    const styles = {
      div:{color:'white'},
      section:{color:'white'},
      a: {color: 'white'},
      h3:{color:'white'},
      h4:{color:'white'},
      strong:{color:'white'},
      p:{color:'white'},
      span:{color:'white'},
    }

    return <View style={{padding: 5}}>
      <HTML
        html={this.props.html}
        tagsStyles={styles}
        ignoredStyles={['font-variant']}
        onLinkPress={this.props.onLinkPress}/>
    </View>
  }
}
