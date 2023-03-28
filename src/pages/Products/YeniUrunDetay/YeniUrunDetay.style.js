import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors/colors';

export default StyleSheet.create({
  categoriesText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.grey1,
    marginLeft: 5,
  },
  selectButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.dark,
    fontWeight: 'bold',
  },
  selectButton: {
    height: 50,
    width: 150,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    borderRadius: 15,
  },
  navBarContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    height: 50,
    backgroundColor: colors.dark,
  },
  navBarIconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  pdfContainer: {
    width: 300,
    height: 100,
    backgroundColor: colors.background,
    marginHorizontal: 60,
    marginVertical: 20,
    borderRadius: 15,
    padding: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
    width: '100%',
    height: 60,
    backgroundColor: 'white',
  },
});
