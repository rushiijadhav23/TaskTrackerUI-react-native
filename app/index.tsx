import { View, StyleSheet, ScrollView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import TaskProgressCard from "../components/TaskProgressCard";
import InProgressSection from "../components/InProgressSection";
import TaskGroupsSection from "../components/TaskGroupsSection";

export default function Index() {
  return (
  
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40}}>
        <TaskProgressCard progress={85}/>
        <InProgressSection/>
        <TaskGroupsSection/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5FA",
  },
})