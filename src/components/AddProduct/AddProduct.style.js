import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
