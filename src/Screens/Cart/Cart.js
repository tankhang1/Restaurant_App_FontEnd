import { View, Text ,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
const Cart = ({navigation}) => {
  const [product,setProduct]= React.useState([]);
  React.useEffect(()=>{
    const unsubcribe= navigation.addListener('focus',()=>{
      getDB();
    });
    return unsubcribe;
  },[navigation]);
  const [total,setTotal]= React.useState(0);
  const getDB=async()=>{
    let itemArray= await AsyncStorage.getItem('cartItems');
    itemArray= JSON.parse(itemArray);
    //console.log(itemArray);
    let tmp=[];
    let total=0;
    for (let index = 0; index < itemArray.length; index++) {
      tmp.push(itemArray[index]); 
      total=total+itemArray[index].Money;
    }
    setProduct(tmp);
    setTotal(total);
  }
  const onDeleteProduct=async(index)=>{
    return(
      Alert.alert(
      "Warning",
      "Are you sure!!!",
      [
        {
          text:"Cancel",
          onPress:()=>{

          }
        },
        {
          text:"OK",
          onPress:()=>{
            let tmp=product;
            tmp.splice(index,1);
            try {
              AsyncStorage.setItem('cartItems',JSON.stringify(product));
              getDB();
            } catch (error) {
              return error;
            }
            setProduct(tmp);
          }
        }
      ]
    
    ))
  }
  return (
      <View style={{
        flex:1,
        marginTop:30,
        marginBottom:15,
        marginHorizontal:14,
      }}>
          <View
            style={{
                    width:'100%',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
            }}
            >
                <View style={{
                    width:'30%',
                    flexDirection:'row',
                    alignItems:'center',
                    position:'absolute',
                    left:0
                }}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <AntDesign name="left" size={30} color="black" />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize:18,
                            fontWeight:'400',
                            lineHeight:22.94,
                            letterSpacing:-0.5,
                            color:'rgba(74, 74, 74, 0.835683)',
                        }}
                    >Back</Text>

                </View>
                <Text
                    style={{
                        fontSize:18,
                        fontWeight:'400',
                        lineHeight:23,
                        letterSpacing:-0.42,
                        color:'#4A4A4A',
                    }}
                >
                    Your Cart
                </Text>
          </View>
          <View
            style={{
              marginTop:30,
              width:'100%',
            }}
          >
            {
              
              product?product.map((item,index)=>{
                return(
                  <TouchableOpacity onLongPress={()=>onDeleteProduct(index)}>
                  <View
                    key={index}
                    style={{
                      width:'100%',
                      marginBottom:25,
                      flexDirection:'row',
                      alignItems:'center',
                    }}
                  >
                    <View
                      style={{
                        width:22,
                        height:22,
                        borderColor:'rgba(155, 155, 155, 0.537789)',
                        borderWidth:1,
                        justifyContent:'center',
                        alignItems:'center',
                      }}
                    >
                    <Text
                      style={{
                        fontSize:17,
                        fontWeight:'400',
                        lineHeight:21.67,
                        letterSpacing:-0.47,
                        color:'#5EA33A',
                      }}
                    >{item.Number}</Text>
                    </View>
                    <Text
                      style={{
                        fontSize:14,
                        fontWeight:'400',
                        lineHeight:17.84,
                        letterSpacing:-0.39,
                        color:'rgba(55, 75, 109, 0.804065)',
                        marginLeft:20,
                      }}
                    >{item.Name}</Text>
                    <Text 
                      style={{
                        fontSize:14,
                        fontWeight:'400',
                        lineHeight:17.84,
                        letterSpacing:-0.34,
                        color:'rgba(55, 75, 109, 0.804065)',
                        position:'absolute',
                        right:0,
                      }}
                    >{item.Money}</Text>
                    
                  </View>
                  </TouchableOpacity>
                )
              }):null
            }
          </View>
          <View style={{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
          }}>
            <Text style={{
              fontSize:14,
              fontWeight:'400',
              lineHeight:17.84,
              letterSpacing:-0.34,
              color:'rgba(55, 75, 109, 0.804065)',
            }}>Total</Text>
          <Text
            style={{
              color:'rgba(55, 75, 109, 0.804065)',
              fontSize:14,
              fontWeight:'400',
              lineHeight:17.84,
              letterSpacing:-0.34,
            }}
          >{total}</Text>
          </View>
          <TouchableOpacity
          style={{
            width:'100%',
          }}
          >
          <View
            style={{
              width:'100%',
              height:45,
              backgroundColor:'#5EA33A',
              justifyContent:'center',
              alignItems:'center',
            }}
          >
            <Text style={{
              fontSize:14,
              fontWeight:'400',
              lineHeight:15,
              color:'white',
              letterSpacing:-0.31,
            }}>PLACE ORDER</Text>
          </View>
          </TouchableOpacity>
        </View>
  )
}

export default Cart