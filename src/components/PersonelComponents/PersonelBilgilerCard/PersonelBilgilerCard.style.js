import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors/colors';

export default StyleSheet.create({
  cardStyle: {
    margin: 20,
    height: 160,
    width: 140,
    borderWidth: 2,
    borderColor: colors.dark,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    textAlign: 'center',
    marginTop: 15,
    fontWeight: '600',
    color: 'black',
    fontSize: 15,
  },
  gorevlerText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  puanText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
});
