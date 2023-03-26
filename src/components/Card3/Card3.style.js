import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 30,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginHorizontal: 10,
    marginVertical: 20,
    height: 180,
    width: 180,
    backgroundColor: 'red',
  },
  image: {
    marginTop: 1,
    borderRadius: 50,
    height: 50,
    width: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  name: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
