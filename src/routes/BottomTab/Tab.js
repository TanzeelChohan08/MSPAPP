import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../utils/colors";
import images from "../../assets/images";
import { Image } from "react-native";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import AccountScreen from "../../Screens/AccountScreen/AccountScreen";


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabelStyle:{fontWeight:700}, title:"Search",
          headerShown: false,
      tabBarIcon: ({ color,focused }) =>  <Image  source={focused ? images.bold_search : images.search} />,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,

        }}/>
        <Tab.Screen name="AccountScreen" component={AccountScreen} options={{ tabBarLabelStyle:{fontWeight:700}, title:"Account",
          headerShown: false,
      tabBarIcon: ({ color,focused }) =>  <Image  source={focused ? images.bold_profile : images.profile} />,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,

        }}/>
    </Tab.Navigator>
  );
}

export default Tabs;
