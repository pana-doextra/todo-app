import { View, Text, TouchableOpacity, StyleSheet , FlatList, TextInput} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { ITodoItem } from "@/screens/HomeScreen";
import React, { useState } from "react";

interface ITodoItemProps {
    item: ITodoItem;
    handleChangeStatus: (item: ITodoItem) => void;
    handleDelete: (item: ITodoItem) => void;
    handleEdit: (titleEdit: string, typeEdit: string, id: number) => void;

}
function ToDoItem(props: ITodoItemProps){
    const {item, handleChangeStatus, handleDelete, handleEdit} = props;
    const [titleEdit, setTitleEdit] = useState<string>(item.title);
    const [isEdit, setState] = useState(false);
    const [typeEdit, setTypeEdit] = useState<string>(item.type);
    const onPressEdit = () => {
      if(isEdit){
        handleEdit(titleEdit, typeEdit, item.id)
        setState(false)
      }
      else{
        setState(true)
      }

    };
    return (
      <View key={item.id} style={styles.task}>
      <View style={{ gap: 5 }}>
        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
        <Text>{item.type}</Text>
      </View>
      <View style={styles.icon}>
        {!item.isActive && (
          <TouchableOpacity onPress={() => handleChangeStatus(item)}>
            <MaterialCommunityIcons
              name="sticker-check-outline"
              size={24}
              color="green"
            />
          </TouchableOpacity>
        )}
        {!item.isActive && (
          <TouchableOpacity onPress={() => handleEdit(item)}>
            <FontAwesome name="edit" size={24} color="#EDE66D" />
          </TouchableOpacity>
        )}
        {

        }

        <TouchableOpacity onPress={() => handleDelete(item)}>
          <FontAwesome name="trash-o" size={24} color="#ED786D" />
        </TouchableOpacity>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    input: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    body: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#B3B7EE",
      height: 800,
      paddingTop: 350,
    },
    addButton: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#9395D3",
      borderRadius: 40,
      height: 70,
      width: 100,
    },
    addingTask: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: -700,
    },
    taskBox: {
      flexDirection: "column",
      justifyContent: "flex-start",
      backgroundColor: "#fff",
      borderRadius: 40,
      height: 70,
      width: 350,
      marginTop: 50,
      paddingLeft: 50,
    },
    status: {
      backgroundColor: "#9395D3",
      borderRadius: 10,
      height: 30,
      width: 30,
    },
    task: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 20},
    icon: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 30,
    },
  });

  export default ToDoItem;