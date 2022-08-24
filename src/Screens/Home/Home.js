import { View, Text ,Image} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from '../Menu/Menu'
import Logout from '../Logout/Logout'
import Orders from '../Orders/Orders'
import Search from '../Search/Search'
import Reservations from '../Reservations/Reservations'
import Cart from '../Cart/Cart';
import HomeScreen from '../HomeScreen/HomeScreen';
const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
  //  const Drawer = createDrawerNavigator();
  return (

    <Drawer.Navigator useLegacyImplementation
      screenOptions={{
        headerShown:false,
      }}
    >
    <Drawer.Screen name='Home' component={HomeScreen}
      options={{
        drawerIcon: ()=>(<Image source={require('../../../assets/icon/icons8-home-page-80.png')}
          style={{
            width:30,
            height:30,
            resizeMode:'contain',
          }}
        />)
      }}
    />
    <Drawer.Screen name="Menu" component={Menu}
      options={{
        drawerIcon:()=>(<Image source={require('../../../assets/icon/icons8-restaurant-menu-100-black.png')}
        style={{
          width:30,
          height:30,
          resizeMode:'contain',
        }}
        />)
      }}
    />
    <Drawer.Screen name='Search' component={Search}
      options={{
        drawerIcon:()=>(<Image source={require('../../../assets/icon/icons8-search-100.png')}
        style={{
          width:30,
          height:30,
          resizeMode:'contain',
        }}
        />)
      }}
    />
    <Drawer.Screen name='Cart' component={Cart}
      options={{
        drawerIcon:()=>(<Image source={require('../../../assets/icon/icons8-shopping-cart-100.png')}
        style={{
          width:30,
          height:30,
          resizeMode:'contain',
        }}
        />)
      }}
    />
    <Drawer.Screen name='Reservations' component={Reservations}
    options={{
      drawerIcon:()=>(<Image source={require('../../../assets/icon/icons8-reserve-100.png')}
      style={{
        width:30,
        height:30,
        resizeMode:'contain',
      }}
      />)
    }}/>
    <Drawer.Screen name='Orders' component={Orders}
    options={{
      drawerIcon:()=>(<Image source={require('../../../assets/icon/icons8-delivery-100-black.png')}
      style={{
        width:30,
        height:30,
        resizeMode:'contain',
      }}
      />)
    }}/>
    <Drawer.Screen name='Logout' component={Logout}
    options={{
      drawerIcon:()=>(<Image source={require('../../../assets/icon/icons8-logout-100.png')}
      style={{
        width:30,
        height:30,
        resizeMode:'contain',
      }}
      />)
    }}/>
  </Drawer.Navigator>
  )
}

export default Home