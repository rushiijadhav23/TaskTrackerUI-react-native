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
]

// Icon - Render
function GroupIcon({ family, name, color, size }: { family: IconFamily; name: string; color: string; size: number}){
    switch(family) {

    }
}