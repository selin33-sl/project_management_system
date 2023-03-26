import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {ListItem, Avatar, Image} from '@rneui/themed';
import {kameraGS1} from './data/Data';

export function DenemeUrunAltBaslik() {
  const [expanded, setExpanded] = useState(false);

  const renderItem2 = ({item}) => {
    return (
      <ListItem.Accordion
        isExpanded={expanded}
        content={
          <ListItem.Title>{item.name}</ListItem.Title>
        }></ListItem.Accordion>
    );
  };

  const renderItem = ({item}) => {
    return (
      <ListItem.Accordion
        style={{margin: 10}}
        isExpanded={expanded}
        title={item.name}
        content={
          <ListItem.Content style={{backgroundColor: 'pink', margin: 10}}>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
        }
        onPress={() => {
          setExpanded(!expanded);
        }}>
        <ListItem.Content style={{backgroundColor: 'purple', margin: 10}}>
          <FlatList
            data={item.altBaslik}
            renderItem={renderItem2}
            keyExtractor={keyExtractor}></FlatList>
        </ListItem.Content>
      </ListItem.Accordion>
    );
  };
  keyExtractor = (item, index) => index.toString();
  return (
    <View style={{marginTop: 20}}>
      <FlatList
        data={kameraGS1}
        renderItem={renderItem}
        keyExtractor={keyExtractor}></FlatList>
    </View>
  );
  //   return (
  //     <>
  //       <ListItem.Accordion
  //         content={
  //           <ListItem.Content>
  //             <ListItem.Title>Top Users</ListItem.Title>
  //             <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
  //           </ListItem.Content>
  //         }
  //         isExpanded={expanded}
  //         onPress={() => {
  //           setExpanded(!expanded);
  //         }}>

  //         <ListItem>
  //           <Avatar
  //             rounded
  //             source={{
  //               uri: 'https://randomuser.me/api/portraits/men/32.jpg',
  //             }}
  //           />
  //           <ListItem.Content>
  //             <ListItem.Title>John Doe</ListItem.Title>
  //             <ListItem.Subtitle>Principle Engineer</ListItem.Subtitle>
  //           </ListItem.Content>
  //         </ListItem>

  //         <ListItem>
  //           <Avatar
  //             rounded
  //             source={{
  //               uri: 'https://randomuser.me/api/portraits/men/36.jpg',
  //             }}
  //           />
  //           <ListItem.Content>
  //             <ListItem.Title>Albert</ListItem.Title>
  //             <ListItem.Subtitle>Staff Engineer</ListItem.Subtitle>
  //           </ListItem.Content>
  //         </ListItem>

  //       </ListItem.Accordion>

  //     </>
  //   );
}

// import React, {useState} from 'react';
// import {ListItem} from '@rneui/themed';
// import {
//   Text,
//   StyleSheet,
//   View,
//   FlatList,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';

// const DATA = [
//   {
//     id: '1',
//     title: 'Item 1',
//     description: 'Description of Item 1',
//   },
//   {
//     id: '2',
//     title: 'Item 2',
//     description: 'Description of Item 2',
//   },
//   {
//     id: '3',
//     title: 'Item 3',
//     description: 'Description of Item 3',
//   },
// ];

// const App = () => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const renderItem = ({item}) => (
//     <ListItem
//       key={item.id}
//       bottomDivider
//       onPress={() => setSelectedItem(item)}
//       containerStyle={{
//         backgroundColor: selectedItem?.id === item.id ? '#ddd' : 'white',
//       }}>
//       <ListItem.Content>
//         <ListItem.Title>{item.title}</ListItem.Title>
//         <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
//       </ListItem.Content>
//       <ListItem.Chevron />
//     </ListItem>
//   );

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={{padding: 20}}>
//         <Text style={{fontSize: 20, marginBottom: 10}}>
//           Selected Item: {selectedItem?.title}
//         </Text>
//         <FlatList
//           data={DATA}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;
