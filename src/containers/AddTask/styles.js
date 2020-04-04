import { StyleSheet } from "react-native";

import { Colors, Fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  section: {
    width: "100%",
  },
  label: {
    color: Colors.primary,
    fontSize: Fonts.medium,
    marginBottom: 16
  },
  input: {
    marginVertical: 16
  }
});
