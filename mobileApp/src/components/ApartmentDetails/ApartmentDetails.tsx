import React, { useEffect } from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useState } from "react";
import DetailsItem from "./DetailsItem/DetailsItem";
import { ApartmentType } from "../../types/types";
import { ENDPOINTS } from "../../endPointsEnum";

const ApartmentDetails = ({ route, navigation }) => {
  const { id } = route.params;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ApartmentType>();

  const getApartment = async () => {
    try {
      const response = await fetch(ENDPOINTS.APT_DETAILS + id);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApartment();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      <Image source={require("../../../assets/apart.jpg")} style={styles.img} />
      <View style={styles.list}>
        <DetailsItem title="Title" value={data.title} />
        <DetailsItem title="Description" value={data.description} />
        <DetailsItem title="Area Size" value={data.areaSize} />
        <DetailsItem title="Price" value={data.price} />
        <DetailsItem title="Installment Plan" value={data.installmentPlan} />
      </View>
    </View>
  );
};

export default ApartmentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  list: {
    flex: 1,
    padding: 5,
  },
  img: {
    width: "auto",
    height: 300,
    marginBottom: 20,
    borderRadius: 5,
  },
});
