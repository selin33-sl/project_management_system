import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import NavBar from '../NavBar/NavBar';
import styles from './UserAddComp.style';
import {PickerComp} from './PickerComp/PickerComp';
import {user, email, lock} from '../../assets';
import {InputContainer} from './InputContainer/InputContainer';

export function UserAddComp({header}) {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  // const [isError, setIsError] = useState(false);
  // const [message, setMessage] = useState('');

  const [headerText, setHeaderText] = useState(header);

  return (
    <View>
      <NavBar header={headerText} />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.desc}>Kullanıcı hesabı oluşturun</Text>
        {headerText === 'Personel Ekle' ? <PickerComp></PickerComp> : null}

        <View style={styles.card}>
          <View style={styles.form}>
            <View style={styles.inputs}>
              <InputContainer
                placeholder="Ad Soyad"
                secureTextEntry={false}
                image={user}
              />

              <InputContainer
                placeholder="Email"
                secureTextEntry={false}
                image={email}
              />

              <InputContainer
                placeholder="Password"
                secureTextEntry={true}
                image={lock}
              />

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Kayıt Oluştur</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
