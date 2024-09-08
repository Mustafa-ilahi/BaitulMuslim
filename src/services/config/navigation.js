import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Registration from '../../screens/Registration';
import Login from '../../screens/Login';
import NewPassword from '../../screens/NewPassword';
import Picture from '../../screens/Picture';
import Thankyou from '../../screens/Thankyou';
import CandidateInfo from '../../screens/CandidateInfo';
import CandidatesList from '../../screens/CandidatesList';
import ComplainInfoSuccess from '../../screens/ComplainInfoSuccess';
import Chat from '../../screens/Chat';
import CandidateProfile from '../../screens/CandidateProfile';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='CandidatesList'>
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Picture" component={Picture} />
        <Stack.Screen name="Thankyou" component={Thankyou} />
        <Stack.Screen name="CandidateInfo" component={CandidateInfo} />
        <Stack.Screen name="CandidatesList" component={CandidatesList} />
        <Stack.Screen name="ComplainInfoSuccess" component={ComplainInfoSuccess} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="CandidateProfile" component={CandidateProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
