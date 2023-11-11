import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const AchievementCard = ({ onDismiss, onShare, onProfile }) => {
    return (
        <View style={styles.container}>
            <View style={styles.notch}>
                <Image
                    source={require("../../assets/coin.webp")}
                    style={styles.medalImage}
                />
                <Image
                    source={require("../../assets/confetti.webp")}
                    style={styles.confetti}
                />
                <Text style={styles.medalText}>+100</Text>
            </View>
            <LinearGradient
                colors={["#DBBC72", "#FFFFFF"]}
                style={styles.gradientBackground}
                start={{ x: 0, y: 0.35 }}
                end={{ x: 0, y: 1 }}>
                <View style={styles.card}>
                    <TouchableOpacity
                        style={styles.dismissButton}
                        onPress={onDismiss}>
                        <AntDesign name="closecircle" size={24} color="black" />
                    </TouchableOpacity>

                    <Text style={styles.congrats}>CONGRATULATIONS</Text>
                    <Text style={styles.description}>
                        You’ve completed workouts{"\n"}
                        <Text style={styles.boldText}>10</Text> days in a row!
                    </Text>
                    <TouchableOpacity
                        style={styles.profileButton}
                        onPress={onProfile}>
                        <Text style={styles.profileButtonText}>
                            Check out your Profile!
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.shareButton}
                        onPress={onShare}>
                        <Text style={styles.shareButtonText}>
                            SHARE YOUR RESULTS
                        </Text>
                        <AntDesign
                            name="sharealt"
                            style={styles.shareIcon}
                            size={20}></AntDesign>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 50,
    },
    gradientBackground: {
        borderRadius: "20px",
        width: 350,
        height: 380,
        top: -200,
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        borderRadius: 20,
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingTop: 50, // Adjust padding to avoid overlapping with the notch
        overflow: "hidden",
    },
    dismissButton: {
        position: "absolute",
        right: 10,
        top: 10,
    },
    notch: {
        backgroundColor: "#DBBC72",
        position: "absolute",
        top: -250, // Half of the size to make it appear above the card
        borderRadius: 120,
        width: 95,
        height: 130,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1, // Ensure this is lower than medalImage's zIndex
    },
    medalText: {
        color: "black",
        fontWeight: "bold",
        top: 37.5,
        fontSize: "15px",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    confetti: {
        position: "absolute",
        top: 70,
        color: "black",
        opacity: 1,
    },
    boldText: {
        fontWeight: "bold",
        shadowColor: "gray",
        shadowOffset: { width: 4, height: 6 }, // X and Y offset of the shadow
        shadowOpacity: 1, // Opacity of the shadow
        shadowRadius: 5,
        marginBottom: 20,
    },
    medalImage: {
        top: 12.5,
        height: 65,
        width: 65,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 65,
        position: "absolute",
    },
    congrats: {
        marginTop: 50,
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        shadowColor: "gray",
        shadowOffset: { width: 4, height: 5 }, // X and Y offset of the shadow
        shadowOpacity: 0.5, // Opacity of the shadow
        shadowRadius: 2,
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 16,
        shadowColor: "gray",
        shadowOffset: { width: 4, height: 5 }, // X and Y offset of the shadow
        shadowOpacity: 0.5, // Opacity of the shadow
        shadowRadius: 2,
        marginBottom: 20,
    },
    profileButton: {
        marginTop: 10,
        backgroundColor: "#DBBC7294",
        borderRadius: 20,
    },
    profileButtonText: {
        marginTop: 7.5,
        marginBottom: 7.5,
        marginLeft: 7.5,
        marginRight: 7.5,
        fontSize: 12.5,
        color: "black", // Assuming blue is your theme color for links
    },
    shareButton: {
        backgroundColor: "#DBBC72",
        position: "absolute",
        top: 320,
        borderRadius: 20,
    },
    shareIcon: {
        position: "absolute",
        left: 182.5,
        top: 7.5,
    },
    shareButtonText: {
        fontWeight: "bold",
        color: "black",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 40,
        fontSize: 14,
    },
});

export default AchievementCard;
