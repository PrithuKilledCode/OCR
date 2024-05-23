import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  CameraOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
type Props = {};

const CameraScreen = (props: Props) => {
  const options: CameraOptions = {
    mediaType: 'photo',
    quality: 1,
    maxWidth: 300,
    maxHeight: 300,
    cameraType: 'back',
    includeBase64: true,
  };
  const openCamera = async () => {
    const result = await launchCamera(options);
  };
  useEffect(() => {
    openCamera();
  });
  return (
    <View>
      <Text>CameraScreen</Text>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
