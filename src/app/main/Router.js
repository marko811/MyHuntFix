import {StackNavigator} from 'react-navigation';
import {Colors, Constants, Global, Styles} from "@common"

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ChangeMailScreen from './screens/ChangeMailScreen'
import ChangePasswordScreen from './screens/ChangePasswordScreen'
import LaunchScreen from './screens/LaunchScreen'
import DashboardScreen from './screens/DashboardScreen'
import HowToHuntScreen from './screens/HowToHuntScreen'
import OriginalsScreen from './screens/OriginalsScreen'
import UpdateCardScreen from './screens/UpdateCardScreen'
import FeedbackScreen from './screens/FeedbackScreen'
import TermOfUseScreen from './screens/TermOfUseScreen'
import FAQScreen from './screens/FAQScreen'
import CustomerServiceScreen from './screens/CustomerServiceScreen'
import AccountScreen from './screens/AccountScreen'
import HuntDetailScreen from './screens/HuntDetailScreen'
import HomeScreen from './screens/HomeScreen'
import VideoPlayerScreen from './screens/VideoPlayerScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import TermOfUseWithoutLoginScreen from './screens/TermOfUseWithoutLoginScreen'
import ChangePlanScreen from './screens/ChangePlanScreen'

var screens = {}
screens[Constants.Screen.Launch] = {screen: LaunchScreen};
screens[Constants.Screen.VideoPlayer] = {screen: VideoPlayerScreen};
screens[Constants.Screen.ForgotPassword] = {screen: ForgotPasswordScreen};
screens[Constants.Screen.Home] = {screen: HomeScreen};
screens[Constants.Screen.Account] = {screen: AccountScreen};
screens[Constants.Screen.CustomerService] = {screen: CustomerServiceScreen};
screens[Constants.Screen.FAQ] = {screen: FAQScreen};
screens[Constants.Screen.TermOfUse] = {screen: TermOfUseScreen};
screens[Constants.Screen.Feedback] = {screen: FeedbackScreen};
screens[Constants.Screen.UpdateCard] = {screen: UpdateCardScreen};
screens[Constants.Screen.Login] = {screen: LoginScreen};
screens[Constants.Screen.Register] = {screen: RegisterScreen};
screens[Constants.Screen.ChangePassword] = {screen: ChangePasswordScreen};
screens[Constants.Screen.ChangeMail] = {screen: ChangeMailScreen};
screens[Constants.Screen.Dashboard] = {screen: DashboardScreen};
screens[Constants.Screen.HowToHunt] = {screen: HowToHuntScreen};
screens[Constants.Screen.Originals] = {screen: OriginalsScreen};
screens[Constants.Screen.HuntDetail] = {screen: HuntDetailScreen};
screens[Constants.Screen.TermOfUseWithoutLogin] = {screen: TermOfUseWithoutLoginScreen};
screens[Constants.Screen.ChangePlan] = {screen: ChangePlanScreen};

export default StackNavigator(screens,
  {
    mode: 'screen',
    navigationOptions: {
      headerStyle: Styles.NavigationBar.header,
      headerTintColor: Colors.darkOrange,
      headerTitleStyle: {alignSelf: "center"},
    }
  }
);
