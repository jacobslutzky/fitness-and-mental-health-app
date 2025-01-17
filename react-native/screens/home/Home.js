import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from "react-native";
import { useTheme, useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useQuery, gql, useMutation } from "@apollo/client";
import * as mutations from "../../../src/graphql/mutations";
import * as queries from "../../../src/graphql/queries";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

export default function Home({ navigation }) {
    const { user } = useAuthenticator((context) => [context.user]);
    global.userId = user.username;

    //Check if user exists
    const {
        data: dataGetStats,
        loading: loadingGetStats,
        error: errorGetStats,
    } = useQuery(
        gql`
            ${queries.getUserStats}
        `,
        {
            variables: { id: `stats-${global.userId}` },
        }
    );
    //Check if user exists
    const {
        data: dataUser,
        loading: loadingUser,
        error: errorUser,
        refetch,
    } = useQuery(
        gql`
            ${queries.getUser}
        `,
        {
            variables: { id: `${global.userId}` },
        }
    );

    const taskLabels = [
        {
            label: "Complete Today's Workout",
            screen: "Fitness",
            iconType: "lifting",
            iconColor: "#3787D5",
        },
        {
            label: "Complete Today's Meditation",
            screen: "Mindfulness",
            iconType: "brain",
            iconColor: "#F5AB26",
        },
    ];

    const [isPressed, setIsPressed] = useState(
        new Array(taskLabels.length).fill(false)
    );

    const [
        updateUser,
        {
            data: dataUpdateUser,
            loading: loadingUpdateUser,
            error: errorUpdateUser,
        },
    ] = useMutation(
        gql`
            ${mutations.updateUser}
        `
    );

    const [
        createUserStats,
        {
            data: dataCreateStats,
            loading: loadingCreateStats,
            error: errorCreateStats,
        },
    ] = useMutation(
        gql`
            ${mutations.createUserStats}
        `
    );

    const [
        createUser,
        {
            data: dataCreateUser,
            loading: loadingCreateUser,
            error: errorCreateUser,
        },
    ] = useMutation(
        gql`
            ${mutations.createUser}
        `
    );

    useEffect(() => {
        if (!(dataGetStats && dataGetStats.getUserStats)) {
            const statsInput = {
                id: `stats-${global.userId}`,
                mindfulMinutes: 0,
                meditationStreak: 0,
                workoutsCompleted: 0,
                email: user.attributes.email,
                points: 0,
            };
            createUserStats({ variables: { input: statsInput } });
        }

        if (!(dataUser && dataUser.getUser)) {
            const userInput = {
                id: `${global.userId}`,
                name: user.attributes.name ? user.attributes.name : "",
                email: user.username,
                profilePicture: "",
                taskCompletionList: isPressed,
            };
            createUser({ variables: { input: userInput } });
        }
    }, [dataGetStats, dataUser]);

    const [mutateFunction, { data, loading, error }] = useMutation(
        gql`
            ${mutations.createDailyTask}
        `
    );

    const input = {
        label: "TestLabel",
        screen: "TestScreen",
        icon: "TestIcon",
    };

    const colors = useTheme().colors;

    const [tasksFiltered, setTasksFiltered] = useState(taskLabels);
    const [tasksSearched, setTasksSearched] = useState(taskLabels);
    const [isAll, setIsAll] = useState(true);
    const [search, setSearch] = useState("");

    const handlePress = (item, index) => {
        mutateFunction({ variables: { input: input } });
        //isPressed[index] = !isPressed[index];
        //setIsPressed([...isPressed]);
        navigation.navigate(item.screen, {
            taskCompletionList: isPressed,
            taskCompletionListIndex: index,
        });
    };

    const handleFilter = (command) => {
        if (command == "all") {
            setTasksFiltered([...taskLabels]);
            setTasksSearched([...taskLabels]);
            setIsAll(true);
        } else if (command == "not completed") {
            tasksFilteredTemp = new Array();
            for (let i = 0; i < taskLabels.length; i++) {
                if (isPressed[i] == 0) {
                    tasksFilteredTemp.push(taskLabels[i]);
                }
            }
            setTasksFiltered([...tasksFilteredTemp]);
            setTasksSearched([...tasksFilteredTemp]);
            setIsAll(false);
        }
    };

    const updateSearch = (text) => {
        const updatedData = tasksFiltered.filter((item) => {
            const item_data = `${item.label.toUpperCase()})`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        setTasksSearched(updatedData);

        setSearch(text);
    };

    useEffect(() => {
        if (!dataUser || !dataUser.getUser) return;
        const lastAppOpenDate = new Date(dataUser.updatedAt);
        const currentDate = new Date();
        if (lastAppOpenDate.getDate() != currentDate.getDate()) {
            setIsPressed(new Array(taskLabels.length).fill(false));
        } else setIsPressed(dataUser.taskCompletionList);

      const userInput = {
        id: `${global.userId}`,
        name: dataUser.getUser.name,
        profilePicture: dataUser.getUser.profilePicture,
        taskCompletionList: isPressed
      }

      updateUser({ variables: { input: userInput } })
    }, [dataUser])

    useEffect(() => {
      if(!dataUser || !dataUser.getUser) return
      const userInput = {
        id: `${global.userId}`,
        name: dataUser.getUser.name,
        profilePicture: dataUser.getUser.profilePicture,
        taskCompletionList: isPressed
      }

        updateUser({ variables: { input: userInput } });
    }, [isPressed]);

    const isFocused = useIsFocused();
    useEffect(() => {
        if (!dataUser || !dataUser.getUser) return;
        if (isFocused) {
            refetch();
            setIsPressed(dataUser.getUser.taskCompletionList);
            console.log("is pressed", isPressed);
        }
    }, [isFocused]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={[styles.header, { color: colors.text }]}>
                    HOME
                </Text>
            </View>

            <View style={styles.searchContainer}>
                <SearchBar
                    placeholder="Search"
                    onChangeText={updateSearch}
                    containerStyle={{
                        backgroundColor: "#101214",
                        borderBottomColor: "transparent",
                        borderTopColor: "transparent",
                    }}
                    inputContainerStyle={styles.searchBar}
                    value={search}
                    round={true}
                />
            </View>

            {/* Filter Buttons */}
            <View style={styles.filterContainer}>
                <TouchableOpacity
                    onPress={() => {
                        handleFilter("all");
                    }}
                    style={[
                        styles.allButton,
                        { backgroundColor: isAll ? "#CFB87B" : "#1A1A1A" },
                    ]}>
                    <Text style={{ color: "white", fontSize: 16 }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleFilter("not completed")}
                    style={[
                        styles.notCompletedButton,
                        { backgroundColor: isAll ? "#1A1A1A" : "#CFB87B" },
                    ]}>
                    <Text style={{ color: "white", fontSize: 16 }}>
                        Not Completed
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Task List */}
            <View style={styles.tasks}>
                {taskLabels.map((item, index) => (
                    <View key={index}>
                        {tasksSearched
                            .map((item) => item.label)
                            .includes(item.label) && (
                            <View
                                style={
                                    isPressed[index] && isAll
                                        ? styles.taskButtonPressed
                                        : styles.taskButton
                                }
                                key={index}>
                                <TouchableOpacity
                                    onPress={() =>
                                        isPressed[index] == true
                                            ? null
                                            : handlePress(item, index)
                                    }
                                    style={styles.taskButtonContents}>
                                    <View
                                        style={[
                                            styles.brainContainer,
                                            { backgroundColor: item.iconColor },
                                        ]}>
                                        {item.iconType == "brain" ? (
                                            <FontAwesome5
                                                name="brain"
                                                size={24}
                                                color={"white"}
                                            />
                                        ) : (
                                            <MaterialCommunityIcons
                                                name="weight-lifter"
                                                size={24}
                                                color="white"
                                            />
                                        )}
                                    </View>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text
                                            style={[
                                                styles.buttonText,
                                                { color: colors.text },
                                            ]}>
                                            {item.label}
                                        </Text>
                                    </View>
                                    {!isPressed[index] || !isAll ? (
                                        <View style={styles.cardArrowContainer}>
                                            <MaterialIcons
                                                name="keyboard-arrow-right"
                                                size={24}
                                                color="white"
                                            />
                                        </View>
                                    ) : (
                                        <View style={styles.cardArrowContainer}>
                                            <AntDesign
                                                name="check"
                                                size={24}
                                                color="green"
                                            />
                                        </View>
                                    )}
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },

    headerContainer: {
        paddingLeft: 20,
        justifyContent: "center",
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 20
    },

    tasks: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    taskButton: {
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#4c4c4c",
        height: 70,
        width: 350,
        borderRadius: 20,
        marginVertical: 10,
    },
    taskButtonPressed: {
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#4c4c4c",
        height: 70,
        width: 350,
        borderRadius: 20,
        marginVertical: 10,
        borderColor: "green",
        borderWidth: 1.5,
    },
    buttonText: {
        marginLeft: 15,
        fontSize: 16,
        textAlign: "center",
    },
    searchBar: {
        backgroundColor: "#4c4c4c",
        textAlign: "left",
        justifyContent: "center",
        borderRadius: 15,
        width: "95%",
        height: 50,
    },
    searchContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#101214",
    },
    filterContainer: {
        paddingLeft: 20,
        textAlign: "left",
        height: 40,
        width: "90%",
        flexDirection: "row",
        marginBottom: 20,
    },
    allButton: {
        backgroundColor: "#CFB87B",
        height: "100%",
        width: 75,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    notCompletedButton: {
        backgroundColor: "#1A1A1A",
        height: "100%",
        width: 150,
        marginLeft: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    plusButtonContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    taskButtonContents: {
        flexDirection: "row",
    },
    brainContainer: {
        height: 40,
        width: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20,
    },
    searchText: {
        marginLeft: 10,
    },
    cardArrowContainer: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
    },
    achievementCard: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
