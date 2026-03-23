import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

// This defines a type(shape) of an object
interface Props {
    progress?: number;
}

export default function TaskProgressCard({progress=85}: Props){
    return(
        <View style={styles.card}>

            {/* Top right 3 dots */}
            <TouchableOpacity style={styles.dotsButton} activeOpacity={0.7}>
                <Text style={styles.dotsText}>• • •</Text>
            </TouchableOpacity>

            {/* Left: Text + Button */}
            <View style={styles.leftSection}>
                <Text style={styles.taskText}>Your today&apos;s task{"\n"}almost done!</Text>
                <TouchableOpacity style={styles.viewTaskButton} activeOpacity={0.8}>
                    <Text style={styles.viewTaskText}>View Task</Text>
                </TouchableOpacity>
            </View>

            {/* Right: Circular progress */}
            <CircularProgress
                value={progress}
                radius={45}
                duration={1200}
                valueSuffix="%"
                progressValueColor="#fff"
                progressValueStyle={{ fontWeight: "700", fontSize: 16 }}
                activeStrokeColor="#fff"
                activeStrokeWidth={7}
                inActiveStrokeColor="rgba(255,255,255,0.25)"
                inActiveStrokeWidth={7}
                inActiveStrokeOpacity={1}
                circleBackgroundColor="transparent"    
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#6132E0",
        borderRadius: 24,
        marginHorizontal: 20,
        marginTop: 10,
        padding: 35,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dotsButton: {
        position: "absolute",
        top: 14,
        right: 14,
        backgroundColor: "#A085ED",
        borderRadius: 8,
        paddingHorizontal: 3,
        paddingVertical: 5,
    },
    dotsText: {
        color: "#fff",
        fontSize: 10,
        letterSpacing: 1,
    },
    leftSection: {
        flex: 1,
        gap: 16,
        paddingRight: 16,
    },
    taskText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "500",
        lineHeight: 20,
    },
    viewTaskButton: {
        backgroundColor: "#fff",
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 12,
        alignSelf: "flex-start"
    },
    viewTaskText: {
        color: "#6132E0",
        fontWeight: "700",
        fontSize: 14,
    },   
});