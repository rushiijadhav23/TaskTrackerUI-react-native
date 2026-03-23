import { View, StyleSheet, ScrollView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import TaskProgressCard from "../components/TaskProgressCard";

export default function Index() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView>
        <TaskProgressCard/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5FA",
  },
});
