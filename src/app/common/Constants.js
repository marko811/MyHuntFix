import {Dimensions, Platform} from "react-native"

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default {

  Navigator: {
    Login: 'LoginNavigator',
    Dashboard: 'DashboardNavigator'
  },

  Screen: {
    Launch: 'LaunchScreen',
    Login: 'LoginScreen',
    Register: 'RegisterScreen',
    ChangeMail: 'ChangeMailScreen',
    ChangePassword: 'ChangePasswordScreen',
    Dashboard: 'DashboardScreen',
    VideoPlayer: 'VideoPlayerScreen',
    HowToHunt: 'HowToHuntScreen',
    Originals: 'OriginalsScreen',
    UpdateCard: 'UpdateCardScreen',
    Feedback: 'FeedbackScreen',
    TermOfUse: 'TermOfUseScreen',
    FAQ: 'FAQScreen',
    CustomerService: 'CustomerServiceScreen',
    Account: 'AccountScreen',
    HuntDetail: 'HuntDetailScreen',
    Home: 'HomeScreen',
    ForgotPassword: 'ForgotPasswordScreen',
    TermOfUseWithoutLogin:'TermOfUseWithoutLogin',
    ChangePlan:'ChangePlan'
  },

  CacheKey: {
    HOME_FIRST_VIEW: '@RollCallStore:firstTime',
  },

  Common: {
    WIDTH_SCREEN: widthScreen,
    HEIGHT_SCREEN: heightScreen
  },
  FontSize: {
    superTiny: 10,
    tiny: Platform.OS==='ios'?14:15,
    small: 16,
    medium: 17,
    big: 18,
    large: 20,
    superLarge: 25,
  },

  FontName:{
    Times:'VNI-Times',
    ProximaNova:'Proxima Nova',
    Kanit:'Kanit'
  },

  EventEmitterName: {
    OpenDrawer: "OpenDrawer",
    CloseDrawer: "CloseDrawer",
    SignOut: "SignOut"
  },

  Api:{
    SuccessStatusCode:"success",
    ErrorStatusCode:"error",
  },
  TestAccount:{
    name:'',
    pass:''
  },
  StripePublicKey:'pk_test_vFyi7AJCo3imknmBd4Ra8krD',
  AndroidPayMode:'test', // Optional, android only, 'production' by default
  MonthFormat:'MM',
  YearFormat:'YYYY',
}
