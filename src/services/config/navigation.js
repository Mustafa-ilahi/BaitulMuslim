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
import CandidateForm from '../../screens/CandidateInfo';
import ComplaintReport from '../../screens/ComplaintReport';
import FileUpload from '../../screens/FileUpload';
import ConfirmationComplaintReport from '../../screens/ConfirmationComplaintReport';
import Notification from '../../screens/Notification';
import MyProfile from '../../screens/MyProfile';
import UpdatePicture from '../../screens/UpdatePicture';
import MessageList from '../../screens/MessageList';
import ContactUs from '../../screens/ContactUs';
import CandidateBarred from '../../screens/CandidateBarred';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="CandidateBarred"
        >
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Picture" component={Picture} />
        <Stack.Screen name="Thankyou" component={Thankyou} />
        <Stack.Screen name="CandidateInfo" component={CandidateInfo} />
        <Stack.Screen name="CandidatesList" component={CandidatesList} />
        <Stack.Screen
          name="ComplainInfoSuccess"
          component={ComplainInfoSuccess}
        />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="CandidateForm" component={CandidateForm} />
        <Stack.Screen name="CandidateProfile" component={CandidateProfile} />
        <Stack.Screen name="ComplaintReport" component={ComplaintReport} />
        <Stack.Screen name="FileUpload" component={FileUpload} />
        <Stack.Screen name="ConfirmationComplaintReport" component={ConfirmationComplaintReport} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="UpdatePicture" component={UpdatePicture} />
        <Stack.Screen name="MessageList" component={MessageList} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="CandidateBarred" component={CandidateBarred} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

