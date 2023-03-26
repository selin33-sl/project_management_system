import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();

export function handlePress({sayfa}) {
  return navigation.navigate(sayfa);
}
