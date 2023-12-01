import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { ApartmentType } from "../../types/types";
import { ENDPOINTS } from "../../endPointsEnum";

const Apartments = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ApartmentType[]>([]);

  const getApartments = async () => {
    try {
      const response = await fetch(ENDPOINTS.APARTMENTS);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApartments();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toLocaleString()}
          renderItem={({ item: { title, id, img, price } }) => (
            <TouchableHighlight
              onPress={() => navigation.navigate(`Apartment`, { id })}
            >
              <View style={styles.item} key={id}>
                <Image
                  source={require("../../../assets/apart.jpg")} //added temp img
                  style={styles.img}
                  alt={""}
                />
                <Text>Title: {title}</Text>
                <Text>Price: {price}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      )}
    </View>
  );
};

export default Apartments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  item: {
    flex: 1,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
    flexDirection: "column",
    borderRadius: 3,
    borderColor: "#00000",
    borderWidth: 1,
  },
  img: {
    height: 150,
    width: 320,
  },
});
