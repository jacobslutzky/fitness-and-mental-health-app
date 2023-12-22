// SwipeToDelete.js
import React from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SwipeToDelete = ({ dragX, onDelete,iconSize }) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 1.5], // Adjust the output range as needed
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete()}>
        <EvilIcons name="trash" size={iconSize} color="white" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft:10
  },
});

export default SwipeToDelete;
