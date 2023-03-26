import {StyleSheet} from 'react-native';
import colors from '../../theme/colors/colors';

export default StyleSheet.create({
  navBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    height: 40,
    backgroundColor: colors.dark,
  },
  navBarText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
