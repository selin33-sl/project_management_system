import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors/colors';

export default StyleSheet.create({
  cardText: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '300',
    color: 'black',
    fontSize: 15,
  },

  cardStyle: {
    margin: 10,
    height: 180,
    width: 160,
    borderWidth: 2,
    borderColor: colors.dark,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
