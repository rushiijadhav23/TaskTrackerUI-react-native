import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import * as Progress from "react-native-progress"
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

// - Icon types
    type IconFamily = "Ionicons" | "Feather" | "MaterialCommunityIcons";

// - Data types
type ProgressTask = {
    id: string;
    category: string;
    title: string;
    progress: number;
    progressColor: string;
    cardBg: string;
    iconBg: string;
    iconColor: string;
    iconName: string;
    iconFamily: IconFamily;
}

const TASKS: ProgressTask[] = [
    {
        id: "1",
        category: "Office Project",
        title: "Grocery shopping app design",
        progress: 0.6,
        progressColor: "#4B7BFF",
        cardBg: "#E7F1FF",
        iconBg: "#FFD6E0",
        iconColor: "#FF6B9D",
        iconName: "cart",
        iconFamily: "Ionicons",
    },
    {
        id: "2",
        category: "Personal Project",
        title: "Uber Eats redesign challenge",
        progress: 0.4,
        progressColor: "#FF6B6B",
        cardBg: "#FFF0EE",
        iconBg: "#FFD6C8",
        iconColor: "#FF6B6B",
        iconName: "restaurant",
        iconFamily: "Ionicons",
    },
    {
        id: "3",
        category: "Daily Study",
        title: "React Native advanced patterns",
        progress: 0.75,
        progressColor: "#6BCB77",
        cardBg: "#EEFBF0",
        iconBg: "#C8F5CE",
        iconColor: "#6BCB77",
        iconName: "book-open",
        iconFamily: "Feather",
    },
    {
        id: "4",
        category: "Side Project",
        title: "Portfolio website revamp",
        progress: 0.3,
        progressColor: "#FFB830",
        cardBg: "#FFFBEE",
        iconBg: "#FFE9B0",
        iconColor: "#FFB830",
        iconName: "color-palette",
        iconFamily: "Ionicons",
    },
    {
        id: "5",
        category: "Health & Fitness",
        title: "Morning workout routine",
        progress: 0.65,
        progressColor: "#26C485",
        cardBg: "#E2F8F0",
        iconBg: "#B8F0DA",
        iconColor: "#26C485",
        iconName: "barbell",
        iconFamily: "Ionicons",
    },
    {
        id: "6",
        category: "UI/UX Design",
        title: "Dashboard redesign for client",
        progress: 0.85,
        progressColor: "#E056FD",
        cardBg: "#F9EEFF",
        iconBg: "#F0C8FF",
        iconColor: "#E056FD",
        iconName: "brush",
        iconFamily: "Ionicons",
    },
];

const CARD_WIDTH = Dimensions.get("window").width * 0.58;

// - Icon Render
function CardIcon({ family, name, color }: {family: IconFamily; name: string; color: string}) {
    switch (family) {
        case "Ionicons": 
            return <Ionicons name={name as any} size={18} color={color} />;
        case "Feather": 
            return <Feather name={name as any} size={18} color={color} />;
        case "MaterialCommunityIcons":
            return <MaterialCommunityIcons name={name as any} size={18} color={color} />;
    }
}

// - Card
function TaskCard({ item }: { item: ProgressTask }) {
    return(
        <View style={[styles.card, { backgroundColor: item.cardBg }]}>
            {/* Category + Icon */}
            <View style={styles.cardHeader}>
                <Text style={styles.categoryText}>{item.category}</Text>
                <View style={[styles.iconBox, { backgroundColor: item.iconBg }]}>
                    <CardIcon family={item.iconFamily} name={item.iconName} color={item.iconColor} />
                </View>
            </View>

            {/* Title */}
            <Text style={styles.titleText}>{item.title}</Text>

            {/* Progress Bar */}
            <View style={styles.progressWrapper}>
                <Progress.Bar
                    progress={item.progress}
                    width={CARD_WIDTH - 40}
                    height={6}
                    color={item.progressColor}
                    unfilledColor="rgba(0,0,0,0.06)"
                    borderWidth={0}
                    borderRadius={8}
                    animated={true}
                />
            </View>
        </View>
    )
}


// -Export
export default function InProgressSection(){
    return(
        <View style={styles.wrapper}>
            {/* Header */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>In Progress</Text>
                <View style={styles.countBadge}>
                    <Text style={styles.countText}>{TASKS.length}</Text>
                </View>
            </View>

            {/* Horizontal Flatlist */}
            <FlatList
                data={TASKS}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => <TaskCard item={item} />}
            />
        </View>
    )
}

// - Styles
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 28,
    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingHorizontal: 20,
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1A1A2E",
    },
    countBadge: {
        backgroundColor: "#E8E4FF",
        borderRadius: 10,
        paddingHorizontal: 7,
        paddingVertical: 1,
    },
    countText: {
        fontSize: 12,
        fontWeight: "700",
        color: "#7B6FF0"
    },
    listContent: {
        paddingHorizontal: 20,
        gap: 15,
    },
    card: {
        width: CARD_WIDTH,
        borderRadius: 20,
        padding: 18,
        gap: 10,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    categoryText: {
        fontSize: 12,
        color: "#888",
        fontWeight: "500"
    },
    iconBox: {
        width: 32,
        height: 32,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    iconEmoji: {
        fontSize: 16
    },
    titleText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#1A1A2E",
        lineHeight: 21,
    },
    progressWrapper: {
        marginTop: 4,
    },
})