import React from 'react'
import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback
}from 'react-native'
import Text from '../Text'
import styles from './style'
import {Styles} from '@common'

const data = [
  "General Inquiries", "Cancellations", "Technical Support", "Advertising", "Careers and Employment"
]
class TopicList extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      isShowModal:props.isShow
    }
  }

  static defaultProps = {
    onPress:()=>{},
  }

  render(){
    var {onPress} = this.props
    var items = []
      data.forEach((item)=>{
        items.push(
          <TouchableOpacity style={{paddingVertical:10,marginHorizontal:10}} onPress={()=>onPress(item)}>
            <Text style={{color:'black'}}>{item}</Text>
          </TouchableOpacity>
        )
      })

    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={this.state.isShowModal}
        onRequestClose={() => {}}
        >
         <View style={{backgroundColor:"rgba(0,0,0,0.5)",flex:1,justifyContent:'center'}}>
            <View style={{marginHorizontal:10,backgroundColor:'white',borderRadius:5}}>
              {items}
            </View>
         </View>
      </Modal>
    )
  }

  componentWillReceiveProps(nextProps){
    this.setState({isShowModal:nextProps.isShow})
  }
}

export default TopicList
