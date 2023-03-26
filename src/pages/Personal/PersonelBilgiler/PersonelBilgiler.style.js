import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors/colors';

export default StyleSheet.create({
  listContainer: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  navBarContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    height: 50,
    backgroundColor: colors.dark,
  },
});
