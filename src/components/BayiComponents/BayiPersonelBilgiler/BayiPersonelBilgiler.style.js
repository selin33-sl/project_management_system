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
  personNameContainer: {margin: 10, alignItems: 'center'},
  personName: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.dark,
    textAlign: 'center',
  },
});
