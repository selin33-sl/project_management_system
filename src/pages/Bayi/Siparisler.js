import React from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Background from '../../components/Background';
import DBayiSiparisler from './DBayiSiparisler';
import TBayiSiparisler from './TBayiSiparisler';

const Siparisler = () => {
  return (
    <SafeAreaView>
      <TBayiSiparisler></TBayiSiparisler>
      <DBayiSiparisler></DBayiSiparisler>
    </SafeAreaView>
  );
};

export default Siparisler;
