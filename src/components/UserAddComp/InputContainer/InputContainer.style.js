import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#79EFFF',
    height: 60,
    width: '75%',

    paddingLeft: 5,
    fontSize: 16,
    minHeight: 40,
    margin: 7,
    borderRadius: 15,
  },
  iconContainer: {
    backgroundColor: '#070D2D',
    borderRadius: 50,
    width: '8%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 15,
    width: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  input: {
    marginLeft: 5,
  },
});
