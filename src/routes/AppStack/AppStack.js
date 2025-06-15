import React from "react";
import{createNativeStackNavigator} from "@react-navigation/native-stack"
import SignIn from "../../Screens/SignIn/SignIn";
import EmailVerification from "../../Screens/EmailVerification/EmailVerification";
import Tabs from "../BottomTab/Tab";
import BalanceScreen from "../../Screens/BalanceScreen/BalanceScreen";
import SearchScreen from "../../Screens/SearchScreen/SearchScreen";
import BookingScreen from "../../Screens/BookingScreen/BookingScreen";
import Search from "../../Screens/Search/Search";
import ManageScreen from "../../Screens/ManageScreen/ManageScreen";
import ReviewScreen from "../../Screens/ReviewScreen/ReviewScreen";
const Stack = createNativeStackNavigator();
const AppStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="EmailVerification" component={EmailVerification} />
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="BalanceScreen" component={BalanceScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="BookingScreen" component={BookingScreen} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="ManageScreen" component={ManageScreen} />
            <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
        </Stack.Navigator>
    )
}
export default AppStack