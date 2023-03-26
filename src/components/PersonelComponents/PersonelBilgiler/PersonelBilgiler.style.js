import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors/colors';

export default StyleSheet.create({
  imageContainer: {
    borderRadius: 70,
    backgroundColor: 'white',
    width: 85,
    height: 85,
    justifyContent: 'center',

    borderColor: 'white',
    borderWidth: 2,
    marginTop: -28,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.dark,
  },
  gorevText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.blue,
    marginBottom: 20,
  },
});
