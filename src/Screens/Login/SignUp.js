import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    ToastAndroid,
} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
    const [name,setName]= React.useState('');
    const [number,setNumber]= React.useState('');
    const [email,setEmail]= React.useState('');
    const [password,setPassword]= React.useState('');
    const onHandleSignUp=async()=>{
        let itemArray = await AsyncStorage.getItem('Account');
        itemArray = JSON.parse(itemArray);
        console.log(itemArray);
        if (itemArray) {
          let array = itemArray;
          array.push({Name: name,Email: email, Number:number, Password: password});
          //JSON.stringify là chuyển { x: 5, y: 6 } thành '{"x":5,"y":6}' để lưu lại
          try {
            await AsyncStorage.setItem('Account', JSON.stringify(array));
            ToastAndroid.show(
              'New account was added',
              ToastAndroid.SHORT,
            );
            navigation.goBack();
          } catch (error) {
            return error;
          }
        } else {
          let array = [];
          array.push({Name: name,Email: email, Number:number, Password: password});
          try {
            await AsyncStorage.setItem('Account', JSON.stringify(array));
            ToastAndroid.show(
                'New account was added',
                ToastAndroid.SHORT,
            );
            navigation.goBack();
          } catch (error) {
            return error;
          }
        }

    }
    return (
    <View style={{
        flex:1,
        padding:20,
        paddingTop:30,
    }}>
        <TouchableOpacity>
        <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{
            fontSize:20,
            fontWeight:'400',
            lineHeight:25,
            color:'#5EA33A',
            marginTop:50,
            marginBottom:30,
        }}>Creat new account</Text>
        <TextInput
            placeholder='Full Name'
            placeholderTextColor='#374B6D'
            style={{
                width:323,
                height:38,
                borderWidth:1,
                borderColor:'#374B6D',
                borderRadius:26.5,
                opacity:0.34,
                paddingHorizontal:12,
                marginBottom:24,
                alignSelf:'center',
            }}
            value={name}
            onChangeText={setName}
        />
        <TextInput
            placeholder='Phone Number'
            placeholderTextColor='#374B6D'
            style={{
                width:323,
                height:38,
                borderWidth:1,
                borderColor:'#374B6D',
                borderRadius:26.5,
                opacity:0.34,
                paddingHorizontal:12,
                marginBottom:24,
                alignSelf:'center',
            }}
            value={number}
            onChangeText={setNumber}
        />
        <TextInput
            placeholder='Email Address'
            placeholderTextColor='#374B6D'
            style={{
                width:323,
                height:38,
                borderWidth:1,
                borderColor:'#374B6D',
                borderRadius:26.5,
                opacity:0.34,
                paddingHorizontal:12,
                marginBottom:24,
                alignSelf:'center',
            }}
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            placeholder='Password'
            placeholderTextColor='#374B6D'
            style={{
                width:323,
                height:38,
                borderWidth:1,
                borderColor:'#374B6D',
                borderRadius:26.5,
                opacity:0.34,
                paddingHorizontal:12,
                marginBottom:46,
                alignSelf:'center',
            }}
            value={password}
            onChangeText={setPassword}
        />
        <TouchableOpacity onPress={onHandleSignUp}>
            <View style={{
                alignSelf:'center',
                width:278,
                height:38,
                backgroundColor:'#344D91',
                borderRadius:26.5,
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Text style={{
                    fontSize:17,
                    fontWeight:'400',
                    lineHeight:21.67,
                    letterSpacing:-0.47,
                    color:'white',
                }}>Sign Up</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default SignUp