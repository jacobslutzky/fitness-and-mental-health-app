import React from 'react';
import { StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SwipeToDelete = ({ onDelete,iconSize }) => {
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
