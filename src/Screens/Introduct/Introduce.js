import { 
    View, 
    Text ,
    Image, 
    FlatList, 
    Dimensions, 
    Animated,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import DataIntroduct from './DataIntroduce'
const Introduce = ({navigation}) => {

    const {width,height}= Dimensions.get("window");
    const scrollX = new Animated.Value(0);
  //Tạo ra giá trị mới bằng cách lấy scrollX/width
    let position = Animated.divide(scrollX, width);
    const renderItem=({item})=>{
        return(
            <View style={{
                width: width,
                backgroundColor:'#5EA33A',
            }}>
                <Image source={item.image}
                    style={{
                        alignSelf:'center',
                        marginTop:194,
                        width:100,
                        height:100,
                    }}
                />
                <View style={{
                    width:'80%',
                    alignSelf:'center',
                    marginTop:30,
                }}>
                <Text style={{
                    fontSize:17,
                    fontWeight:'400',
                    lineHeight:22,
                    alignItems:'center',
                    color:'#FFFFFF',
                    textAlign:'center',
                    marginVertical:20
                }}>{item.title}</Text>
                <Text
                    style={{
                        fontSize:17,
                        fontWeight:'400',
                        lineHeight:22,
                        alignItems:'center',
                        color:'#FFFFFF',
                        textAlign:'center',
                    }} 
                >{item.subtitle}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{
            flex:1,
        }}>
        <FlatList
            data={DataIntroduct}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            horizontal
            snapToInterval={width}
            decelerationRate={0.8}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
        />
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                position:'absolute',
                zIndex:999,
                top:550,
                alignSelf:'center',
            }}>
            {
                DataIntroduct.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1,0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 4,
                        backgroundColor: "white",
                        marginHorizontal: 8,
                        opacity,
                      }}></Animated.View>
                  );
                })
              }
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate('PreLogin')}}>
                    <View style={{
                        borderWidth:0.3,
                        width:200,
                        height:50,
                        justifyContent:'center',
                        alignItems:'center',
                        alignSelf:'flex-end',
                        backgroundColor:'white',
                        borderTopLeftRadius:30,
                        borderBottomLeftRadius:30,
                        position:'absolute',
                        zIndex:999,
                        bottom:50,
                    }}>
                        <Text style={{
                            fontSize:17,
                            fontWeight:'bold',
                        }}>Skip</Text>
                    </View>
                </TouchableOpacity>
        </View>
  )
}

export default Introduce