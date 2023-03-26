import {StyleSheet} from 'react-native';
import colors from '../../theme/colors/colors';

export default StyleSheet.create({
  headerText: {
    marginTop: 10,
    marginLeft: 10,
  },
  listContainer: {
    marginHorizontal: 10,

    marginTop: 10,
  },

  navBarText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  navBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    height: 40,
    backgroundColor: colors.dark,
  },
});
