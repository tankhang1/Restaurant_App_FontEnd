import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignIn = ({navigation}) => {
    const [email_phone,setEmail_phone]= React.useState('');
    const [password,setPassword]= React.useState('');
    const [accountlist,setAccountlist]= React.useState();
    React.useEffect(()=>{
        const unsubcribe= navigation.addListener('focus',()=>{
            getDBFromSU();
        });
        return unsubcribe;
    },[navigation]);
    const getDBFromSU=async()=>{
        let itemArray= await AsyncStorage.getItem('Account');
        itemArray= JSON.parse(itemArray);
        setAccountlist(itemArray);
    }
    const onCheckAccount=()=>{
        let lc=-1;
        for (let index = 0; index < accountlist.length; index++) {
            if ((accountlist[index].Number===email_phone || accountlist[index].Email===email_phone)&& (accountlist[index].Password===password))
                lc=index;
        }
        if (lc!==-1)
            navigation.navigate('HomeScreen');
        else
            Alert.alert('Account is not exist','You must enroll new account to jont');
    }
  return (
    <View style={{
        flex:1,
        padding:20,
        paddingTop:30,
    }}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
        
        <Text style={{
            fontSize:20,
            fontWeight:'400',
            lineHeight:25,
            color:'#5EA33A',
            marginTop:50,
            marginBottom:30,
        }}>Sign In</Text>
        <TextInput
            placeholder='Email or phone number'
            placeholderTextColor='#9B9B9B'
            style={{
                borderWidth:1,
                borderColor:'#374B6D',
                width:323,
                height:53,
                borderRadius:26.5,
                opacity:0.34,
                paddingLeft:9,
                color:'black',
                marginBottom:23,
                alignSelf:'center',
            }}
            onChangeText={setEmail_phone}
            value={email_phone}
        />
        <TextInput
            placeholder='Password'
            placeholderTextColor='#9B9B9B'
            style={{
                borderWidth:1,
                borderColor:'#374B6D',
                width:323,
                height:53,
                borderRadius:26.5,
                opacity:0.34,
                paddingLeft:9,
                color:'black',
                alignSelf:'center',
                marginBottom:23,
            }}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
        />
        <TouchableOpacity onPress={onCheckAccount}>
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
    </View>
  )
}

export default SignIn