import { 
  View, 
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';  
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import DataRestaurant from '../../DataRestaurant/DataRestaurant';
const Search = ({navigation}) => {
  const [search, setSearch]= React.useState();
  const [data,setData]=React.useState(null);
  React.useEffect(()=>{
    const unsubcribe= navigation.addListener('focus',()=>{
      getDB();
    })
    return unsubcribe;
  },[navigation]);

  const getDB=()=>{
    let tmp=[];
    DataRestaurant?DataRestaurant.map((item,index)=>{
      return item.menu?item.menu.map((item,index)=>{
        tmp.push(item);
      }        
        ):null
    }):null
    setData(tmp);
  }
  const setDB=(text)=>{
    let tmp=[];
    DataRestaurant?DataRestaurant.map((item,index)=>{
      return item.menu?item.menu.map((item,index)=>{
        if(item.name.indexOf(text)>-1)
          tmp.push(item);
      }        
        ):null
    }):null
    setData(tmp);
  }
 // console.log(data);
  const renderItem=({item})=>{
    return(
      <TouchableOpacity onPress={()=>{navigation.navigate("SingleFoodItem",
      {   
          type:"Breakfast",
          name: item.name,
          subtitle: item.subtitle,
          money:item.money,
          image:item.image
      })}}>
      <View
        style={{
          width:'100%',
          height:125,
          justifyContent:'space-between',
          flexDirection:'row',
          alignItems:'center',
          padding:4,
        
        }}
      >
        <View
          style={{
            width:'60%',
          }}
        >
          <Text
            style={{
              fontSize:12,
              color:'rgba(74, 74, 74, 0.791299)',
            }}
          >{item.name}</Text>
          <Text style={{
              fontSize:12,
              color:"rgba(74, 74, 74, 0.597034)"
            }}>{item.subtitle}</Text>
          <Text style={{
              fontSize:12,
              color:'rgba(74, 74, 74, 0.597034)',
            }}>{item.money}</Text>
        </View>
        <Image
          source={item.image}
          style={{
            width:100,
            height:100,
            resizeMode:'contain',
            borderWidth:1,            
          }}
        />
      </View>
    </TouchableOpacity>
    )
  }
  return (
    <View style={{
      flex:1,
      marginTop:32,
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
            <View
              style={{
                width:175,
                height:31,
                backgroundColor:'rgba(142, 142, 147, 0.12)',
                borderRadius:10,
                alignItems:'center',
                flexDirection:'row',
                padding:2,
                justifyContent:'space-between',
      
              }}
            >
              <EvilIcons name="search" size={24} color="black" />
              <TextInput
                value={search}
                onChangeText={(text)=>{setDB(text)}}
                style={{
                  width:120,
                }}
              />
              <View
                style={{
                  width:20,
                  height:20,
                  borderRadius:100,
                  backgroundColor:'#D8D8D8',
                  justifyContent:'center',
                  alignItems:'center',

                }}
              >
                <Text
                  style={{
                    color:'white',
                  }}
                >x</Text>
              </View>
            </View>
            <TouchableOpacity>
            <View>
              <Text
                style={{
                  fontSize:17,
                  fontWeight:'400',
                  lineHeight:21.67,
                  letterSpacing:-0.47,
                  color:'#4A4A4A',
                }}
              >Cancel</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('MyCart')}}>
                <Image source={require('../../../assets/icon/icons8-shopping-cart-100.png')}
                    style={{
                        width:30,
                        height:30,
                        resizeMode:'contain',
                    }}/>
            </TouchableOpacity> 
            </View>
            <View
              style={{
                marginTop:30
              }}
            >
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
              />
            </View>
    </View>
  )
}

export default Search