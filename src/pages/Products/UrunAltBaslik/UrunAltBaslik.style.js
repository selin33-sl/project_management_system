import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors/colors';

export default StyleSheet.create({
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  navBarIconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 8,
  },
  navBarContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    height: 50,
    backgroundColor: colors.dark,
  },
  container: {
    flexDirection: 'row',

    alignItems: 'center',
    borderRadius: 15,
    //justifyContent: 'space-around',
    marginTop: 10,

    width: '100%',
    height: 60,
    backgroundColor: 'white',
  },
  listContainer: {
    marginHorizontal: 20,
    marginBottom: 130,
    marginTop: 10,
  },
  logo: {
    marginTop: 10,
    borderRadius: 50,
    height: 50,
    width: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
