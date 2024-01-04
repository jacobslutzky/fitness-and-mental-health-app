import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { React } from 'react';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as scale from 'd3-scale'


export default function ExerciseLineChart({ entries, exercise, logFlag, navigation }) {
  const [data, setData] = useState([])

  useEffect(() => {
      let tempData = entries.map((entry) => {
        return { repsCompleted: entry.repsCompleted, weight: entry.weight, volume: entry.repsCompleted * entry.weight, date: entry.updatedAt, workout: entry.workout }
      })
      tempData.sort((a, b) => new Date(a.date) - new Date(b.date));
      setData(tempData)
  }, [entries])

  const axesSvg = { fontSize: 10, fill: 'grey' };
  const verticalContentInset = { top: 10, bottom: 10 }
  const xAxisHeight = 30

  const navigateToAllProgress = () => {
    navigation.navigate("ExerciseProgress", { exercise: exercise, exerciseData: data })
  }

  return (
    <View>
      {data.length > 0 ?

        <View style={logFlag ? styles.containerLog : styles.container}>
          <View style={styles.allTimeProgressButtonContainer}>
            {!logFlag ? 
              <TouchableOpacity onPress={() => navigateToAllProgress()}>
                <AntDesign name="arrowsalt" size={20} color="white" />
              </TouchableOpacity>
              :
              <View></View>
            }
          </View>
          <View style={styles.progressTitleContainer}>
            <Text style={styles.progressTitleText}>PROGRESS</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Volume (Weight x Reps) vs. Date</Text>
          </View>
          <View style={{ height: 200, padding: 40,  flexDirection: 'row' }}>
            <View style={styles.yAxisLabel}>
              <Text style={styles.yAxisLabelText}>
                Volume
              </Text>
            </View>
            <YAxis
              data={data.map((entry) => { return entry.volume })}
              style={{ marginBottom: xAxisHeight }}
              contentInset={verticalContentInset}
              svg={axesSvg}
              numberOfTicks={5}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <LineChart
                style={{ flex: 1 }}
                data={data.map((entry) => { return entry.volume })}
                contentInset={verticalContentInset}
                svg={{ stroke: Colors.primary }}
                xScale={scale.scaleTime}
              >
                <Grid />
              </LineChart>
              <XAxis
                style={{ marginHorizontal: -10, height: xAxisHeight }}
                data={data.map((entry) => { return entry.date })}
                formatLabel={(value, index) => value + 1}
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
  yAxisLabel: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    marginLeft: -40,
  },
  yAxisLabelText: {
    transform: "rotate(-90deg)",
    color: 'white',
    fontWeight: 'bold'
  },
  xAxisLabel: {
    alignItems: 'center',
  },
  xAxisLabelText: {
    color: 'white',
    fontWeight: 'bold'
  },
  titleContainer: {
    justfiyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold'
  },
  progressTitleContainer: {
    alignItems: 'center',
    height: 50,
  },
  progressTitleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  container: {
    backgroundColor: "rgb(28,28,28)",
    paddingTop: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 25,
    height: '100%'
  },
  containerLog: {
    backgroundColor: "rgb(28,28,28)",
    paddingTop: 25,
    borderRadius: 25,
    height: 300,
    marginBottom: 50
  },
  allTimeProgressButtonContainer: {
    marginLeft: 'auto',
    marginRight: 0
  }
});
