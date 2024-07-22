// src/VideoScreen.js

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import { SIZES } from '../../constants';

const Videoo = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}   // Can be a URL or a local file.
        style={styles.backgroundVideo}
        controls={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  backgroundVideo: {
    width: SIZES.width,
    height: SIZES.height/4,
  },
});

export default Videoo;
