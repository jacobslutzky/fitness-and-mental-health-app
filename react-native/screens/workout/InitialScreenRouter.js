import SelectWorkoutProgram from './SelectWorkoutProgram';
import { CurrentProgram } from './CurrentProgram';
import { useQuery, gql } from "@apollo/client";
import { React, useState, useEffect } from 'react';

export default function InitialScreenRouter({ navigation }) {
  const getCurrentProgram = /* GraphQL */ `
    query GetUserStats($id: ID!) {
      getUserStats(id: $id) {
        id
        currentProgram { 
          id
          title
          userProgramWeeks {
            items {
              id
              weekNumber
              userWorkouts {
                items {
                  id
                  workoutNumber
                  title
                  status
                  notes
                  userExercises{
                    items {
                      id
                      sets
                      RIR
                      restMinutes
                      repRange
                      exerciseNum
                      notes
                      completed
                      exerciseInfoID
                      exerciseInfo {
                          id
                          name
                          muscleWorked
                          workoutType
                          createdAt
                          updatedAt
                          __typename
                        }
                    }
                  }
                }
                }
              }
            }
          }
          
        }
    }
  `;
  const { data: dataProgram, loading: loadingProgram, error: errorProgram } = useQuery(gql`${getCurrentProgram}`, {
    variables: { id: "stats-" + global.userId }
  });
  const [currProgram, setCurrProgram] = useState(null)


  useEffect(() => {
    if (dataProgram?.getUserStats?.currentProgram) {

      setCurrProgram(dataProgram?.getUserStats?.currentProgram)

    }
  }, [dataProgram]);


  return (
    loadingProgram ? (<></>) : (
      currProgram == null ? (
        <SelectWorkoutProgram navigation={navigation} />
      ) : (
        <CurrentProgram navigation={navigation} currProgram={currProgram} />
      ))

  )
}