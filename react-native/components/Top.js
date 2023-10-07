import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Top({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    style={{ width: 60 }}>
                    <Image
                        style={styles.buffalo}
                        source={require("../../assets/buffalo.png")}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}>
                    <Text style={styles.text}>Total Points:</Text>
                    <View style={{ flexDirection: "row", gap: 12 }}>
                        <Image
                            source={require("../../assets/coin.webp")}
                            style={styles.coin}
                        />
                        <Image
                            source={require("../../assets/buff_icon.webp")}
                            style={styles.overlayImage}
                        />

                        <Text style={styles.points}>850</Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                    style={{ width: 60 }}>
                    <Image
                        style={styles.caleb}
                        source={require("../../assets/caleb.jpeg")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginHorizontal: 10,
    },
    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: "95%",
    },
    points: {
        justifyContent: "center",
        color: "white",
        fontSize: 20,
    },
    buffalo: {
        height: 45,
        width: 60,
        marginTop: 30,
    },

    caleb: {
        height: 45,
        width: 45,
        marginRight: 0,
        marginTop: 30,
        borderRadius: 125,
        borderWidth: 3,
        borderColor: "#dbbc72",
    },
    text: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        marginTop: 30,
    },
    coin: {
        height: 18,
        width: 18,
        marginTop: 4,
        marginRight: -7.5,
    },
    overlayImage: {
        position: "absolute",
        top: "60%",
        left: "11%",
        transform: [{ translateX: -9 }, { translateY: -9 }], // Center the overlay image
        height: 14,
        width: 14,
    },
});
