import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors/colors';

export default StyleSheet.create({
  container: {
    height: '90%',
    width: '40%',
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  imageContainer: {
    height: 120,
    width: 120,
    margin: 10,
  },
  nameContainer: {
    backgroundColor: colors.grey1,
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  nameText: {
    fontWeight: '700',
    color: colors.dark,
  },
  listContainer: {
    marginBottom: 70,
    flex: 1,
    alignItems: 'center',
    marginLeft: '4%',
  },
  searchContainer: {
    width: '100%',
    padding: 16,
  },
  searchInput: {
    height: 50,
    marginTop: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    padding: 8,

    shadowColor: '#cccccc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
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
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
