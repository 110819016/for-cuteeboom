import {StyleSheet, Text, Pressable, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {BackIcon} from "../icons/CIcon";
import {useState} from "react";

function Book({item,navigation}){

  const [press, setPress] = useState(false);

  const goBack = () => {
      setPress(!press);
  };

  return(
    <SafeAreaView edges={["top", "left", "right", "bottom"]} style={{backgroundColor:"#fff"}}>
      <View style={styles.container}>
        <View style={styles.topNav}>
          <Pressable
            onPress={()=>{navigation.navigate("Home")}}
            paddingHorizontal={10}
          >
            <BackIcon size={35}/>
          </Pressable>
          <Pressable
            onPress={()=>{navigation.navigate("Home")}}
            paddingHorizontal={10}
          >
            < size={35}/>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 8,
    paddingTop: 2,
  },

  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 24,
    paddingHorizontal: 27,
    marginBottom: 8,
    backgroundColor: "#fff",
  },

  componentTitle1: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 16,
  },

  componentTitle2: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginVertical: 16,
  },
});

export default Book;