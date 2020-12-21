import React from 'react'
import Icon from '@expo/vector-icons/MaterialIcons'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
 

const ListItem = ({item,deleteItem}) => {
    return(
<TouchableOpacity style={styles.listItem}>
    <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon name="delete" size={20} color="firebrick" onPress={() => deleteItem(item.id)} />
    </View>
</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  listItem: {
      padding:15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor:'#eee'
  },
  listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  listItemText: {
      fontSize:18
  }


})

export default ListItem