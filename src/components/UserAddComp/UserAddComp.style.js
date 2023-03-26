import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  desc: {
    marginTop: '30%',
    textAlign: 'center',
    marginBottom: '10%',
    fontSize: 25,
    color: '#070D2D',
    fontWeight: '800',
  },
  container: {
    backgroundColor: 'red',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    //marginTop: '1%',
    borderRadius: 20,
    maxHeight: 450,
    paddingBottom: '30%',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: '5%',
  },
  inputs: {
    width: '100%',
    height: 60,
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: '1%',
  },

  button: {
    width: '50%',
    backgroundColor: '#79EFFF',
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: '#070D2D',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
  },
});
