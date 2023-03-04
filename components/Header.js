import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => (
 <View style={{ flexDirection: "row" }}>
   <Text style={styles.header}>Gallery</Text>
  
 </View>
);

const styles = StyleSheet.create({
 header: {
   fontSize: 50,
   color: "#ecf0f1",
   fontFamily: "dogbyte"
 }
});

export default Header ;