import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const FriendsConnect = () => {
  return (
    <ImageBackground
      source={require('./assets/friends_background.jpg')} // Change the path to match your image file
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>FriendsConnect</Text>
        {/* Add more components here */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FriendsConnect;
