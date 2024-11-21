import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput,
    SafeAreaView,
    ScrollView,
    FlatList,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import TextInputAdd from "@/components/TextInputAdd";
  import AntDesign from "@expo/vector-icons/AntDesign";
  import FontAwesome from "@expo/vector-icons/FontAwesome";
  import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
  import ToDoItem from "@/components/TodoItem";
  import AsyncStorage from '@react-native-async-storage/async-storage';
  export interface ITodoItem {
    id: number;
    title: string;
    type: string;
    isActive: boolean;
  }
  export default function HomeScreen() {
    const [title, setTitle] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [id, setId] = useState<number>(1);
    const [dataToDo, setDataToDo] = useState<ITodoItem[]>([]);
   
    const getDataLocal = async ()=>{
      const value = await AsyncStorage.getItem('dataToo');
      if (value !== null){
        const dataLocal = JSON.parse(value)
        setDataToDo(dataLocal)
      }
     
    }
    const saveDataLocal = async ()=>{
      await AsyncStorage.setItem('dataTodo', JSON.stringify(dataToDo))
    }
  
    useEffect(() => {
      getDataLocal()
    })
    
    useEffect(()=>{
      saveDataLocal()
    }, [dataToDo])
  
    const addToDoItem = () => {
      const value = {
        id: id,
        isActive: false,
        title: title,
        type: type,
      };
      setDataToDo([value, ...dataToDo]);
      setId(id + 1);
      setTitle('');
      setType('')
    };
    const handleChangeStatus = (item: ITodoItem) => {
      const newDatatodo = dataToDo.map((todo) => {
        if (todo.id == item.id) {
          return { ...item, isActive: true };
        } else {
          return todo;
        }
      });
      setDataToDo(newDatatodo);
    };
    const handleDelete = (item: ITodoItem) => {
      const newDatatodo = dataToDo.filter((todo) => {
        return item.id != todo.id;
      });
      setDataToDo(newDatatodo);
    };
    const handleEdit = (titleEdit: string, typeEdit: string, id: number) => {
      const newDatatodo =dataToDo.map(todo =>{
        if (todo.id === id) {
          return {...todo, title: titleEdit, type: typeEdit}
        } else {
          return todo
        }
      })
      setDataToDo(newDatatodo) 
    };
    return (
      <SafeAreaView style={{ backgroundColor: "#9395D3", flex: 1 }}>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              margin: 50,
            }}
          >
            TODO APP
          </Text>
        </View>
        <View style={[styles.body]}>
          <View style={styles.addingTask}>
            <View style={styles.input}>
              <TextInputAdd
                placeholder="Title"
                value={title}
                onChangeText={(e) => setTitle(e)}
              />
              <TextInputAdd value={type} placeholder="Type" onChangeText={(e) => setType(e)} />
            </View>
            <TouchableOpacity onPress={addToDoItem}>
              <AntDesign name="pluscircleo" size={40} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={{ gap: 20 }}>
              {dataToDo.map((item) => (
                <ToDoItem
                  item={item}
                  handleChangeStatus={handleChangeStatus}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
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
      alignItems: "center",
      backgroundColor: "#B3B7EE",
      flex: 2,
      gap: 20,
    },
    addButton: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#9395D3",
      borderRadius: 40,
      height: 70,
      width: 70,
    },
    addingTask: {
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
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
      gap: 20,
    },
    icon: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 30,
    },
  });
  
  /*export default function HomeScreen() {
      return (
        <SafeAreaView style={{backgroundColor: "#9395D3", flex: 1}}>
          <View style={styles.header}>
            <Text style={{color:"#fff"}}>Header app</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.upper}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            </View>
            <View style={styles.upper}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            </View>
          </View>
        </SafeAreaView>
      );
    }
    const styles = StyleSheet.create({
      header:{
        justifyContent:'center',
        alignItems:'center',
        padding: 50
      },
      container:{
        borderWidth: 10,
        borderColor:'#fff',
        flexDirection:'row',
    
        flexGrow:1,
      },
      box:{
        padding: 5,
        borderWidth: 5,
        justifyContent:'center',
        backgroundColor: '#34a4eb',
        flex: 2
      },
      upper:{
        flexDirection: 'column',
        flexGrow:1
      }
    });
  */
  