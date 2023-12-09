import {
    StyleSheet,
    ScrollView,
    Text,
    View
} from "react-native";
import { useTheme } from "@react-navigation/native";
import VideoCard from "../../components/VideoCard";
import { useQuery, gql } from "@apollo/client";
import * as queries from "../../../src/graphql/queries";

export default function Mindfulness() {
    const { data, loading } = useQuery(
        gql`
            ${queries.getMeditationEntry}
        `,
        {
            variables: { id: "80fcf9db-3a48-4b35-8ae4-9e2167d4312b" },
        }
    );
    const colors = useTheme().colors;

    const videoCards = [
        {
            title: "Extraordinary Moment",
            author: "John Astin",
            img: require("../../../assets/extraordinary_moment.jpeg"),
            time: "10 min",
            stars: "5.0",
        },
    ];

    state = {
        index: 0,
        routes: [
            { key: "first", title: "All" },
            { key: "second", title: "Meditation" },
            { key: "third", title: "Therapy" },
        ],
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={[styles.header, { color: colors.text }]}>
                    Mindfulness
                </Text>
            </View>
            <ScrollView
                contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
                style={styles.cardsContainer}>
                {loading && (
                    <View>
                        <Text style={{ color: "white" }}>Loading...</Text>
                    </View>
                )}
                {data &&
                    videoCards.map((item, index) => (
                        <VideoCard
                            key={item + index}
                            item={item}
                            index={index}
                        />
                    ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    tabsContainer: {
        marginTop: 10,
        backgroundColor: "black",
    },
    headerContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 30
    },
    scene: {
        flex: 1,
    },
    cardsContainer: {
        marginTop: 40,
    },
});
