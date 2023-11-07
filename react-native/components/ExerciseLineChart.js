import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';
import { useState, React, useEffect } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import * as queries from "../../src/graphql/queries";
import * as mutations from "../../src/graphql/mutations";
import * as scale from 'd3-scale'
import * as shape from 'd3-shape'


export default function ExerciseLineChart({exercise}) {

  const [maxWeight, setMaxWeight] = useState(0)
  const [maxVolume, setMaxVolume] = useState(0)

  //Query all exercise entries with appropriate filters
  const { data: dataExerciseLog, loading, error, refetch } = useQuery(gql`${queries.listExerciseEntries}`, {
    variables: { 
      filter: {
        id: {
          contains: `${global.userId}::${exercise}`
        }
      }
     }
  });

  let data = dataExerciseLog ? dataExerciseLog.listExerciseEntries.items.map((entry) => {
    return {repsCompleted: entry.repsCompleted, weight: entry.weight, volume: entry.repsCompleted * entry.weight, date: entry.updatedAt}
  }) : []

  useEffect(() => {
    setMaxWeight(Math.max(...data.map((entry) => {return entry.weight})))
    setMaxVolume(Math.max(...data.map((entry) => {return entry.volume})))
  }, [data])


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

console.log(data.map((entry) => {return entry.weight}))

  const axesSvg = { fontSize: 10, fill: 'grey' };
  const verticalContentInset = { top: 10, bottom: 10 }
  const xAxisHeight = 30

  return (
    <View>
      {data.length ?

      <View style={styles.container}>
        <View style={styles.progressTitleContainer}>
          <Text style={styles.progressTitleText}>PROGRESS</Text>
        </View>
        <View style={styles.personalBestContainer}>
          <View style={styles.personalBestCard}>
            <Text style={{color: 'white'}}>Personal Best: {maxVolume} lbs</Text>
          </View>
          <View style={styles.oneRepCard}>
            <Text style={{color: 'white'}}>1 Rep Max: {maxWeight} lbs</Text>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Volume (Weight x Reps) vs. Date</Text>
        </View>
        <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
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
                    formatLabel={(value, index) => value}
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
    alignItems: 'center'
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
  personalBestContainer : {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between'
  }, 
  personalBestCard : {
    height: 35,
    width: '55%',
    backgroundColor: "rgb(84,72,51)",
    borderRadius: 5,
    borderColor: Colors.primary,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  oneRepCard : {
    height: 35,
    width: '40%',
    backgroundColor: "rgb(84,72,51)",
    borderRadius: 5,
    borderColor: Colors.primary,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  progressTitleContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  progressTitleText: {
    color: 'white',
    fontWeight: 'bold'
  },
  container : {
    backgroundColor: "rgb(28,28,28)",
    paddingTop: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 25
  }
});


