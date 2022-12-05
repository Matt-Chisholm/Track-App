import AccountScreen from "./screens/AccountScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import TrackCreateScreen from "./screens/TrackCreateScreen";
import TrackDetailScreen from "./screens/TrackDetailScreen";
import TrackListScreen from "./screens/TrackListScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

export default createAppContainer(switchNavigator);
