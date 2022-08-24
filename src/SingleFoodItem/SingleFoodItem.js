import { View, Text,Image ,TouchableOpacity, ToastAndroid} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated';
const SingleFoodItem = ({navigation,route}) => {
    const {type,name,subtitle,money,image}=route.params;
    const [cart,setCart]= React.useState([]);
    const [number,setNumber]= React.useState(1);
    const onhandleMinus=()=>{
        if (number>1)
            setNumber(number-1);
    }
    const onhandlePlus=()=>{
        setNumber(number+1);
    }
    const addToCart=async()=>{
        let itemArray = await AsyncStorage.getItem('cartItems');
        itemArray = JSON.parse(itemArray);
        if (itemArray) {
            let array = itemArray;
            array.push({Name: name, Number:number, Money: money*number});
      //JSON.stringify là chuyển { x: 5, y: 6 } thành '{"x":5,"y":6}' để lưu lại
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push({Name: name, Number:number, Money: money*number});
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    }
    }
  return (
    <View
        style={{
            flex:1,
            marginHorizontal:14,
            marginTop:32,
        }}
    >
        <View style={{
            width:'100%',
            
        }}>
            <View
            style={{
                    width:'100%',
                    flexDirection:'row',
                    alignItems:'center',
            }}
            >
                <View style={{
                    width:'30%',
                    flexDirection:'row',
                    alignItems:'center',
                }}>
                    <AntDesign name="left" size={30} color="black" />
                    <Text
                        style={{
                            fontSize:15,
                            fontWeight:'400',
                            lineHeight:22.94,
                            letterSpacing:-0.5,
                            color:'rgba(74, 74, 74, 0.835683)',
                        }}
                    >{type}</Text>

                </View>
                <Text
                    style={{
                        position:'relative',
                        marginLeft:20,
                        fontSize:15,
                        fontWeight:'400',
                        lineHeight:19,
                        letterSpacing:-0.42,
                        color:'#4A4A4A',
                    }}
                >
                    {name}
                </Text>
            </View>
        </View>
        <Text
            style={{
                fontWeight:'400',
                fontSize:16,
                lineHeight:20,
                letterSpacing:-0.43,
                color:'#374B6D',
                marginTop:25,
                marginLeft:14,
                marginBottom:10,
            }}
        >
          {name} 
        </Text>   
        <View 
            style={{
                width:'100%',
                height:350,
                justifyContent:'center',
                alignItems:'flex-start',
            }}
        >
        <Image source={image}
                style={{
                    width:'100%',
                    height:250,
                    position:'absolute',
                    top:0,
                }}
        />
        <Text
            style={{
                position:'absolute',
                bottom:0,
                fontSize:14,
                fontWeight:'400',
                lineHeight:17.84,
                letterSpacing:-0.39,
                color:'#374B6D',
            }}
        >{subtitle}</Text>
        </View>
        <View
            style={{
                height:45,
                width:108,
                borderWidth:1,
                borderRadius:23,
                borderColor:'rgba(155, 155, 155, 0.444152)',
                alignSelf:'center',
                marginTop:40,
                justifyContent:'space-between',
                flexDirection:'row',
                alignItems:'center',
                paddingHorizontal:10,
            }}
        >
            <TouchableOpacity onPress={onhandleMinus}>
            <AntDesign name="minus" size={20} color="black" />
            </TouchableOpacity>
            <Text>{number}</Text>
            <TouchableOpacity onPress={onhandlePlus}>
            <AntDesign name="plus" size={20} color="black" />
            </TouchableOpacity>
        </View>
        <View
            style={{
                width:'100%',
                marginTop:18,
                flexDirection:'row',
                justifyContent:'space-between',
            }}
        >
            <View
                style={{
                    width:88,
                    height:44,
                    borderWidth:1,
                    borderRadius:8,
                    borderColor:'rgba(155, 155, 155, 0.413779)',
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <Text
                    style={{
                        fontWeight:'400',
                        fontSize:27,
                        lineHeight:34.41,
                        letterSpacing:-0.75,
                        color:'#374B6D',    
                    }}
                >{money}VND</Text>
            </View>
            <TouchableOpacity onPress={addToCart}>
                <View style={{
                    width:249,
                    height:44,
                    borderRadius:8,
                    backgroundColor:'#5EA33A',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text
                        style={{
                            fontSize:17,
                            fontWeight:'400',
                            lineHeight:21.67,
                            letterSpacing:-0.47,
                            color:'white',
                        }}
                    >Add to Cart</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SingleFoodItem