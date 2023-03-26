import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors/colors';

export default StyleSheet.create({
  personGorev: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.blue,
    marginBottom: 20,
  },

  settingIconContainer: {
    position: 'absolute',
    marginLeft: 60,
    marginTop: 30,
    zIndex: 1,
    borderColor: colors.blue,
    borderRadius: 100,
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  listContainer: {
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
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

  navBarContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    height: 50,
    backgroundColor: colors.dark,
  },
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
