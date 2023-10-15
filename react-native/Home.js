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
  const titles = ["womensintermediate", "menslvl3PPL", "menslvl2UL", "mensfullbody", "mensPPL", "womensbeginner", "womensintermediateglute"]
    const rowsMap ={}
    rowsMap["menslvl2UL"] = [
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "90 sec",
        "Exercise Category": "Calves",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "90 sec",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Single arm cable pulldown",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Lunge)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Upper Back Row (Chest Supported)",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Single Arm Rear Delt Cable Fly",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6. Incline Db Curl",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Lying Hamstring Curl",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "Lower2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Calf Raise Toe Press",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "90 sec",
        "Exercise Category": "Calves",
        "Workout": "Lower2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "90 sec",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Upper2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Seated Cable Row",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Upper2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Incline DB Bench",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Chest Fly Machine",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Upper2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Single arm cable lateral",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Upper2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6. Tricep Rope Pushdow",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Triceps",
        "Workout": "Upper2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Single arm cable pulldown",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Lunge)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Upper Back Row (Chest Supported)",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Single Arm Rear Delt Cable Fly",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6. Incline Db Curl",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Lying Hamstring Curl",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "Lower2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Calf Raise Toe Press",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Upper2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Seated Cable Row",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Upper2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Incline DB Bench",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Chest Fly Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Upper2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Single arm cable lateral",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Upper2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6. Tricep Rope Pushdow",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Triceps",
        "Workout": "Upper2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 1,
        "Rest:": "5 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 1,
        "Reps:": "8 to 12 (rest pause set)",
        "RIR": "0 to 1",
        "Rest:": "5 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "4 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 1,
        "Rest:": "4 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 2,
        "Reps:": "8 to 12 (rest pause set)",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Single arm cable pulldown",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Lunge)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Upper Back Row (Chest Supported)",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 1,
        "Rest:": "4 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Single Arm Rear Delt Cable Fly",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6. Incline Db Curl",
        "Sets:": 2,
        "Reps:": "10 to 15 (double drop set)",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Lying Hamstring Curl",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 1,
        "Rest:": "4 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "Lower2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 1,
        "Reps:": "6 to 8 (rest pause set)",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Calf Raise Toe Press",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Upper2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Seated Cable Row",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 0,
        "Rest:": "4 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Upper2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Incline DB Bench",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "0 to 1",
        "Rest:": "4 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Chest Fly Machine",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Upper2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Single arm cable lateral",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Upper2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6. Tricep Rope Pushdow",
        "Sets:": 2,
        "Reps:": "10 to 15 (double drop set)",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Triceps",
        "Workout": "Upper2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "4 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Single arm cable pulldown",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Lunge)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Upper Back Row (Chest Supported)",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "4 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Single Arm Rear Delt Cable Fly",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "6. Incline Db Curl",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Lying Hamstring Curl",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower2",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "4 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "Lower2",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower2",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower2",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower2",
        "Weeks": 8
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower2",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Upper2",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Seated Cable Row",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Upper2",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Incline DB Bench",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper2",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Chest Fly Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Upper2",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Single arm cable lateral",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Upper2",
        "Weeks": 8
      },
      {
        "Exercise:": "6. Tricep Rope Pushdow",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Triceps",
        "Workout": "Upper2",
        "Weeks": 8
      }
    ]
    rowsMap["mensfullbody"] = [
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Incline DB Bench Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Wide grip lat pulldown",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Back (Pull Down)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Single arm cable lateral raise",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Lateral Deltoid)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6a. Incline DB curl",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "0 min",
        "Exercise Category": "Bicep",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6b. DB Skull Crusher",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. DB Split Squat",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Lunge)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Upper Back Row (Chest Supported)",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Single Arm Rear Delt Cable Fly",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6a. Cable Crunch",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "0 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6b. Seated Calf Raises",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Cable High Row",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "90 sec each arm",
        "Exercise Category": "Back (Pull Down)",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Seal Row",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. DB Shoulder Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Press)",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Peck Deck Fly",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6a. Tricep Rope Pushdown",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "0 min",
        "Exercise Category": "Tricep",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6b. Hammer curl",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Bicep",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Incline DB Bench Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "4 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Wide grip lat pulldown",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Back (Pull Down)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Single arm cable lateral raise",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Shoulder (Lateral Deltoid)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6a. Incline DB curl",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "0 min",
        "Exercise Category": "Bicep",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6b. DB Skull Crusher",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "4 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "4 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. DB Split Squat",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Lunge)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Upper Back Row (Chest Supported)",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "4 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Single Arm Rear Delt Cable Fly",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6a. Cable Crunch",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "0 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6b. Seated Calf Raises",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Cable High Row",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min each arm",
        "Exercise Category": "Back (Pull Down)",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Seal Row",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "4 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. DB Shoulder Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "4 min",
        "Exercise Category": "Shoulder (Press)",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Peck Deck Fly",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6a. Tricep Rope Pushdown",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "0 min",
        "Exercise Category": "Tricep",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6b. Hammer curl",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Bicep",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "8 to 12 (drop set)",
        "RIR": "0-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 1,
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Incline DB Bench Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 0,
        "Rest:": "4 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Wide grip lat pulldown",
        "Sets:": 2,
        "Reps:": "8 to 12 (drop set)",
        "RIR": "0-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Back (Pull Down)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Single arm cable lateral raise",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "0-Jan",
        "Rest:": "4 min",
        "Exercise Category": "Shoulder (Lateral Deltoid)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6a. Incline DB curl",
        "Sets:": 2,
        "Reps:": "8 to 12 (drop set)",
        "RIR": "0-Jan",
        "Rest:": "0 min",
        "Exercise Category": "Bicep",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6b. DB Skull Crusher",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 0,
        "Rest:": "4 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 1,
        "Reps:": "8 to 12 (rest pause set)",
        "RIR": 0,
        "Rest:": "4 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. DB Split Squat",
        "Sets:": 1,
        "Reps:": "8 to 12",
        "RIR": 1,
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Lunge)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Upper Back Row (Chest Supported)",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 0,
        "Rest:": "4 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Single Arm Rear Delt Cable Fly",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "0-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6a. Cable Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "0-Jan",
        "Rest:": "0 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6b. Seated Calf Raises",
        "Sets:": 2,
        "Reps:": "10 to 15 (drop set)",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Cable High Row",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "0-Jan",
        "Rest:": "2 min each arm",
        "Exercise Category": "Back (Pull Down)",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Seal Row",
        "Sets:": 1,
        "Reps:": "8 to 12 (rest pause set)",
        "RIR": "0-Jan",
        "Rest:": "4 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 1,
        "Reps:": "8 to 12 (rest pause set)",
        "RIR": 1,
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. DB Shoulder Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 0,
        "Rest:": "4 min",
        "Exercise Category": "Shoulder (Press)",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Peck Deck Fly",
        "Sets:": 2,
        "Reps:": "8 to 12 (drop set)",
        "RIR": "0-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6a. Tricep Rope Pushdown",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "0-Jan",
        "Rest:": "0 min",
        "Exercise Category": "Tricep",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6b. Hammer curl",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Bicep",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 1,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "3. DB Split Squat",
        "Sets:": 1,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Quads / Glutes (Lunge)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Upper Back Row (Chest Supported)",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Single Arm Rear Delt Cable Fly",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "6a. Cable Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "0 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "6b. Seated Calf Raises",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 1,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "3. DB Split Squat",
        "Sets:": 1,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Quads / Glutes (Lunge)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Upper Back Row (Chest Supported)",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Single Arm Rear Delt Cable Fly",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "6a. Cable Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "0 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "6b. Seated Calf Raises",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Cable High Row",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "90 sec each arm",
        "Exercise Category": "Back (Pull Down)",
        "Workout": "Full Body C",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Seal Row",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Full Body C",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 1,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Full Body C",
        "Weeks": 8
      },
      {
        "Exercise:": "4. DB Shoulder Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Press)",
        "Workout": "Full Body C",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Peck Deck Fly",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Full Body C",
        "Weeks": 8
      },
      {
        "Exercise:": "6a. Tricep Rope Pushdown",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "0 min",
        "Exercise Category": "Tricep",
        "Workout": "Full Body C",
        "Weeks": 8
      },
      {
        "Exercise:": "6b. Hammer curl",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Bicep",
        "Workout": "Full Body C",
        "Weeks": 8
      }
    ]
    rowsMap["menslvl3PPL"] = [
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "Lower A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "90 sec",
        "Exercise Category": "Calves",
        "Workout": "Lower A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "90 sec",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Chest Fly Machine",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Single Arm Cable Lateral",
        "Sets:": 4,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Cross Cable Tricep Pushdown",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Underhand High Row Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (High Row)",
        "Workout": "Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Chest Supported Upper Back Row",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Single Arm DB Row",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lats Row)",
        "Workout": "Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Cable Rear Delt",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Incline DB Curls",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Lying hamstring curl",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "Lower B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Calf Raise Toe Press",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "90 sec",
        "Exercise Category": "Calves",
        "Workout": "Lower B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "90 sec",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Incline DB Bench",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Seated Cable Row",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4.Dips",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Chest / Shoulder / Tricep (Lower Chest) (Front Delt) (Tricep Press)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Lateral Raises Facing Bench",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6. Single Arm DB Preacher Curl",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "Lower A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Chest Fly Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Single Arm Cable Lateral",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Cross Cable Tricep Pushdown",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Underhand High Row Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Back (High Row)",
        "Workout": "Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Chest Supported Upper Back Row",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Single Arm DB Row",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lats Row)",
        "Workout": "Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Cable Rear Delt",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Incline DB Curls",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "Lower B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Calf Raise Toe Press",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Seated Cable Row",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Incline DB Bench",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Chest Fly Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Single arm cable lateral",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6. Tricep Rope Pushdow",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Triceps",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 1,
        "Rest:": "5 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "Lower A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 1,
        "Reps:": "8 to 12 (rest pause set)",
        "RIR": "0 to 1",
        "Rest:": "5 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "4 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Chest Fly Machine",
        "Sets:": 1,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Single Arm Cable Lateral",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Cross Cable Tricep Pushdown",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Underhand High Row Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Back (High Row)",
        "Workout": "Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Chest Supported Upper Back Row",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Single Arm DB Row",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lats Row)",
        "Workout": "Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Cable Rear Delt",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Incline DB Curls",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 1,
        "Rest:": "4 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "Lower B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 1,
        "Reps:": "6 to 8 (rest pause set)",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Calf Raise Toe Press",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Seated Cable Row",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 0,
        "Rest:": "4 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Incline DB Bench",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "0 to 1",
        "Rest:": "4 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Chest Fly Machine",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Single arm cable lateral",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6. Tricep Rope Pushdow",
        "Sets:": 2,
        "Reps:": "10 to 15 (double drop set)",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Triceps",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower A",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "Lower A",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower A",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower A",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower A",
        "Weeks": 8
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower A",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Push",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Chest Fly Machine",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Single Arm Cable Lateral",
        "Sets:": 4,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Cross Cable Tricep Pushdown",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Underhand High Row Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (High Row)",
        "Workout": "Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Chest Supported Upper Back Row",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Single Arm DB Row",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lats Row)",
        "Workout": "Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Cable Rear Delt",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Incline DB Curls",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Lower B",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "4 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "Lower B",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "Lower B",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "Lower B",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Lower B",
        "Weeks": 8
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower B",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Seated Cable Row",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Incline DB Bench",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Chest Fly Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Single arm cable lateral",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "6. Tricep Rope Pushdow",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Triceps",
        "Workout": "Upper",
        "Weeks": 8
      }
    ]
    rowsMap["womensbeginner"] = [
      {
        "Exercise:": "1) Seated hamstring curl",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2) Barbell Back Squat",
        "Sets:": 3,
        "Reps:": "6-8",
        "RIR": "2 to 3",
        "Rest:": "2 min",
        "Exercise Category": "Quads / Glutes (Squat)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3a) single arm Db row",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2 to 3",
        "Rest:": "2 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3b) rear delt DB fly",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4A) Tricep Rope Pushdown",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4B) Rope Cable Curl",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Bicep",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) High incline Neutral Grip Press",
        "Sets:": 4,
        "Reps:": "8-12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder, Chest (Shoulder Press) (Chest Press)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2) Wide Grip Lat Pulldown",
        "Sets:": 4,
        "Reps:": "8-12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3) Wide Stance Leg Press",
        "Sets:": 3,
        "Reps:": "6-8",
        "RIR": "2 to 3",
        "Rest:": "2 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4A) Adductor Machine",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "2 to 3",
        "Rest:": "2 min",
        "Exercise Category": "Adductor",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4B) Abductor Machine",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "2 to 3",
        "Rest:": "2 min",
        "Exercise Category": "Abductor",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5) Seated Calf Raise",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Calf",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 3,
        "Reps:": "6-8",
        "RIR": "2 to 3",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring / Glutes / Back (RDL)",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2) Lying Hamstring Curl",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3) Single arm cable lateral raise",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Medial Delt (Shoulder lateral)",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4) Push ups (can go from knees)",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Chest (Chest Press)",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5) Close Grip lat pulldown",
        "Sets:": 4,
        "Reps:": "8-12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6) Weighted Crunches",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Abs (upper abs)",
        "Workout": "Full Body C",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Seated hamstring curl",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2) Barbell Back Squat",
        "Sets:": 2,
        "Reps:": "6-8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Squat)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3a) single arm Db row",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3b) rear delt DB fly",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4A) Tricep Rope Pushdown",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Tricep",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4B) Rope Cable Curl",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Bicep",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) High incline Neutral Grip Press",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder, Chest (Shoulder Press) (Chest Press)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2) Wide Grip Lat Pulldown",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3) Wide Stance Leg Press",
        "Sets:": 2,
        "Reps:": "6-8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4A) Adductor Machine",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Adductor",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4B) Abductor Machine",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Abductor",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5) Seated Calf Raise",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Calf",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 2,
        "Reps:": "6-8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring / Glutes / Back (RDL)",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2) Lying Hamstring Curl",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3) Single arm cable lateral raise",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Medial Delt (Shoulder lateral)",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4) Push ups (can go from knees)",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Chest Press)",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5) Close Grip lat pulldown",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6) Weighted Crunches",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Abs (upper abs)",
        "Workout": "Full Body C",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2) Barbell Back Squat",
        "Sets:": 1,
        "Reps:": "6-8",
        "RIR": 1,
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Squat)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3a) single arm Db row",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": 1,
        "Rest:": "3 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3b) rear delt DB fly",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4A) Tricep Rope Pushdown",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Tricep",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4B) Rope Cable Curl",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Bicep",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) High incline Neutral Grip Press",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Shoulder, Chest (Shoulder Press) (Chest Press)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2) Wide Grip Lat Pulldown",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3) Wide Stance Leg Press",
        "Sets:": 1,
        "Reps:": "6-8",
        "RIR": 1,
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4A) Adductor Machine",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Adductor",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4B) Abductor Machine",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Abductor",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5) Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Calf",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 1,
        "Reps:": "6-8",
        "RIR": 1,
        "Rest:": "3 min",
        "Exercise Category": "Hamstring / Glutes / Back (RDL)",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2) Lying Hamstring Curl",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3) Single arm cable lateral raise",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Medial Delt (Shoulder lateral)",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4) Push ups (can go from knees)",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Chest (Chest Press)",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5) Close Grip lat pulldown",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6) Weighted Crunches",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Abs (upper abs)",
        "Workout": "Full Body C",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "2) Barbell Back Squat",
        "Sets:": 1,
        "Reps:": "6-8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Squat)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "3a) single arm Db row",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "3b) rear delt DB fly",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "4A) Tricep Rope Pushdown",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Tricep",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "4B) Rope Cable Curl",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Bicep",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) High incline Neutral Grip Press",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder, Chest (Shoulder Press) (Chest Press)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "2) Wide Grip Lat Pulldown",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "3) Wide Stance Leg Press",
        "Sets:": 1,
        "Reps:": "6-8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "4A) Adductor Machine",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Adductor",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "4B) Abductor Machine",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Abductor",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "5) Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Calf",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 1,
        "Reps:": "6-8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring / Glutes / Back (RDL)",
        "Workout": "Full Body C",
        "Weeks": 8
      },
      {
        "Exercise:": "2) Lying Hamstring Curl",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "Full Body C",
        "Weeks": 8
      },
      {
        "Exercise:": "3) Single arm cable lateral raise",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Medial Delt (Shoulder lateral)",
        "Workout": "Full Body C",
        "Weeks": 8
      },
      {
        "Exercise:": "4) Push ups (can go from knees)",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Chest Press)",
        "Workout": "Full Body C",
        "Weeks": 8
      },
      {
        "Exercise:": "5) Close Grip lat pulldown",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body C",
        "Weeks": 8
      },
      {
        "Exercise:": "6) Weighted Crunches",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Abs (upper abs)",
        "Workout": "Full Body C",
        "Weeks": 8
      }
    ]
    rowsMap["mensPPL"]= [
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "LowerA",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "LowerA",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "LowerA",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "LowerA",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "LowerA",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "LowerA",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Chest Fly Machine",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Single Arm Cable Lateral",
        "Sets:": 4,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Cross Cable Tricep Pushdown",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Underhand High Row Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (High Row)",
        "Workout": "Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Chest Supported Upper Back Row",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Single Arm DB Row",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lats Row)",
        "Workout": "Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Cable Rear Delt",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Incline DB Curls",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Lying hamstring curl",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "LowerB",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "LowerB",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "LowerB",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "LowerB",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Calf Raise Toe Press",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "LowerB",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "LowerB",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Incline DB Bench",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2. Dips",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "2 min",
        "Exercise Category": "Chest / Shoulder / Tricep (Lower Chest) (Front Delt) (Tricep Press)",
        "Workout": "Push2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Incline DB Fly",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Lateral Raises Facing Bench",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5. Tricep Rope Pushdown",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Pull2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Seated Cable Row",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Pull2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3. Rope Pullovers",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Pull2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4. Bent Over DB Rear Delt Fly",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulders (Rear Delts)",
        "Workout": "Pull2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6. Single Arm DB Preacher Curl",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull2",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "LowerA",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "LowerA",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "LowerA",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "LowerA",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "LowerA",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "LowerA",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Chest Fly Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Single Arm Cable Lateral",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Cross Cable Tricep Pushdown",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Underhand High Row Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Back (High Row)",
        "Workout": "Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Chest Supported Upper Back Row",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Single Arm DB Row",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lats Row)",
        "Workout": "Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Cable Rear Delt",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Incline DB Curls",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "LowerB",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "4 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "LowerB",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "LowerB",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "LowerB",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Calf Raise Toe Press",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "LowerB",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "0 to 1",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "LowerB",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Incline DB Bench",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2. Dips",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "2 min",
        "Exercise Category": "Chest / Shoulder / Tricep (Lower Chest) (Front Delt) (Tricep Press)",
        "Workout": "Push2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Incline DB Fly",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Lateral Raises Facing Bench",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Tricep Rope Pushdown",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Pull2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Seated Cable Row",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Pull2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3. Rope Pullovers",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Pull2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4. Bent Over DB Rear Delt Fly",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulders (Rear Delts)",
        "Workout": "Pull2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5. Single Arm DB Preacher Curl",
        "Sets:": 3,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull2",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "LowerA",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 1,
        "Rest:": "5 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "LowerA",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 1,
        "Reps:": "8 to 12 (rest pause set)",
        "RIR": "0 to 1",
        "Rest:": "5 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "LowerA",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "4 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "LowerA",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "LowerA",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "LowerA",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "1-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Chest Fly Machine",
        "Sets:": 1,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Single Arm Cable Lateral",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Cross Cable Tricep Pushdown",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Underhand High Row Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Back (High Row)",
        "Workout": "Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Chest Supported Upper Back Row",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Single Arm DB Row",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lats Row)",
        "Workout": "Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Cable Rear Delt",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Incline DB Curls",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "LowerB",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": 1,
        "Rest:": "4 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "LowerB",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 1,
        "Reps:": "6 to 8 (rest pause set)",
        "RIR": "0 to 1",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "LowerB",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1-Jan",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "LowerB",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Calf Raise Toe Press",
        "Sets:": 2,
        "Reps:": "8 to 12 (double drop set)",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "LowerB",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "0-Jan",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "LowerB",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Incline DB Bench",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "4 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2. Dips",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Chest / Shoulder / Tricep (Lower Chest) (Front Delt) (Tricep Press)",
        "Workout": "Push2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Incline DB Fly",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Lateral Raises Facing Bench",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5. Tricep Rope Pushdown",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Pull2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Seated Cable Row",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Pull2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3. Rope Pullovers",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "2 to 3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Pull2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4. Bent Over DB Rear Delt Fly",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulders (Rear Delts)",
        "Workout": "Pull2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6. Single Arm DB Preacher Curl",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "1 to 2",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull2",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "LowerA",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Barbell Back Squat",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Squat Movements)",
        "Workout": "LowerA",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Leg Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "4 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "LowerA",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Heel Elevated Dumbbell Split Squat",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "LowerA",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "LowerA",
        "Weeks": 8
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "LowerA",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Flat DB Press",
        "Sets:": 3,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (flat press)",
        "Workout": "Push",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Incline Chest Press Machine",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Chest Fly Machine",
        "Sets:": 4,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Single Arm Cable Lateral",
        "Sets:": 4,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Cross Cable Tricep Pushdown",
        "Sets:": 4,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Underhand High Row Machine",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (High Row)",
        "Workout": "Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Chest Supported Upper Back Row",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Single Arm DB Row",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lats Row)",
        "Workout": "Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Cable Rear Delt",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Incline DB Curls",
        "Sets:": 3,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Seated hamstring curl",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Hamstring (Curl)",
        "Workout": "LowerB",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Barbell RDL",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "4 min",
        "Exercise Category": "Hamstrings / Glutes (Hamstrings legnthened)",
        "Workout": "LowerB",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Feet Wide and High Leg Press",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Quads / Glutes (Leg Press)",
        "Workout": "LowerB",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Walking lunges",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Legs (Lunge variation)",
        "Workout": "LowerB",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "LowerB",
        "Weeks": 8
      },
      {
        "Exercise:": "6. Weighted Crunch",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "LowerB",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Incline DB Bench",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Incline Press)",
        "Workout": "Push2",
        "Weeks": 8
      },
      {
        "Exercise:": "2. Dips",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Chest / Shoulder / Tricep (Lower Chest) (Front Delt) (Tricep Press)",
        "Workout": "Push2",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Incline DB Fly",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Chest (Fly)",
        "Workout": "Push2",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Lateral Raises Facing Bench",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Push2",
        "Weeks": 8
      },
      {
        "Exercise:": "5. Tricep Rope Pushdown",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Tricep",
        "Workout": "Push2",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1. Wide grip lat pulldown",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lat Pulldown)",
        "Workout": "Pull2",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Seated Cable Row",
        "Sets:": 1,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Back Row)",
        "Workout": "Pull2",
        "Weeks": 8
      },
      {
        "Exercise:": "3. Rope Pullovers",
        "Sets:": 2,
        "Reps:": "6 to 8",
        "RIR": "4 to 6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Pull2",
        "Weeks": 8
      },
      {
        "Exercise:": "4. Bent Over DB Rear Delt Fly",
        "Sets:": 2,
        "Reps:": "8 to 12",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulders (Rear Delts)",
        "Workout": "Pull2",
        "Weeks": 8
      },
      {
        "Exercise:": "6. Single Arm DB Preacher Curl",
        "Sets:": 2,
        "Reps:": "10 to 15",
        "RIR": "4 to 6",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Pull2",
        "Weeks": 8
      }
    ]
    rowsMap["womensintermediateglute"] = [
      {
        "Exercise:": "1A) Glute kickbacks",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "",
        "Exercise Category": "Glutes (Kickbacks)",
        "Workout": "Glutes and Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "1B) Smith Machine Lunge",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Glutes and Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2) Adductor Machine",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Adductor",
        "Workout": "Glutes and Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3) High incline Neutral Grip Chest Press",
        "Sets:": 4,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Chest / Front Delt (Upper Chest Press) (Shoulder Press)",
        "Workout": "Glutes and Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4) DB Lateral Raise Facing Bench",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Glutes and Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5) Rope pushdowns",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Triceps",
        "Workout": "Glutes and Push",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell Hip Thrust",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Hamstrings / Glutes (Hip Thrust)",
        "Workout": "Glutes and Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2) DB RDL",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Hamstrings / Back (RDL)",
        "Workout": "Glutes and Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3) Wide Grip Lat Pulldown",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Glutes and Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4) Single arm DB row",
        "Sets:": 4,
        "Reps:": "10 each arm",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Glutes and Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5) Rear Delt Cable Fly",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulders (Rear Delt)",
        "Workout": "Glutes and Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "6) Incline DB Curl",
        "Sets:": 4,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Glutes and Pull",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Step Back Lunge",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2) DB Sumo Squat",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Squat)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3) Leg Press Feet High",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4) 45 degree hyperextension",
        "Sets:": 4,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Hamstrings / Glutes (Legnthened)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5) Rope Crunches",
        "Sets:": 4,
        "Reps:": "15-20",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Hamstrings / Back (RDL)",
        "Workout": "Back and Glutes",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2) Underhand Lat Pulldown",
        "Sets:": 4,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "2 min rest",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Back and Glutes",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3) Front Foot Elevated Split Squat",
        "Sets:": 3,
        "Reps:": "10 each leg",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Back and Glutes",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4) Steps Ups",
        "Sets:": 3,
        "Reps:": "10 each leg",
        "RIR": "2-3",
        "Rest:": "2 min rest",
        "Exercise Category": "Glutes / Quaads (Lunge)",
        "Workout": "Back and Glutes",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5) Seated Cable Row",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Back and Glutes",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1A) Glute kickbacks",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Glutes (Kickbacks)",
        "Workout": "Glutes and Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "1B) Smith Machine Lunge",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Glutes and Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2) Adductor Machine",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Adductor",
        "Workout": "Glutes and Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3) High incline Neutral Grip Chest Press",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Chest / Front Delt (Upper Chest Press) (Shoulder Press)",
        "Workout": "Glutes and Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4) DB Lateral Raise Facing Bench",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Glutes and Push",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5) Rope pushdowns",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Triceps",
        "Workout": "Glutes and Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell Hip Thrust",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Glutes (Hip Thrust)",
        "Workout": "Glutes and Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2) DB RDL",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Back (RDL)",
        "Workout": "Glutes and Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3) Wide Grip Lat Pulldown",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Glutes and Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4) Single arm DB row",
        "Sets:": 3,
        "Reps:": "10 each arm",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Glutes and Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5) Rear Delt Cable Fly",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulders (Rear Delt)",
        "Workout": "Glutes and Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "6) Incline DB Curl",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Glutes and Pull",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Step Back Lunge",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2) DB Sumo Squat",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Squat)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3) Leg Press Feet High",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4) 45 degree hyperextension",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Hamstrings / Glutes (Legnthened)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5) Rope Crunches",
        "Sets:": 3,
        "Reps:": "15-20",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Back (RDL)",
        "Workout": "Back and Glutes",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2) Underhand Lat Pulldown",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "2 min rest",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Back and Glutes",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3) Front Foot Elevated Split Squat",
        "Sets:": 2,
        "Reps:": "10 each leg",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Back and Glutes",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4) Steps Ups",
        "Sets:": 3,
        "Reps:": "10 each leg",
        "RIR": "2-3",
        "Rest:": "2 min rest",
        "Exercise Category": "Glutes / Quaads (Lunge)",
        "Workout": "Back and Glutes",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5) Seated Cable Row",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Back and Glutes",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1A) Glute kickbacks",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Glutes (Kickbacks)",
        "Workout": "Glutes and Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "1B) Smith Machine Lunge",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Glutes and Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2) Adductor Machine",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Adductor",
        "Workout": "Glutes and Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3) High incline Neutral Grip Chest Press",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Chest / Front Delt (Upper Chest Press) (Shoulder Press)",
        "Workout": "Glutes and Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4) DB Lateral Raise Facing Bench",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Glutes and Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5) Rope pushdowns",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Triceps",
        "Workout": "Glutes and Push",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell Hip Thrust",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Glutes (Hip Thrust)",
        "Workout": "Glutes and Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2) DB RDL",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Back (RDL)",
        "Workout": "Glutes and Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3) Wide Grip Lat Pulldown",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Glutes and Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4) Single arm DB row",
        "Sets:": 3,
        "Reps:": "10 each arm",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Glutes and Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5) Rear Delt Cable Fly",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulders (Rear Delt)",
        "Workout": "Glutes and Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "6) Incline DB Curl",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Glutes and Pull",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Step Back Lunge",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2) DB Sumo Squat",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Squat)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3) Leg Press Feet High",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4) 45 degree hyperextension",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Hamstrings / Glutes (Legnthened)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5) Rope Crunches",
        "Sets:": 3,
        "Reps:": "15-20",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Back (RDL)",
        "Workout": "Back and Glutes",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2) Underhand Lat Pulldown",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "2 min rest",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Back and Glutes",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3) Front Foot Elevated Split Squat",
        "Sets:": 2,
        "Reps:": "10 each leg",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Back and Glutes",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4) Steps Ups",
        "Sets:": 2,
        "Reps:": "10 each leg",
        "RIR": "2-3",
        "Rest:": "2 min rest",
        "Exercise Category": "Glutes / Quaads (Lunge)",
        "Workout": "Back and Glutes",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5) Seated Cable Row",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Back and Glutes",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1A) Glute kickbacks",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "0 min",
        "Exercise Category": "Glutes (Kickbacks)",
        "Workout": "Glutes and Push",
        "Weeks": 8
      },
      {
        "Exercise:": "1B) Smith Machine Lunge",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Glutes and Push",
        "Weeks": 8
      },
      {
        "Exercise:": "2) Adductor Machine",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Adductor",
        "Workout": "Glutes and Push",
        "Weeks": 8
      },
      {
        "Exercise:": "3) High incline Neutral Grip Chest Press",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Chest / Front Delt (Upper Chest Press) (Shoulder Press)",
        "Workout": "Glutes and Push",
        "Weeks": 8
      },
      {
        "Exercise:": "4) DB Lateral Raise Facing Bench",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (Medial Delt)",
        "Workout": "Glutes and Push",
        "Weeks": 8
      },
      {
        "Exercise:": "5) Rope pushdowns",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Triceps",
        "Workout": "Glutes and Push",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell Hip Thrust",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Glutes (Hip Thrust)",
        "Workout": "Glutes and Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "2) DB RDL",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Back (RDL)",
        "Workout": "Glutes and Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "3) Wide Grip Lat Pulldown",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Glutes and Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "4) Single arm DB row",
        "Sets:": 1,
        "Reps:": "10 each arm",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Glutes and Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "5) Rear Delt Cable Fly",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulders (Rear Delt)",
        "Workout": "Glutes and Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "6) Incline DB Curl",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Biceps",
        "Workout": "Glutes and Pull",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Step Back Lunge",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "2) DB Sumo Squat",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Squat)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "3) Leg Press Feet High",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "4) 45 degree hyperextension",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Hamstrings / Glutes (Legnthened)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "5) Rope Crunches",
        "Sets:": 1,
        "Reps:": "15-20",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Back (RDL)",
        "Workout": "Back and Glutes",
        "Weeks": 8
      },
      {
        "Exercise:": "2) Underhand Lat Pulldown",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "2 min rest",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Back and Glutes",
        "Weeks": 8
      },
      {
        "Exercise:": "3) Front Foot Elevated Split Squat",
        "Sets:": 1,
        "Reps:": "10 each leg",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Back and Glutes",
        "Weeks": 8
      },
      {
        "Exercise:": "4) Steps Ups",
        "Sets:": 1,
        "Reps:": "10 each leg",
        "RIR": "4-6",
        "Rest:": "2 min rest",
        "Exercise Category": "Glutes / Quaads (Lunge)",
        "Workout": "Back and Glutes",
        "Weeks": 8
      },
      {
        "Exercise:": "5) Seated Cable Row",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Row)",
        "Workout": "Back and Glutes",
        "Weeks": 8
      }
    ]
    rowsMap["womensintermediate"] =  
    [
      {
        "Exercise:": "1a) Leg Press (Feet High and Wide)",
        "Sets:": 3,
        "Reps:": "10-12",
        "RIR": "2-3",
        "Rest:": "0 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "1B) Single arm cable lateral raise",
        "Sets:": 3,
        "Reps:": "12-15",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Shoulders (Medial Delt)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2A) Barbell Hip Thrusts",
        "Sets:": 3,
        "Reps:": "10-12",
        "RIR": "2-3",
        "Rest:": "0 min",
        "Exercise Category": "Glutes (Hip Thrust)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2B) Neutral Grip Pull Downs",
        "Sets:": 3,
        "Reps:": "6-8",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "C1) Lying Leg Curl",
        "Sets:": 4,
        "Reps:": "10-12",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Hamstrings (Leg Curl)",
        "Workout": "Full Body A",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1A) Barbell Squats",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "0 min",
        "Exercise Category": "Quads / Glutes (Squats",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "1B) Upper Back Row Machine",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "2-3",
        "Rest:": "2 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2A) Step-Up's",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Glutes (Step-ups)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2B) Seated DB Shoulder Press",
        "Sets:": 4,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Shoulder (front delt)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3A) Rear foot elevated Split squats",
        "Sets:": 4,
        "Reps:": "10 each leg",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3B) Push ups",
        "Sets:": 4,
        "Reps:": "10-12",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Chest (Press)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4) Hanging Leg Raises",
        "Sets:": 3,
        "Reps:": "AMRAP",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Core (Lower abs)",
        "Workout": "Full Body B",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Glutes / Back (RDL) (Erectors)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2) Barbell Hip Thrusts",
        "Sets:": 3,
        "Reps:": "12-15",
        "RIR": "2-3",
        "Rest:": "3 min",
        "Exercise Category": "Glutes (Hip Thrust)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3) Walking Lunges",
        "Sets:": 4,
        "Reps:": "10 each leg",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4) Seated Hamstring Curl",
        "Sets:": 4,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Hamstrings (Curl)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "5) Leg Extensions",
        "Sets:": 4,
        "Reps:": "15-20",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Quads (Extension)",
        "Workout": "Lower",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1A) DB Lateral Raises facing bench",
        "Sets:": 3,
        "Reps:": "15-20",
        "RIR": "2-3",
        "Rest:": "0 min",
        "Exercise Category": "Shoulders (Medial Delt)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "1B) Wide Grip Lat Pulldown",
        "Sets:": 3,
        "Reps:": "6-8",
        "RIR": "2-3",
        "Rest:": "2 min rest",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2A) Cable Rear Delt Fly",
        "Sets:": 3,
        "Reps:": "15-20",
        "RIR": "2-3",
        "Rest:": "0 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "2B) Single arm db row",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "2-3",
        "Rest:": "2 min rest",
        "Exercise Category": "Back (row)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3A) Incline DB Curl",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Biceps",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "3B) Tricep Rope Extensions",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Triceps",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4A) Weighted Crunches",
        "Sets:": 4,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "4B) Seated Calf Raise",
        "Sets:": 4,
        "Reps:": "15-20",
        "RIR": "1-2",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Upper",
        "Weeks": "1-2"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1a) Leg Press (Feet High and Wide)",
        "Sets:": 2,
        "Reps:": "10-12",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "1B) Single arm cable lateral raise",
        "Sets:": 2,
        "Reps:": "12-15",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Shoulders (Medial Delt)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2A) Barbell Hip Thrusts",
        "Sets:": 2,
        "Reps:": "10-12",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Glutes (Hip Thrust)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2B) Neutral Grip Pull Downs",
        "Sets:": 2,
        "Reps:": "6-8",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "C1) Lying Leg Curl",
        "Sets:": 3,
        "Reps:": "10-12",
        "RIR": "0-1",
        "Rest:": "0 min",
        "Exercise Category": "Hamstrings (Leg Curl)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "C2) High Incline Neutral Grip DB Press",
        "Sets:": 3,
        "Reps:": "10-12",
        "RIR": 1,
        "Rest:": "2 min",
        "Exercise Category": "Shoulders / Upper Chest (Front Delt) (Chest Press)",
        "Workout": "Full Body A",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1A) Barbell Squats",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Quads / Glutes (Squats",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "1B) Upper Back Row Machine",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2A) Step-Up's",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "0-1",
        "Rest:": "0 min",
        "Exercise Category": "Glutes (Step-ups)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2B) Seated DB Shoulder Press",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "0-1",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (front delt)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3A) Rear foot elevated Split squats",
        "Sets:": 3,
        "Reps:": "10 each leg",
        "RIR": 1,
        "Rest:": "0 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3B) Push ups",
        "Sets:": 3,
        "Reps:": "AMRAP",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Chest (Press)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4) Hanging Leg Raises",
        "Sets:": 2,
        "Reps:": "AMRAP",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Core (Lower abs)",
        "Workout": "Full Body B",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Hamstrings / Glutes (RDL)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2) Barbell Hip Thrusts",
        "Sets:": 2,
        "Reps:": "12-15",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Glutes (Hip Thrust)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3) Walking Lunges",
        "Sets:": 3,
        "Reps:": "10 each leg",
        "RIR": 1,
        "Rest:": "2 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4) Seated Hamstring Curl",
        "Sets:": 3,
        "Reps:": "8-12",
        "RIR": "0-1",
        "Rest:": "2 min",
        "Exercise Category": "Hamstrings (Curl)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "5) Leg Extensions",
        "Sets:": 3,
        "Reps:": "15-20",
        "RIR": "0-1",
        "Rest:": "2 min",
        "Exercise Category": "Quads (Extension)",
        "Workout": "Lower",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1A) DB Lateral Raises facing bench",
        "Sets:": 2,
        "Reps:": "15-20",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Shoulders (Medial Delt)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "1B) Wide Grip Lat Pulldown",
        "Sets:": 2,
        "Reps:": "6-8",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2A) Cable Rear Delt Fly",
        "Sets:": 2,
        "Reps:": "15-20",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "2B) Single arm db row",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Back (row)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3A) Incline DB Curl",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "0-1",
        "Rest:": "0 min",
        "Exercise Category": "Biceps",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "3B) Tricep Rope Extensions",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "0-1",
        "Rest:": "2 min",
        "Exercise Category": "Triceps",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4A) Weighted Crunches",
        "Sets:": 3,
        "Reps:": "10-15",
        "RIR": "0-1",
        "Rest:": "0 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "4B) Seated Calf Raise",
        "Sets:": 3,
        "Reps:": "15-20",
        "RIR": "0-1",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Upper",
        "Weeks": "3-4"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1a) Leg Press (Feet High and Wide)",
        "Sets:": 2,
        "Reps:": "10-12",
        "RIR": 1,
        "Rest:": "0 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "1B) Single arm cable lateral raise",
        "Sets:": 2,
        "Reps:": "12-15",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Shoulders (Medial Delt)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2A) Barbell Hip Thrusts",
        "Sets:": 2,
        "Reps:": "10-12",
        "RIR": 0,
        "Rest:": "0 min",
        "Exercise Category": "Glutes (Hip Thrust)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2B) Neutral Grip Pull Downs",
        "Sets:": 2,
        "Reps:": "6-8",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "C1) Lying Leg Curl",
        "Sets:": 2,
        "Reps:": "10-12",
        "RIR": 0,
        "Rest:": "0 min",
        "Exercise Category": "Hamstrings (Leg Curl)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "C2) High Incline Neutral Grip DB Press",
        "Sets:": 2,
        "Reps:": "10-12",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Shoulders / Upper Chest (Front Delt) (Chest Press)",
        "Workout": "Full Body A",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1A) Barbell Squats",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": 1,
        "Rest:": "0 min",
        "Exercise Category": "Quads / Glutes (Squats",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "1B) Upper Back Row Machine",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "4 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2A) Step-Up's",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "0-1",
        "Rest:": "0 min",
        "Exercise Category": "Glutes (Step-ups)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2B) Seated DB Shoulder Press",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (front delt)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3A) Rear foot elevated Split squats",
        "Sets:": 2,
        "Reps:": "10 each leg",
        "RIR": 1,
        "Rest:": "0 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3B) Push ups",
        "Sets:": 2,
        "Reps:": "AMRAP",
        "RIR": 0,
        "Rest:": "3 min",
        "Exercise Category": "Chest (Press)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4) Hanging Leg Raises",
        "Sets:": 2,
        "Reps:": "AMRAP",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Core (Lower abs)",
        "Workout": "Full Body B",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "4 min",
        "Exercise Category": "Hamstrings / Glutes (RDL)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2) Barbell Hip Thrusts",
        "Sets:": 2,
        "Reps:": "12-15",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Glutes (Hip Thrust)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3) Walking Lunges",
        "Sets:": 2,
        "Reps:": "10 each leg",
        "RIR": 1,
        "Rest:": "2 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4) Seated Hamstring Curl",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "0-1",
        "Rest:": "2 min",
        "Exercise Category": "Hamstrings (Curl)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "5) Leg Extensions",
        "Sets:": 2,
        "Reps:": "15-20",
        "RIR": "0-1",
        "Rest:": "2 min",
        "Exercise Category": "Quads (Extension)",
        "Workout": "Lower",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1A) DB Lateral Raises facing bench",
        "Sets:": 2,
        "Reps:": "15-20",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Shoulders (Medial Delt)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "1B) Wide Grip Lat Pulldown",
        "Sets:": 2,
        "Reps:": "6-8",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2A) Cable Rear Delt Fly",
        "Sets:": 2,
        "Reps:": "15-20",
        "RIR": "1-2",
        "Rest:": "0 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "2B) Single arm db row",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "1-2",
        "Rest:": "3 min",
        "Exercise Category": "Back (row)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3A) Incline DB Curl",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "0 min",
        "Exercise Category": "Biceps",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "3B) Tricep Rope Extensions",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Triceps",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4A) Weighted Crunches",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": 0,
        "Rest:": "0 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "4B) Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "15-20",
        "RIR": 0,
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Upper",
        "Weeks": "5-7"
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1a) Leg Press (Feet High and Wide)",
        "Sets:": 2,
        "Reps:": "10-12",
        "RIR": "4-6",
        "Rest:": "0 min",
        "Exercise Category": "Glutes / Quads (Leg Press)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "1B) Single arm cable lateral raise",
        "Sets:": 2,
        "Reps:": "12-15",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Shoulders (Medial Delt)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "2A) Barbell Hip Thrusts",
        "Sets:": 2,
        "Reps:": "10-12",
        "RIR": "4-6",
        "Rest:": "0 min",
        "Exercise Category": "Glutes (Hip Thrust)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "2B) Neutral Grip Pull Downs",
        "Sets:": 2,
        "Reps:": "6-8",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Lats)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "C1) Lying Leg Curl",
        "Sets:": 2,
        "Reps:": "10-12",
        "RIR": "4-6",
        "Rest:": "0 min",
        "Exercise Category": "Hamstrings (Leg Curl)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "C2) High Incline Neutral Grip DB Press",
        "Sets:": 2,
        "Reps:": "10-12",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Shoulders / Upper Chest (Front Delt) (Chest Press)",
        "Workout": "Full Body A",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1A) Barbell Squats",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "0 min",
        "Exercise Category": "Quads / Glutes (Squats",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "1B) Upper Back Row Machine",
        "Sets:": 1,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "4 min",
        "Exercise Category": "Back (Upper Back Row)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "2A) Step-Up's",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "0 min",
        "Exercise Category": "Glutes (Step-ups)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "2B) Seated DB Shoulder Press",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Shoulder (front delt)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "3A) Rear foot elevated Split squats",
        "Sets:": 2,
        "Reps:": "10 each leg",
        "RIR": "4-6",
        "Rest:": "0 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "3B) Push ups",
        "Sets:": 2,
        "Reps:": "AMRAP",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Chest (Press)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "4) Hanging Leg Raises",
        "Sets:": 2,
        "Reps:": "AMRAP",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Core (Lower abs)",
        "Workout": "Full Body B",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1) Barbell RDL",
        "Sets:": 1,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "4 min",
        "Exercise Category": "Hamstrings / Glutes (RDL)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "2) Barbell Hip Thrusts",
        "Sets:": 2,
        "Reps:": "12-15",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Glutes (Hip Thrust)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "3) Walking Lunges",
        "Sets:": 2,
        "Reps:": "10 each leg",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Glutes / Quads (Lunge)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "4) Seated Hamstring Curl",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Hamstrings (Curl)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "5) Leg Extensions",
        "Sets:": 2,
        "Reps:": "15-20",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Quads (Extension)",
        "Workout": "Lower",
        "Weeks": 8
      },
      {
        "Exercise:": "",
        "Sets:": "",
        "Reps:": "",
        "RIR": "",
        "Rest:": "",
        "Exercise Category": "",
        "Workout": "",
        "Weeks": ""
      },
      {
        "Exercise:": "1A) DB Lateral Raises facing bench",
        "Sets:": 2,
        "Reps:": "15-20",
        "RIR": "4-6",
        "Rest:": "0 min",
        "Exercise Category": "Shoulders (Medial Delt)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "1B) Wide Grip Lat Pulldown",
        "Sets:": 2,
        "Reps:": "6-8",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Back (Pulldown)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "2A) Cable Rear Delt Fly",
        "Sets:": 2,
        "Reps:": "15-20",
        "RIR": "4-6",
        "Rest:": "0 min",
        "Exercise Category": "Shoulder (Rear Delt)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "2B) Single arm db row",
        "Sets:": 2,
        "Reps:": "8-12",
        "RIR": "4-6",
        "Rest:": "3 min",
        "Exercise Category": "Back (row)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "3A) Incline DB Curl",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "0 min",
        "Exercise Category": "Biceps",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "3B) Tricep Rope Extensions",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Triceps",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "4A) Weighted Crunches",
        "Sets:": 2,
        "Reps:": "10-15",
        "RIR": "4-6",
        "Rest:": "0 min",
        "Exercise Category": "Core (Upper Abs)",
        "Workout": "Upper",
        "Weeks": 8
      },
      {
        "Exercise:": "4B) Seated Calf Raise",
        "Sets:": 2,
        "Reps:": "15-20",
        "RIR": "4-6",
        "Rest:": "2 min",
        "Exercise Category": "Calves",
        "Workout": "Upper",
        "Weeks": 8
      }
    ]
    

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
    
  const titleToNameMap = { "womensintermediate" : "Women's Glute Dominant Program",
                          "menslvl3PPL": "Men Level 3 PPLUL",
                          "menslvl2UL": "Men Level 2 UL",
                        "mensfullbody": "Men Full Body",
                      "mensPPL": "Men PPL",
                      "womenintermediate2": "Women's Intermediate"}
                      

  const [createProgramWeek, { data : dataPw, loading : loadingPw, error: errorPw }] = useMutation(gql`${mutations.createProgramWeek}`);
  const [createProgram, { data : dataP, loading : loadingP, error: errorP }] = useMutation(gql`${mutations.createProgram}`);
  const [createWorkout, { data : dataW, loading : loadingW, error: errorW }] = useMutation(gql`${mutations.createWorkout}`);
  const [createExercise, { data : dataE, loading : loadingE, error: errorE }] = useMutation(gql`${mutations.createExercise}`);


  const addWorkout = () => {
    //Create program 
    titles.forEach(function(title){
      const programInput = {
        id: title,
        author: "Caleb Saks",
        image: "null",
        title: title,
        introVideo: "null",
      }
  
      createProgram({ variables : {input : programInput} })

      let rows = rowsMap[title]
      
  
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
    })
  }

  
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
        <TouchableOpacity onPress={() => {
          handleFilter('all')
          addWorkout()
        }} style = {[styles.allButton, {backgroundColor : isAll ? "#CFB87B" : "#1A1A1A"}]}>
          <Text style={{color:'white', fontSize: 16}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilter('not completed')} style = {[styles.notCompletedButton, {backgroundColor : isAll ? "#1A1A1A" : "#CFB87B"}]}>
          <Text style={{color:'white', fontSize: 16}}>Not Completed</Text>
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
