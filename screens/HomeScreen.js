import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Button from '../components/Button';
 
export default function HomeScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(FlashMode.off); 
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, [])

  const takePicture = async () => {
    if(cameraRef){
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const save = async () => {
    if(image){
      try {
        await MediaLibrary.createAssetAsync(image);
        alert('Foto guardada!');
        setImage(null);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const reset = () => {
    setImage(null);
  }

  if(hasCameraPermission === false){
    return <Text>No tenemos acceso a la camara!</Text>
  }
  return (
    <View style={styles.container}>
      {!image ? 
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 30,
        }}>
          <Button icon={'retweet'} onPress={() => {setType(type === CameraType.back ? CameraType.front : CameraType.back)}}/>
          <Button icon={'flash'} onPress={() => {
             setFlash(flash === FlashMode.off ? FlashMode.on : FlashMode.off )
          }}/>
        </View>
      </Camera>
      :
      <Image source={{uri: image}} style={styles.camera}/>
      }
        {!image ? 
          <View style={styles.button}> 
            <Button style={styles.button} title={'Capturar foto'} icon={"camera"} onPress={takePicture}/>
          </View>
        :
          <View style={styles.buttons}> 
            <Button style={{flex: 1}} title={'Volver a tomar'} icon={'retweet'} onPress={reset}/>
            <Button style={{flex: 1}} title={'Save'} icon={"retweet"} onPress={save}/>
          </View>
        }
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingButtom: 8
  },
  camera: {
    flex: 1,
    borderRadius: 20
  },
  button: {
    marginBottom: 35,
    justifyContent: 'center', 
    textAlign: 'center',
    alignItems: 'center'
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 35
  }
});