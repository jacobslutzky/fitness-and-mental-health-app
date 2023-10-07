import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import VideoCard from "./components/VideoCard";
import { useQuery, gql, useMutation } from "@apollo/client";
import * as mutations from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

export default function Mindfulness() {
    const { data, loading, error } = useQuery(
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
            img: require("../assets/extraordinary_moment.jpeg"),
            time: "10 min",
            stars: "4.9",
        },
    ];

    const renderTabBar = (props) => (
        <TabBar {...props} style={{ backgroundColor: "black" }} />
    );

    const FirstRoute = () => (
        <ScrollView
            contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
            }}
            style={styles.cardsContainer}>
            {videoCards.map((item, index) => (
                <VideoCard item={item} index={index} />
            ))}
        </ScrollView>
    );

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
            {/*
        <TabView
        navigationState={state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: FirstRoute,
          third: FirstRoute,
        })}
        onIndexChange={index => state.index = index}
        initialLayout={{}}
        style={styles.tabsContainer}
        sceneContainerStyle={{height: '100%', flex: 1}}
        renderTabBar={renderTabBar}
        />
      */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
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
    },
    scene: {
        flex: 1,
    },
    cardsContainer: {
        marginTop: 40,
    },
});
