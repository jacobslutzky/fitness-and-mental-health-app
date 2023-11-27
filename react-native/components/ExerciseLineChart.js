import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { useState, React, useEffect } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import { AntDesign } from '@expo/vector-icons';
import * as queries from "../../src/graphql/queries";
import * as mutations from "../../src/graphql/mutations";
import * as scale from 'd3-scale'
import * as shape from 'd3-shape'


export default function ExerciseLineChart({entries, exercise, navigation}) {

  let data = entries!=null ? entries.map((entry) => {
    return {repsCompleted: entry.repsCompleted, weight: entry.weight, volume: entry.repsCompleted * entry.weight, date: entry.updatedAt, workout: entry.workout}
  }) : []
  
  data.sort((a, b) => new Date(a.date) - new Date(b.date));

  /*
  data = [
    {
        weight: 50,
        date: 0,
    },
    {
        weight: 10,
        date: 1,
    },
    {
        weight: 150,
        date: 2,
    },
]
*/


    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30

  const navigateToAllProgress = () => {
      navigation.navigate("ExerciseProgress", {exercise: exercise, data: data})
  }

  return (
    <View>
      {data.length>0 ?

      <View style={styles.container}>
        <View style={styles.allTimeProgressButtonContainer}>
          <TouchableOpacity onPress={() => navigateToAllProgress()}>
            <AntDesign name="arrowsalt" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.progressTitleContainer}>
          <Text style={styles.progressTitleText}>PROGRESS</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Volume (Weight x Reps) vs. Date</Text>
        </View>
        <View style={{ height: 200, padding: 20, marginLeft: -10, flexDirection: 'row' }}>
            <View style={styles.yAxisLabel}>
              <Text style={styles.yAxisLabelText}>
                Volume
              </Text>
            </View>
            <YAxis
                data={ data.map((entry) => {return entry.volume}) }
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
                numberOfTicks={5}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={data.map((entry) => {return entry.volume})}
                    contentInset={verticalContentInset}
                    svg={{ stroke: Colors.primary }}
                    xScale={ scale.scaleTime }
                >
                    <Grid/>
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10, height: xAxisHeight }}
                    data={data.map((entry) => {return entry.date})}
                    formatLabel={(value, index) => value+1}
                    contentInset={{ left: 10, right: 10 }}
                    svg={axesSvg}
                />
                <View style={styles.xAxisLabel}>
                  <Text style={styles.xAxisLabelText}>
                    Date
                  </Text>
                </View>
            </View>
        </View>
      </View> 
      :
      <View></View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  yAxisLabel : {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    marginLeft: -40,
  }, 
  yAxisLabelText : {
    transform: "rotate(-90deg)",
    color: 'white',
    fontWeight: 'bold'
  }, 
  xAxisLabel : {
    alignItems: 'center',
  }, 
  xAxisLabelText : {
    color: 'white',
    fontWeight: 'bold'
  },
  titleContainer : {
    justfiyContent: 'center',
    alignItems: 'center',
  }, 
  titleText: {
    color: 'white',
    fontWeight: 'bold'
  }, 
  progressTitleContainer : {
    alignItems: 'center',
    height: 50,
  },
  progressTitleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  container : {
    backgroundColor: "rgb(28,28,28)",
    paddingTop: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 25
  }, 
  allTimeProgressButtonContainer : {
    marginLeft: 'auto',
    marginRight: 0
  }
});
