import { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import { Divider } from "react-native-paper";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#00224f", height: 1000 }}>
      <View style={styles.even}>
        <View style={styles.center}>
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.hello}>Hello Welcome Back</Text>
          <Text style={styles.message}>Welcome back please sign in again</Text>
        </View>
        <View style={styles.m1}>
          <TextInput style={{ marginBottom: 30 }} placeholder="Email" />
          <TextInput placeholder="Password" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.log}>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            marginBottom: -30,
          }}
        >
          <Divider style={{ width: 180 }} />
          <Text style={{ color: "white" }}>Or</Text>
          <Divider style={{ width: 180 }} />
        </View>
        <TouchableOpacity style={styles.other}>
          <Text style={styles.fb}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other}>
          <Text style={styles.fb}>Gmail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  even: {
    display: "flex",
    flexDirection: "column",
    gap: 70,
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
  },
  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 40,
    height: 50,
    width: 350,
    marginLeft: 20,
  },
  log: {
    color: "#00224f",
    fontSize: 16,
  },
  m1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 50,
  },
  heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  hello: {
    color: "white",
    fontWeight: 600,
    fontSize: 26,
  },
  message: {
    color: "#4796b3",
    fontSize: 14,
    marginTop: -30,
  },
  em: {
    color: "white",
    fontSize: 16,
    marginTop: 20,
  },
  other: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#11325C",
    borderRadius: 40,
    height: 50,
    width: 350,
    marginLeft: 20,
    marginTop: -10,
    marginBottom: -50,
  },
  fb: {
    color: "white",
    fontSize: 16,
  },
});
