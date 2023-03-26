import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    //alignItems: 'flex-end',
  },
  dateTextInput: {
    fontSize: 17,
    color: colors.dark,
    padding: 10,
    width: '70%',
    borderRadius: 15,
    backgroundColor: colors.grey2,
  },
  dateIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
  },
});
