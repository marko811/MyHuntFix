import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image
}from 'react-native'
import styles from "./style"
import Text from '../../Text'
import {Colors,Utils} from '@common'

class HomeItem extends Component {

  state = {
    isMore:false
  }

  render() {
    let {item,onPress} = this.props
    var content = Utils.clearHtmlTags(item.body)
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={()=>onPress(item)}>
        <Image source={{uri:item.field_asset_art}} style={styles.image}/>
        <View style={styles.wrapContent}>
          <Text style={styles.content}>{this.getContent(content)}</Text>
          {content.length > 150 && !this.state.isMore && (
            <TouchableOpacity style={styles.btnMore} onPress={this.onMore.bind(this)}>
                <Text style={styles.btnMoreText}>More +</Text>
            </TouchableOpacity>
          )}
          {content.length > 150 && this.state.isMore && (
            <TouchableOpacity style={styles.btnMore} onPress={()=>this.setState({isMore:false})}>
                <Text style={styles.btnMoreText}>Less</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    )
  }

  onMore(){
    this.setState({isMore:true})
  }

  getContent(content){
    if (content.length > 150 && !this.state.isMore) {
      return content.substring(0, 150)+"..."
    }else{
      return content
    }
  }
}

export default HomeItem
