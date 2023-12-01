import { View, StyleSheet, Text } from "react-native";

export default function DetailsItem({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.txtBold}>{title}:</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailItem: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  txtBold: {
    fontWeight: "bold",
  },
});
