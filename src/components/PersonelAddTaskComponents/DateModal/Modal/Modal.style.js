import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors/colors';

export default StyleSheet.create({
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
