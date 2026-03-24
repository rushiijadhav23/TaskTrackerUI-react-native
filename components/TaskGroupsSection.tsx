import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Ionicons, MaterialIcons, FontAwesome5, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

// Types

type IconFamily = "Ionicons" | "MaterialIcons" | "FontAwesome5" | "Feather" | "MaterialCommunityIcons";

type TaskGroup = {
    id: string;
    title: string;
    taskCount: number;
    progress: number;
    progressColor: string;
    iconBg: string;
    iconColor: string;
    iconName: string;
    iconFamily: IconFamily;
};

const TASK_GROUP: TaskGroup[] =[
    {
        id: "1",
        title: "Office Project",
        taskCount: 25,
        progress: 70,
        progressColor: "#FF6B9D",
        iconBg: "#FFE4EF",
        iconColor: "#FF6B9D",
        iconName: "briefcase",
        iconFamily: "Ionicons",
    },
    {
        id: "2",
        title: "Personal Project",
        taskCount: 30,
        progress: 52,
        progressColor: "#7B6FF0",
        iconBg: "#EEEBFF",
        iconColor: "#7B6FF0",
        iconName: "person",
        iconFamily: "Ionicons",
    },
    {
        id: "3",
        title: "Daily Study",
        taskCount: 30,
        progress: 87,
        progressColor: "#FF9F43",
        iconBg: "#FFF3E4",
        iconColor: "#FF9F43",
        iconName: "book-open",
        iconFamily: "Feather",
    },
    {
        id: "4",
        title: "Health & Fitness",
        taskCount: 18,
        progress: 45,
        progressColor: "#26C485",
        iconBg: "#E2F8F0",
        iconColor: "#26C485",
        iconName: "fitness",
        iconFamily: "Ionicons",
    },
    {
        id: "5",
        title: "Side Hustle",
        taskCount: 12,
        progress: 30,
        progressColor: "#4B9FFF",
        iconBg: "#E4F0FF",
        iconColor: "#4B9FFF",
        iconName: "rocket",
        iconFamily: "Ionicons",
    },
    {
        id: "6",
        title: "Home Tasks",
        taskCount: 20,
        progress: 65,
        progressColor: "#F7B731",
        iconBg: "#FEF6DC",
        iconColor: "#F7B731",
        iconName: "home",
        iconFamily: "Feather",
    },
    {
        id: "7",
        title: "Creative Writing",
        taskCount: 15,
        progress: 55,
        progressColor: "#E056FD",
        iconBg: "#F9E4FF",
        iconColor: "#E056FD",
        iconName: "create",
        iconFamily: "Ionicons",
    },
    {
        id: "8",
        title: "Finance & Budget",
        taskCount: 22,
        progress: 78,
        progressColor: "#20BF6B",
        iconBg: "#E2F8EC",
        iconColor: "#20BF6B",
        iconName: "wallet",
        iconFamily: "Ionicons",
    },
    {
        id: "9",
        title: "Travel Planning",
        taskCount: 10,
        progress: 20,
        progressColor: "#FD9644",
        iconBg: "#FFF0E4",
        iconColor: "#FD9644",
        iconName: "airplane",
        iconFamily: "Ionicons",
    },
    {
        id: "10",
        title: "UI/UX Design",
        taskCount: 28,
        progress: 92,
        progressColor: "#45AAF2",
        iconBg: "#E4F4FF",
        iconColor: "#45AAF2",
        iconName: "color-palette",
        iconFamily: "Ionicons",
    },
    {
        id: "11",
        title: "Team Meetings",
        taskCount: 8,
        progress: 38,
        progressColor: "#FC5C65",
        iconBg: "#FFE4E6",
        iconColor: "#FC5C65",
        iconName: "people",
        iconFamily: "Ionicons",
    },
]

// Icon - Render
function GroupIcon({ family, name, color, size }: { family: IconFamily; name: string; color: string; size: number}){
    switch(family) {
        case "Ionicons": 
            return <Ionicons name={name as any} size={size} color={color}/>;
        case "MaterialIcons":     
            return <MaterialIcons name={name as any} size={size} color={color} />;
        case "FontAwesome5":      
            return <FontAwesome5 name={name as any} size={size} color={color} />;
        case "Feather":           
            return <Feather name={name as any} size={size} color={color} />;
        case "MaterialCommunityIcons": 
            return <MaterialCommunityIcons name={name as any} size={size} color={color} />; 
    }
}

// - Card

function TaskGroupCard({ item }: { item: TaskGroup }) {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            {/* Left Icon */}
            <View style={[styles.iconBox, { backgroundColor: item.iconBg}]}>
                <GroupIcon 
                    family={item.iconFamily}
                    name={item.iconName}
                    color={item.iconColor}
                    size={22}
                />
            </View>

            {/* Middle Title + Task count */}
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>{item.taskCount} Tasks</Text>
            </View>

            {/* Right - Circular Progress */}
            <CircularProgress 
                value={item.progress}
                radius={30}
                duration={1000}
                valueSuffix="%"
                progressValueColor={item.progressColor}
                progressValueStyle={{fontWeight: "700", fontSize: 13}}
                activeStrokeColor={item.progressColor}
                activeStrokeWidth={6}
                inActiveStrokeColor="rgba(0,0,0,0.06)"
                inActiveStrokeWidth={6}
                circleBackgroundColor="transparent"
            />
        </TouchableOpacity>
    )
}

// - Section

export default function TaskGroupsSection() {
    return (
        <View style={styles.wrapper}>
            {/* Header */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Task Groups</Text>
                <View style={styles.countBadge}>
                    <Text style={styles.countText}>{TASK_GROUP.length}</Text>
                </View>
            </View>

            {/* Verticle FlatList */}
            <FlatList
                data={TASK_GROUP}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                contentContainerStyle={styles.listContent}
                renderItem={({item}) => <TaskGroupCard item={item}/>}
            />
        </View>
    )
}

// - Styles
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 28,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1A1A2E"
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
        gap: 12,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 16,
        gap: 14,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 1,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center"
    },
    cardInfo: {
        flex: 1,
        gap: 4
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#1A1A2E",
    },
    cardSubtitle: {
        fontSize: 12,
        color: "#888",
        fontWeight: "400",
    }
})