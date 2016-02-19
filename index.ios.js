/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'
import React from 'react-native'
var {
  Component,
  ListView,
  PropTypes,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  RefreshControl,
  Text,
  Image,
  View
} = React

class History extends Component {
  constructor (props) { //用来初始化一些属性
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(this._getData())
    } // 与状态相关的属性
  }
  
  _getData(){
    let data=[]
    for(let i = 0; i < 20; i++){
      data.push({title: 'Gank.io', uri: 'http://ww2.sinaimg.cn/large/7a8aed7bjw1f0cw7swd9tj20hy0qogoo.jpg'})
    }
    return data
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          refreshControl={
          <RefreshControl
            onRefresh={this._refresh.bind(this)}
            tintColor='#aaaaaa'
            title='Loading...'
            progressBackgroundColor='#aaaaaa'/>
        }/>
      </View>
    )
  }

  _refresh(){
    //...
  }
  
  _renderItem (contentData, sectionID, highlightRow) {
    return (
      <TouchableHighlight>
        <View style={styles.itemContainer}>
          <Text style={[styles.title]}>{contentData.title}</Text>
          <Image source={{uri: contentData.uri}}
          style={styles.thumbnail}/>
        </View>
      </TouchableHighlight>
    )
   }
 }

var styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#252528'
   },
   itemContainer: {
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     paddingTop: 20
   },
   thumbnail: {
     width: null, // 配合alignSelf实现宽度上match_parent
     height: 260,
     alignSelf: 'stretch'
   },
   title: {// alignSelf 默认是center
     fontSize: 15,
     marginBottom: 10,
     marginRight: 35,
     marginLeft: 35,
     // letterSpacing: 10,//字间距
     lineHeight: 22, // 行距＋字高，0表示和字高一样，没效果
     color: 'white',
     textAlign: 'center' // 字的对其方式：center每行都居中；left，right；auto ＝＝＝ justify ＝＝＝ left
   }
})

AppRegistry.registerComponent("History", () => History)
