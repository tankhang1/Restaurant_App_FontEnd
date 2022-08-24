import { 
    View, 
    Text ,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
    Animated,
    ScrollView
} from 'react-native'
import React from 'react'
import DataMenu from '../../DataMenu/DataMenu'
import DataRestaurant from '../../DataRestaurant/DataRestaurant';
const {width,height}= Dimensions.get("window");
const HomeScreen = ({navigation}) => {
    const scrollX=new Animated.Value(0);
    let position= Animated.divide(scrollX,width);
    const renderItem=({item})=>{
        return(
            <TouchableOpacity>
            <View style={{
                width:120,
                height:100,
                justifyContent:'center',
                alignItems:'center',
            }}>
                
                <Image 
                    source={item.image} 
                    style={{
                        resizeMode:'cover',
                        width:77,
                        height:77,
                        borderRadius:100,
                    }}
                />
                
                <Text style={{
                    fontSize:12,
                    fontWeight:'400',
                    lineHeight:15.29,
                    letterSpacing:-0.33,
                    alignItems:'center',
                }}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    const renderBestDeals=({item})=>{
        return(
            <View style={{
                width:width,
                height:200,
                justifyContent:'center',
                alignItems:'center',
                alignSelf:'center',
            }}>
            <Image 
                source={item.image}
                style={{
                    width:width,
                    height:200,
                    resizeMode:'cover',
                    opacity:0.9,
                }}
            />
            <Text style={{
                color:'black',
                position:'absolute',
                color:'white',

            }}>{item.name}</Text>
            </View>
        )
    }
  return (
        <ScrollView>
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
            <TouchableOpacity onPress={()=>{navigation.navigate('MyCart')}}>
                <Image source={require('../../../assets/icon/icons8-shopping-cart-100.png')}
                    style={{
                        width:30,
                        height:30,
                        resizeMode:'contain',
                    }}/>
            </TouchableOpacity> 
            </View>
            <Text style={{
                marginTop:12,
                marginLeft:8,
                fontSize:17,
                fontWeight:'400',
                lineHeight:22,
                letterSpacing:-0.47,
                color:'#4A4A4A',
            }}>Popular Categories</Text>
            <View style={{
               
                //flex:1,
                width:'100%',
                height:150,
                justifyContent:'center',
                alignItems:'center',
                paddingTop:20,
            }}>
            <FlatList
                data={DataMenu}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            </View>
            <Text style={{
                fontSize:17,
                fontWeight:'400',
                lineHeight:21.67,
                letterSpacing:-0.47,
                marginBottom:10,
            }}>Best Deals</Text>
            <View>
            <FlatList
                data={DataMenu}
                renderItem={renderBestDeals}
                keyExtractor={item=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                decelerationRate={0.7}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false},
                )}
            />
                <View
                style={{
                flexDirection: 'row',
                position:'absolute',
                bottom:30,
                alignSelf:'center',
                }}>
                {   
                DataMenu? DataMenu.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: 7,
                        height: 7,
                        backgroundColor: 'white',
                        opacity,
                        marginHorizontal: 5,
                        borderRadius: 100,
                      }}></Animated.View>
                  );
                }): null}
                </View>
            </View>
            <View style={
                {
                    width:width,
                }
            }>
                <Text style={{
                    fontSize:17,
                    fontWeight:'400',
                    lineHeight:21.67,
                    letterSpacing:-0.47,
                    color:'#4A4A4A',
                    marginVertical:20,
                }}>Most Popular</Text>
                
            </View>
            <View>
            {
                    DataRestaurant?(DataRestaurant.map((Item,index)=>{
                        return Item.menu?(Item.menu.map((item,index)=>{
                            return(
                                <TouchableOpacity onPress={()=>{navigation.navigate("SingleFoodItem",
                                {   
                                    type:Item.type,
                                    name: item.name,
                                    subtitle: item.subtitle,
                                    money:item.money,
                                    image:item.image
                                })}}>
                                <View 
                                    key={index}
                                    style={{
                                        width:'100%',
                                        marginRight:14,
                                        marginVertical:20,
                                    }}
                                >
                                    <Image 
                                    source={item.image}
                                    style={{
                                        width:'100%',
                                        height:250,
                                        resizeMode:'cover',
                                    }}
                                    />
                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        alignItems:'center',
                                    }}>
                                        <Text style={{
                                            fontWeight:'400',
                                            fontSize:13.5,
                                            lineHeight:17.2,
                                            letterSpacing:-0.38,
                                            color:'#4A4A4A',
                                        }}>{item.name}</Text>
                                        <Text style={{
                                            fontWeight:'400',
                                            fontSize:13.5,
                                            lineHeight:17.2,
                                            letterSpacing:-0.38,
                                            color:'#4A4A4A',
                                        }}>{item.money} VND</Text>
                                    </View>
                                </View>
                                </TouchableOpacity>
                            )
                        })):null
                    })):null
                }
            </View>
        </View>
    </ScrollView>
  )
}

export default HomeScreen