import {StyleSheet} from 'react-native';
import colors from '../../theme/colors/colors';

export default StyleSheet.create({
  customButton: {
    backgroundColor: colors.dark,
    height: 80,
    width: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 35,
    borderColor: 'white',
    borderWidth: 3,
  },
  icon: {
    height: 40,
    width: 40,
  },
  tabBarStyle: {
    borderTopWidth: 1,
    backgroundColor: colors.dark,
    position: 'absolute',
    height: 50,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderTopColor: 'white',
  },
});
