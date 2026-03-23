import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import * as Progress from "react-native-progress"

// - Data
type ProgressTask = {
    id: string;
    category: string;
    title: string;
    progress: number;
    progressColor: string;
    cardBg: string;
    iconBg: string;
    iconEmoji: string;
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
        iconEmoji: "🛒",
    },
    {
        id: "2",
        category: "Personal Project",
        title: "Uber Eats redesign challenge",
        progress: 0.4,
        progressColor: "#FF6B6B",
        cardBg: "#FFF0EE",
        iconBg: "#FFD6C8",
        iconEmoji: "🍔",
    },
    {
        id: "3",
        category: "Daily Study",
        title: "React Native advanced patterns",
        progress: 0.75,
        progressColor: "#6BCB77",
        cardBg: "#EEFBF0",
        iconBg: "#C8F5CE",
        iconEmoji: "📚",
    },
    {
        id: "4",
        category: "Side Project",
        title: "Portfolio website revamp",
        progress: 0.3,
        progressColor: "#FFB830",
        cardBg: "#FFFBEE",
        iconBg: "#FFE9B0",
        iconEmoji: "🎨",
    },
];

const CARD_WIDTH = Dimensions.get("window").width * 0.58;

// - Card
function TaskCard({ item }: { item: ProgressTask }) {
    return(
        <View style={[styles.card, { backgroundColor: item.cardBg }]}>
            {/* Category + Icon */}
            <View style={styles.cardHeader}>
                <Text style={styles.categoryText}>{item.category}</Text>
                <View style={[styles.iconBox, { backgroundColor: item.iconBg }]}>
                    <Text style={styles.iconEmoji}>{item.iconEmoji}</Text>
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
                    unfilledColor="rgba(0,0,0,0.8)"
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