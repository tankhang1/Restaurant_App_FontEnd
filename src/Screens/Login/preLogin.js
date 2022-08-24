import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PreLogin = ({navigation}) => {

  return (
    <View style={{
      flex:1,
      backgroundColor:'#F2F2F2',
    }}>
      <Image
        source={require('../../../assets/icon/icons8-restaurant-menu-100-green.png')}
        style={{
          width:120,
          height:120,
          alignSelf:'center',
          marginTop:127,
        }}
      />
      <View style={{
        marginTop:30,
        alignSelf:'center',
        width:'70%',
      }}>
      <Text style={{
        fontSize:17,
        lineHeight:22,
        color:'#5EA33A',
        textAlign:'center',
        marginVertical:15,
      }}>Welcome to our restaurant</Text>
      <Text style={{
        fontSize:17,
        lineHeight:22,
        color:'#4A4A4A',
        textAlign:'center',
        marginBottom:30,
      }}>Order food and make reservations with one click</Text>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}>
        <View
          style={{
            width:278,
            height:53,
            borderRadius:26.5,
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#5EA33A',
            marginVertical:15,
          }}
        >
          <Text style={{
            fontSize:17,
            fontWeight:'400',
            lineHeight:22,
            color:'#FFFFFF',
          }}>Log In</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
        <View
          style={{
            width:278,
            height:53,
            borderRadius:26.5,
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            borderColor:'#374B6D',
            borderWidth:1,
            marginVertical:15,
          }}
        >
          <Text style={{
            fontSize:17,
            fontWeight:'400',
            lineHeight:22,
            color:'#374B6D',
          }}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PreLogin