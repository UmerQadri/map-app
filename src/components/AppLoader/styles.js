import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width,
    height,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.6)",
  },
});
