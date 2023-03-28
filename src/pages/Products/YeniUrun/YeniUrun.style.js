import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors/colors';

export default StyleSheet.create({
  headerText: {
    marginTop: 10,
    marginLeft: 10,
  },
  listContainer: {
    marginHorizontal: 20,
    marginBottom: 85,
    marginTop: 10,
    flex: 1,
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
});
