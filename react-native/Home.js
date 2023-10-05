import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useQuery, gql, useMutation } from "@apollo/client";
import * as mutations from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

export default function Home({ navigation }) {
    const rows = [
        {
            "Exercise:": "1) Seated hamstring curl",
            "Sets:": 4,
            "Reps:": "10-15",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:": "Hamstring (Curl)",
            Workout: "Full Body A",
            Weeks: "1-2",
        },
        {
            "Exercise:": "2) Barbell Back Squat",
            "Sets:": 3,
            "Reps:": "6-8",
            RIR: "2 to 3",
            "Rest:": "2 min",
            "Exercise Category:": "Quads / Glutes (Squat)",
            Workout: "Full Body A",
            Weeks: "1-2",
        },
        {
            "Exercise:": "3a) single arm Db row",
            "Sets:": 3,
            "Reps:": "8-12",
            RIR: "2 to 3",
            "Rest:": "2 min",
            "Exercise Category:": "Back (Row)",
            Workout: "Full Body A",
            Weeks: "1-2",
        },
        {
            "Exercise:": "3b) rear delt DB fly",
            "Sets:": 3,
            "Reps:": "10-15",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:": "Shoulder (Rear Delt)",
            Workout: "Full Body A",
            Weeks: "1-2",
        },
        {
            "Exercise:": "4A) Tricep Rope Pushdown",
            "Sets:": 4,
            "Reps:": "10-15",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:": "Tricep",
            Workout: "Full Body A",
            Weeks: "1-2",
        },
        {
            "Exercise:": "4B) Rope Cable Curl",
            "Sets:": 4,
            "Reps:": "10-15",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:": "Bicep",
            Workout: "Full Body A",
            Weeks: "1-2",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "1) High incline Neutral Grip Press",
            "Sets:": 4,
            "Reps:": "8-12",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:":
                "Shoulder, Chest (Shoulder Press) (Chest Press)",
            Workout: "Full Body B",
            Weeks: "1-2",
        },
        {
            "Exercise:": "2) Wide Grip Lat Pulldown",
            "Sets:": 4,
            "Reps:": "8-12",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:": "Back (Lats)",
            Workout: "Full Body B",
            Weeks: "1-2",
        },
        {
            "Exercise:": "3) Wide Stance Leg Press",
            "Sets:": 3,
            "Reps:": "6-8",
            RIR: "2 to 3",
            "Rest:": "2 min",
            "Exercise Category:": "Glutes / Quads (Leg Press)",
            Workout: "Full Body B",
            Weeks: "1-2",
        },
        {
            "Exercise:": "4A) Adductor Machine",
            "Sets:": 3,
            "Reps:": "10-15",
            RIR: "2 to 3",
            "Rest:": "2 min",
            "Exercise Category:": "Adductor",
            Workout: "Full Body B",
            Weeks: "1-2",
        },
        {
            "Exercise:": "4B) Abductor Machine",
            "Sets:": 3,
            "Reps:": "10-15",
            RIR: "2 to 3",
            "Rest:": "2 min",
            "Exercise Category:": "Abductor",
            Workout: "Full Body B",
            Weeks: "1-2",
        },
        {
            "Exercise:": "5) Seated Calf Raise",
            "Sets:": 4,
            "Reps:": "10-15",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:": "Calf",
            Workout: "Full Body B",
            Weeks: "1-2",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "Full Body B",
            Weeks: "1-2",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "1) Barbell RDL",
            "Sets:": 3,
            "Reps:": "6-8",
            RIR: "2 to 3",
            "Rest:": "2 min",
            "Exercise Category:": "Hamstring / Glutes / Back (RDL)",
            Workout: "Full Body C",
            Weeks: "1-2",
        },
        {
            "Exercise:": "2) Lying Hamstring Curl",
            "Sets:": 4,
            "Reps:": "10-15",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:": "Hamstring (Curl)",
            Workout: "Full Body C",
            Weeks: "1-2",
        },
        {
            "Exercise:": "3) Single arm cable lateral raise",
            "Sets:": 4,
            "Reps:": "10-15",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:": "Medial Delt (Shoulder lateral)",
            Workout: "Full Body C",
            Weeks: "1-2",
        },
        {
            "Exercise:": "4) Push ups (can go from knees)",
            "Sets:": 3,
            "Reps:": "10-15",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:": "Chest (Chest Press)",
            Workout: "Full Body C",
            Weeks: "1-2",
        },
        {
            "Exercise:": "5) Close Grip lat pulldown",
            "Sets:": 4,
            "Reps:": "8-12",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:": "Back (Lats)",
            Workout: "Full Body C",
            Weeks: "1-2",
        },
        {
            "Exercise:": "6) Weighted Crunches",
            "Sets:": 4,
            "Reps:": "10-15",
            RIR: "1 to 2",
            "Rest:": "2 min",
            "Exercise Category:": "Abs (upper abs)",
            Workout: "Full Body C",
            Weeks: "1-2",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "1) Seated hamstring curl",
            "Sets:": 3,
            "Reps:": "10-15",
            RIR: "0 to 1",
            "Rest:": "2 min",
            "Exercise Category:": "Hamstring (Curl)",
            Workout: "Full Body A",
            Weeks: "3-4",
        },
        {
            "Exercise:": "2) Barbell Back Squat",
            "Sets:": 2,
            "Reps:": "6-8",
            RIR: "1 to 2",
            "Rest:": "3 min",
            "Exercise Category:": "Quads / Glutes (Squat)",
            Workout: "Full Body A",
            Weeks: "3-4",
        },
        {
            "Exercise:": "3a) single arm Db row",
            "Sets:": 2,
            "Reps:": "8-12",
            RIR: "1 to 2",
            "Rest:": "3 min",
            "Exercise Category:": "Back (Row)",
            Workout: "Full Body A",
            Weeks: "3-4",
        },
        {
            "Exercise:": "3b) rear delt DB fly",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: "0 to 1",
            "Rest:": "3 min",
            "Exercise Category:": "Shoulder (Rear Delt)",
            Workout: "Full Body A",
            Weeks: "3-4",
        },
        {
            "Exercise:": "4A) Tricep Rope Pushdown",
            "Sets:": 3,
            "Reps:": "10-15",
            RIR: "0 to 1",
            "Rest:": "3 min",
            "Exercise Category:": "Tricep",
            Workout: "Full Body A",
            Weeks: "3-4",
        },
        {
            "Exercise:": "4B) Rope Cable Curl",
            "Sets:": 3,
            "Reps:": "10-15",
            RIR: "0 to 1",
            "Rest:": "2 min",
            "Exercise Category:": "Bicep",
            Workout: "Full Body A",
            Weeks: "3-4",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "1) High incline Neutral Grip Press",
            "Sets:": 3,
            "Reps:": "8-12",
            RIR: "0 to 1",
            "Rest:": "2 min",
            "Exercise Category:":
                "Shoulder, Chest (Shoulder Press) (Chest Press)",
            Workout: "Full Body B",
            Weeks: "3-4",
        },
        {
            "Exercise:": "2) Wide Grip Lat Pulldown",
            "Sets:": 3,
            "Reps:": "8-12",
            RIR: "0 to 1",
            "Rest:": "2 min",
            "Exercise Category:": "Back (Lats)",
            Workout: "Full Body B",
            Weeks: "3-4",
        },
        {
            "Exercise:": "3) Wide Stance Leg Press",
            "Sets:": 2,
            "Reps:": "6-8",
            RIR: "1 to 2",
            "Rest:": "3 min",
            "Exercise Category:": "Glutes / Quads (Leg Press)",
            Workout: "Full Body B",
            Weeks: "3-4",
        },
        {
            "Exercise:": "4A) Adductor Machine",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: "1 to 2",
            "Rest:": "3 min",
            "Exercise Category:": "Adductor",
            Workout: "Full Body B",
            Weeks: "3-4",
        },
        {
            "Exercise:": "4B) Abductor Machine",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: "1 to 2",
            "Rest:": "3 min",
            "Exercise Category:": "Abductor",
            Workout: "Full Body B",
            Weeks: "3-4",
        },
        {
            "Exercise:": "5) Seated Calf Raise",
            "Sets:": 3,
            "Reps:": "10-15",
            RIR: "0 to 1",
            "Rest:": "2 min",
            "Exercise Category:": "Calf",
            Workout: "Full Body B",
            Weeks: "3-4",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "Full Body B",
            Weeks: "3-4",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "1) Barbell RDL",
            "Sets:": 2,
            "Reps:": "6-8",
            RIR: "1 to 2",
            "Rest:": "3 min",
            "Exercise Category:": "Hamstring / Glutes / Back (RDL)",
            Workout: "Full Body C",
            Weeks: "3-4",
        },
        {
            "Exercise:": "2) Lying Hamstring Curl",
            "Sets:": 3,
            "Reps:": "10-15",
            RIR: "0 to 1",
            "Rest:": "2 min",
            "Exercise Category:": "Hamstring (Curl)",
            Workout: "Full Body C",
            Weeks: "3-4",
        },
        {
            "Exercise:": "3) Single arm cable lateral raise",
            "Sets:": 3,
            "Reps:": "10-15",
            RIR: "0 to 1",
            "Rest:": "2 min",
            "Exercise Category:": "Medial Delt (Shoulder lateral)",
            Workout: "Full Body C",
            Weeks: "3-4",
        },
        {
            "Exercise:": "4) Push ups (can go from knees)",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: "0 to 1",
            "Rest:": "3 min",
            "Exercise Category:": "Chest (Chest Press)",
            Workout: "Full Body C",
            Weeks: "3-4",
        },
        {
            "Exercise:": "5) Close Grip lat pulldown",
            "Sets:": 3,
            "Reps:": "8-12",
            RIR: "0 to 1",
            "Rest:": "2 min",
            "Exercise Category:": "Back (Lats)",
            Workout: "Full Body C",
            Weeks: "3-4",
        },
        {
            "Exercise:": "6) Weighted Crunches",
            "Sets:": 3,
            "Reps:": "10-15",
            RIR: "0 to 1",
            "Rest:": "2 min",
            "Exercise Category:": "Abs (upper abs)",
            Workout: "Full Body C",
            Weeks: "3-4",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "1) Seated hamstring curl",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: 0,
            "Rest:": "2 min",
            "Exercise Category:": "Hamstring (Curl)",
            Workout: "Full Body A",
            Weeks: "5-7",
        },
        {
            "Exercise:": "2) Barbell Back Squat",
            "Sets:": 1,
            "Reps:": "6-8",
            RIR: 1,
            "Rest:": "3 min",
            "Exercise Category:": "Quads / Glutes (Squat)",
            Workout: "Full Body A",
            Weeks: "5-7",
        },
        {
            "Exercise:": "3a) single arm Db row",
            "Sets:": 1,
            "Reps:": "8-12",
            RIR: 1,
            "Rest:": "3 min",
            "Exercise Category:": "Back (Row)",
            Workout: "Full Body A",
            Weeks: "5-7",
        },
        {
            "Exercise:": "3b) rear delt DB fly",
            "Sets:": 1,
            "Reps:": "10-15",
            RIR: 0,
            "Rest:": "3 min",
            "Exercise Category:": "Shoulder (Rear Delt)",
            Workout: "Full Body A",
            Weeks: "5-7",
        },
        {
            "Exercise:": "4A) Tricep Rope Pushdown",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: 0,
            "Rest:": "3 min",
            "Exercise Category:": "Tricep",
            Workout: "Full Body A",
            Weeks: "5-7",
        },
        {
            "Exercise:": "4B) Rope Cable Curl",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: 0,
            "Rest:": "2 min",
            "Exercise Category:": "Bicep",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "Full Body B",
            Weeks: "5-7",
        },
        {
            "Exercise:": "1) High incline Neutral Grip Press",
            "Sets:": 2,
            "Reps:": "8-12",
            RIR: 0,
            "Rest:": "2 min",
            "Exercise Category:":
                "Shoulder, Chest (Shoulder Press) (Chest Press)",
            Workout: "Full Body B",
            Weeks: "5-7",
        },
        {
            "Exercise:": "2) Wide Grip Lat Pulldown",
            "Sets:": 2,
            "Reps:": "8-12",
            RIR: 0,
            "Rest:": "2 min",
            "Exercise Category:": "Back (Lats)",
            Workout: "Full Body B",
            Weeks: "5-7",
        },
        {
            "Exercise:": "3) Wide Stance Leg Press",
            "Sets:": 1,
            "Reps:": "6-8",
            RIR: 1,
            "Rest:": "3 min",
            "Exercise Category:": "Glutes / Quads (Leg Press)",
            Workout: "Full Body B",
            Weeks: "5-7",
        },
        {
            "Exercise:": "4A) Adductor Machine",
            "Sets:": 1,
            "Reps:": "10-15",
            RIR: 0,
            "Rest:": "3 min",
            "Exercise Category:": "Adductor",
            Workout: "Full Body B",
            Weeks: "5-7",
        },
        {
            "Exercise:": "4B) Abductor Machine",
            "Sets:": 1,
            "Reps:": "10-15",
            RIR: 0,
            "Rest:": "3 min",
            "Exercise Category:": "Abductor",
            Workout: "Full Body B",
            Weeks: "5-7",
        },
        {
            "Exercise:": "5) Seated Calf Raise",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: 0,
            "Rest:": "2 min",
            "Exercise Category:": "Calf",
            Workout: "Full Body B",
            Weeks: "5-7",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "Full Body C",
            Weeks: "5-7",
        },
        {
            "Exercise:": "1) Barbell RDL",
            "Sets:": 1,
            "Reps:": "6-8",
            RIR: 1,
            "Rest:": "3 min",
            "Exercise Category:": "Hamstring / Glutes / Back (RDL)",
            Workout: "Full Body C",
            Weeks: "5-7",
        },
        {
            "Exercise:": "2) Lying Hamstring Curl",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: 0,
            "Rest:": "2 min",
            "Exercise Category:": "Hamstring (Curl)",
            Workout: "Full Body C",
            Weeks: "5-7",
        },
        {
            "Exercise:": "3) Single arm cable lateral raise",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: 0,
            "Rest:": "2 min",
            "Exercise Category:": "Medial Delt (Shoulder lateral)",
            Workout: "Full Body C",
            Weeks: "5-7",
        },
        {
            "Exercise:": "4) Push ups (can go from knees)",
            "Sets:": 1,
            "Reps:": "10-15",
            RIR: 0,
            "Rest:": "3 min",
            "Exercise Category:": "Chest (Chest Press)",
            Workout: "Full Body C",
            Weeks: "5-7",
        },
        {
            "Exercise:": "5) Close Grip lat pulldown",
            "Sets:": 2,
            "Reps:": "8-12",
            RIR: 0,
            "Rest:": "2 min",
            "Exercise Category:": "Back (Lats)",
            Workout: "Full Body C",
            Weeks: "5-7",
        },
        {
            "Exercise:": "6) Weighted Crunches",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: 0,
            "Rest:": "2 min",
            "Exercise Category:": "Abs (upper abs)",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "1) Seated hamstring curl",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: "4 to 6",
            "Rest:": "2 min",
            "Exercise Category:": "Hamstring (Curl)",
            Workout: "Full Body A",
            Weeks: 8,
        },
        {
            "Exercise:": "2) Barbell Back Squat",
            "Sets:": 1,
            "Reps:": "6-8",
            RIR: "4 to 6",
            "Rest:": "3 min",
            "Exercise Category:": "Quads / Glutes (Squat)",
            Workout: "Full Body A",
            Weeks: 8,
        },
        {
            "Exercise:": "3a) single arm Db row",
            "Sets:": 1,
            "Reps:": "8-12",
            RIR: "4 to 6",
            "Rest:": "3 min",
            "Exercise Category:": "Back (Row)",
            Workout: "Full Body A",
            Weeks: 8,
        },
        {
            "Exercise:": "3b) rear delt DB fly",
            "Sets:": 1,
            "Reps:": "10-15",
            RIR: "4 to 6",
            "Rest:": "3 min",
            "Exercise Category:": "Shoulder (Rear Delt)",
            Workout: "Full Body A",
            Weeks: 8,
        },
        {
            "Exercise:": "4A) Tricep Rope Pushdown",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: "4 to 6",
            "Rest:": "3 min",
            "Exercise Category:": "Tricep",
            Workout: "Full Body A",
            Weeks: 8,
        },
        {
            "Exercise:": "4B) Rope Cable Curl",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: "4 to 6",
            "Rest:": "2 min",
            "Exercise Category:": "Bicep",
            Workout: "Full Body A",
            Weeks: 8,
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "1) High incline Neutral Grip Press",
            "Sets:": 2,
            "Reps:": "8-12",
            RIR: "4 to 6",
            "Rest:": "2 min",
            "Exercise Category:":
                "Shoulder, Chest (Shoulder Press) (Chest Press)",
            Workout: "Full Body B",
            Weeks: 8,
        },
        {
            "Exercise:": "2) Wide Grip Lat Pulldown",
            "Sets:": 2,
            "Reps:": "8-12",
            RIR: "4 to 6",
            "Rest:": "2 min",
            "Exercise Category:": "Back (Lats)",
            Workout: "Full Body B",
            Weeks: 8,
        },
        {
            "Exercise:": "3) Wide Stance Leg Press",
            "Sets:": 1,
            "Reps:": "6-8",
            RIR: "4 to 6",
            "Rest:": "3 min",
            "Exercise Category:": "Glutes / Quads (Leg Press)",
            Workout: "Full Body B",
            Weeks: 8,
        },
        {
            "Exercise:": "4A) Adductor Machine",
            "Sets:": 1,
            "Reps:": "10-15",
            RIR: "4 to 6",
            "Rest:": "3 min",
            "Exercise Category:": "Adductor",
            Workout: "Full Body B",
            Weeks: 8,
        },
        {
            "Exercise:": "4B) Abductor Machine",
            "Sets:": 1,
            "Reps:": "10-15",
            RIR: "4 to 6",
            "Rest:": "3 min",
            "Exercise Category:": "Abductor",
            Workout: "Full Body B",
            Weeks: 8,
        },
        {
            "Exercise:": "5) Seated Calf Raise",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: "4 to 6",
            "Rest:": "2 min",
            "Exercise Category:": "Calf",
            Workout: "Full Body B",
            Weeks: 8,
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "Full Body B",
            Weeks: 8,
        },
        {
            "Exercise:": "",
            "Sets:": "",
            "Reps:": "",
            RIR: "",
            "Rest:": "",
            "Exercise Category:": "",
            Workout: "",
            Weeks: "",
        },
        {
            "Exercise:": "1) Barbell RDL",
            "Sets:": 1,
            "Reps:": "6-8",
            RIR: "4 to 6",
            "Rest:": "3 min",
            "Exercise Category:": "Hamstring / Glutes / Back (RDL)",
            Workout: "Full Body C",
            Weeks: 8,
        },
        {
            "Exercise:": "2) Lying Hamstring Curl",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: "4 to 6",
            "Rest:": "2 min",
            "Exercise Category:": "Hamstring (Curl)",
            Workout: "Full Body C",
            Weeks: 8,
        },
        {
            "Exercise:": "3) Single arm cable lateral raise",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: "4 to 6",
            "Rest:": "2 min",
            "Exercise Category:": "Medial Delt (Shoulder lateral)",
            Workout: "Full Body C",
            Weeks: 8,
        },
        {
            "Exercise:": "4) Push ups (can go from knees)",
            "Sets:": 1,
            "Reps:": "10-15",
            RIR: "4 to 6",
            "Rest:": "3 min",
            "Exercise Category:": "Chest (Chest Press)",
            Workout: "Full Body C",
            Weeks: 8,
        },
        {
            "Exercise:": "5) Close Grip lat pulldown",
            "Sets:": 2,
            "Reps:": "8-12",
            RIR: "4 to 6",
            "Rest:": "2 min",
            "Exercise Category:": "Back (Lats)",
            Workout: "Full Body C",
            Weeks: 8,
        },
        {
            "Exercise:": "6) Weighted Crunches",
            "Sets:": 2,
            "Reps:": "10-15",
            RIR: "4 to 6",
            "Rest:": "2 min",
            "Exercise Category:": "Abs (upper abs)",
            Workout: "Full Body C",
            Weeks: 8,
        },
    ];

    /*
  Create program 
  id
  author
  image
  title
  introVideo

  Create program weeks
  ID
  weekNumber
  workoutLabels
  programWeeksId

  Create workouts
  id
  weekNumber
  exerciseLabels
  programWeekWorkoutsId

  Create exercises
  id
  name
  sets
  RIR
  restMinutes
  repRange
  exerciseNum
  workoutExercisesId
  */
    /*
  const titleToNameMap = { "womensintermediate" : "Women Intermediate",
                          "menslvl3PPL": "Men Level 3 PPLUL",
                          "menslvl2UL": "Men Level 2 UL",
                        "mensfullbody": "Men Full Body",
                      "mensPPL": "Men PPL"}
                      */

    /*

  const [createProgramWeek, { data : dataPw, loading : loadingPw, error: errorPw }] = useMutation(gql`${mutations.createProgramWeek}`);
  const [createProgram, { data : dataP, loading : loadingP, error: errorP }] = useMutation(gql`${mutations.createProgram}`);
  const [createWorkout, { data : dataW, loading : loadingW, error: errorW }] = useMutation(gql`${mutations.createWorkout}`);
  const [createExercise, { data : dataE, loading : loadingE, error: errorE }] = useMutation(gql`${mutations.createExercise}`);


  const addWorkout = () => {
    //Create program 

    const title = "womensbeginner"
    
    const programInput = {
      id: title,
      author: "Caleb Saks",
      image: "null",
      title: title,
      introVideo: "null",
    }

    createProgram({ variables : {input : programInput} })
    

    //Create program weeks
    
    let weeksToWorkoutLabels = {}
    rows.forEach(function(row){
      let weeks = row["Weeks"].length > 1 ? row["Weeks"].split('-') : [row["Weeks"]]
      if(weeks.length == 2){
        let weeksCopy = []
        for(let i = parseInt(weeks[0]); i <= parseInt(weeks[1]); i++){
          weeksCopy.push(i)
        }
        weeks = weeksCopy
      }
      if(weeks){
        weeks.forEach(function(week){
          if(weeksToWorkoutLabels[week]){
            weeksToWorkoutLabels[week].add(row["Workout"])
          }
          else{
            weeksToWorkoutLabels[week] = new Set()
            weeksToWorkoutLabels[week].add(row["Workout"])
          }
        })
      }
    })


    for(const key in weeksToWorkoutLabels){
      const value = weeksToWorkoutLabels[key]
      if(!key) continue
      const weekInput = {
        id: `${title}::${key}`,
        weekNumber: key,
        workoutLabels: Array.from(value),
        programWeeksId: title,
      }
      createProgramWeek({ variables : {input : weekInput} })
    }
    
    //Create Workouts


    let workoutsToExerciseLabels = {}

    rows.forEach(function(row){
      let weeks = row["Weeks"].length > 1 ? row["Weeks"].split('-') : [row["Weeks"]]
      if(weeks.length == 2){
        let weeksCopy = []
        for(let i = parseInt(weeks[0]); i <= parseInt(weeks[1]); i++){
          weeksCopy.push(i)
        }
        weeks = weeksCopy
      }
      weeks.forEach(function(week){
        const id = `${title}::${week}::${row["Workout"]}`
        if(workoutsToExerciseLabels[id]){
          workoutsToExerciseLabels[id].labels.add(row["Exercise:"].substring(3))
          workoutsToExerciseLabels[id].workout = row["Workout"]
          workoutsToExerciseLabels[id].programWeekWorkoutsId = `${title}::${week}`
        }
        else{
          workoutsToExerciseLabels[id] = {}
          workoutsToExerciseLabels[id].labels = new Set()
          workoutsToExerciseLabels[id].labels.add(row["Exercise:"].substring(3))
          workoutsToExerciseLabels[id].workout = row["Workout"]
          workoutsToExerciseLabels[id].programWeekWorkoutsId = `${title}::${week}`
        }
      })
    })

    for(const key in workoutsToExerciseLabels){
      const value = workoutsToExerciseLabels[key]
      if(!key) continue
      const workoutInput = {
        id: key,
        workoutNumber: -1,
        title: value.workout,
        status: "incomplete",
        exerciseLabels: Array.from(value.labels),
        programWeekWorkoutsId: value.programWeekWorkoutsId
      }
      createWorkout({ variables : {input : workoutInput} })
    }

    //Create exercises
    rows.forEach(function(row){
      let weeks = row["Weeks"].length > 1 ? row["Weeks"].split('-') : [row["Weeks"]]
      if(weeks.length == 2){
        let weeksCopy = []
        for(let i = parseInt(weeks[0]); i <= parseInt(weeks[1]); i++){
          weeksCopy.push(i)
        }
        weeks = weeksCopy
      }
      weeks.forEach(function(week){
        const id = `${title}::${week}::${row["Workout"]}::${row["Exercise:"].substring(3)}`
        const exerciseInput = {
          id: id,
          name: row["Exercise:"],
          sets: parseInt(row["Sets:"]),
          RIR: row["RIR"],
          restMinutes: parseFloat(row["Rest:"].substring(0, 1)),
          repRange: row["Reps:"],
          exerciseNum: -1,
          workoutExercisesId: `${title}::${week}::${row["Workout"]}`
        }
        createExercise({ variables : {input : exerciseInput} })
      })
    })
  }

  */

    const [mutateFunction, { data, loading, error }] = useMutation(
        gql`
            ${mutations.createDailyTask}
        `
    );
    const { data2, loading2, error2 } = useQuery(
        gql`
            ${queries.getDailyTask}
        `
    );

    const input = {
        label: "TestLabel",
        screen: "TestScreen",
        icon: "TestIcon",
    };

    const colors = useTheme().colors;

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
    const [tasksFiltered, setTasksFiltered] = useState(taskLabels);
    const [tasksSearched, setTasksSearched] = useState(taskLabels);
    const [isAll, setIsAll] = useState(true);
    const [search, setSearch] = useState("");

    const handlePress = (item, index) => {
        mutateFunction({ variables: { input: input } });
        isPressed[index] = !isPressed[index];
        setIsPressed([...isPressed]);
        navigation.navigate(item.screen);
    };

    const handleFilter = (command) => {
        if (command == "all") {
            setTasksFiltered([...taskLabels]);
            setTasksSearched([...taskLabels]);
            setIsAll(true);
        } else if (command == "not completed") {
            tasksFilteredTemp = new Array();
            for (let i = 0; i < taskLabels.length; i++) {
                if (isPressed[i] == false) {
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
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={[styles.header, { color: colors.text }]}>
                    Home
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
                        addWorkout();
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

            {/* Plus Button */}
            {/*
    <View style={styles.plusButtonContainer}>
      <AntDesign name="pluscircle" size={35} color="#CFB87B" />
    </View>
        */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },

    headerContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 40,
        fontWeight: "bold",
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
        fontSize: 18,
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
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: "#101214",
    },
    filterContainer: {
        paddingLeft: 20,
        textAlign: "left",
        height: 40,
        width: "90%",
        flexDirection: "row",
        marginBottom: 10,
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
});
