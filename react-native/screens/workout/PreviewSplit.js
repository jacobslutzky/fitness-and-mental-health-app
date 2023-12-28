import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import Collapsible from 'react-native-collapsible';

const Week = (props) => {
  const index = props.index
  const setToggle = props.setToggle

  const week = { ...props.week }
  week.workouts.items = props.week.workouts.items.slice().sort((a, b) => a.workoutNumber - b.workoutNumber);

  return (
    <View>
      <TouchableOpacity style={styles.cardContainer} onPress={() => setToggle(props.toggle.map((tog, ind) => index - 1 == ind ? !tog : tog))}>
        <View style={[styles.card, props.toggle[index - 1] ? styles.defaultBackground : styles.primaryBackground]}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardWeekText}>WEEK {index}</Text>
          </View>
          <View style={styles.cardDifficultyContainer}>
            <Text style={styles.cardGoldText}>NUMBER OF WORKOUTS:</Text>
            <Text style={styles.cardWhiteText}> {week.workouts.items.length}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={props.toggle[index - 1]} style={styles.dropdown}>
        <View style={styles.dropdownContent}>
          {week.workouts.items.map((workout, index) => (
            <View style={styles.workoutContainer} key={index}>
              <Text style={styles.workoutText}>{workout.title}</Text>
            </View>
          ))

          }
        </View>
      </Collapsible>
    </View>
  )
}

export default function PreviewSplit({ route }) {
  const program = route.params.program
  const [toggle, setToggle] = useState(Array(12).fill(true))

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 30 }}>
        {program.weeks.items.map((week, index) => (
          <Week index={index + 1} week={week} title={program.title} toggle={toggle} setToggle={setToggle} key={index} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => route.params.navigateToProgram()}>
        <Text style={styles.buttonText}>Select Program</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {

    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    marginHorizontal: 8
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primary,
    marginVertical: 15,
    textAlign: 'center'
  },
  workoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20
  },
  dropdown: {
    alignItems: 'center'
  },
  dropdownContent: {
    textAlign: 'center',
    alignItems: 'center',
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    width: '80%',
    marginBottom: 40
  },
  workoutContainer: {
    flexDirection: 'row',
    marginLeft: 8,
    marginVertical: 10,
    borderBottomColor: Colors.primary,
    paddingVertical: 10,
    borderBottomWidth: 1,
    width: '40%',
    justifyContent: 'center'
  },
  button: {
    width: "50%",
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 15,
    alignSelf: "center"
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: '80%',
    height: 75,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 15,
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardWeekText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 10,
    fontWeight: 'bold',
  },
  cardDifficultyContainer: {
    marginRight: 10,
    paddingRight: 10,
    flexDirection: 'row'
  },
  cardGoldText: {
    color: Colors.primary,
    fontSize: 12
  },
  cardTextContainer: {
    borderRightColor: Colors.primary,
    borderRightWidth: 1.5,
    marginRight: 10
  },
  cardWhiteText: {
    color: 'white',
    fontSize: 12
  },
  primaryBackground: {
    borderWidth: 3
  }
});
