import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from "react-native";

import styles from "./nearbyjobs.style";
import useFetch from "../../../hook/useFetch";
import { COLORS, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data.data}
            renderItem={({ item }) => <NearbyJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{
              paddingHorizontal: SIZES.medium,
              paddingVertical: SIZES.small,
              gap: SIZES.small,
            }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
