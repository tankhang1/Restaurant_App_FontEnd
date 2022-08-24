import { 
  View, 
  Text,
  TouchableOpacity,
  Image, 
  FlatList
} from 'react-native'
import React from 'react'
import DataMenu from '../../DataMenu/DataMenu'
const Menu = ({navigation}) => {
  const renderItem=({item})=>{
    return(
      <TouchableOpacity style={{
        width:'48%',
      }}>
      <View style={{
        justifyContent:'center',
        alignItems:'center',
      }}>
        <Image
          source={item.image}
          style={{
            width: '100%',
            height:114,
            opacity:0.9,
          }}
        />
        <Text style={{
          position:'absolute',
          color:'white',
          fontSize:14,
          fontWeight:'400',
          lineHeight:17.84,
          letterSpacing:-0.39,
        }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
    )
  }
  return (
    <View style={{
      flex:1,
      marginTop:48,
      marginHorizontal:14,
  }}>
      <View style={{
          width:'100%',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
      }}>
      <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
          <Image source={require('../../../assets/icon/icons8-menu-100.png')}
              style={{
                  width:30,
                  height:30,
                  resizeMode:'contain',
              }}/>
      </TouchableOpacity>  
      <Text
        style={{
          fontWeight:'400',
          fontSize:15,
          lineHeight:19.12,
          letterSpacing:-0.42,
          color:'#4A4A4A',
        }}
      >Menu</Text>
      <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
          <Image source={require('../../../assets/icon/icons8-shopping-cart-100.png')}
              style={{
                  width:30,
                  height:30,
                  resizeMode:'contain',
              }}/>
      </TouchableOpacity> 
      </View>
    <View style={{
      width:'100%',
      marginTop:30,
    }}>
    <FlatList
      data={DataMenu}
      renderItem={renderItem}
      keyExtractor={item=>item.id}
       numColumns={2}
       columnWrapperStyle={{
          justifyContent:'space-between',
          marginBottom:12,
       }}
      // horizontal={false}
      //columnWrapperStyle={{justifyContent:'space-between'}}
    />
    </View>
  </View>
  )
}

export default Menu