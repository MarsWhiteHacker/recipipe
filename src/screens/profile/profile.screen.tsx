import React, { useState, VFC } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, uploadString } from 'firebase/storage';
import * as FileSystem from 'expo-file-system';

export const Profile: VFC = () => {
  const [image, setImage] = useState<any>(null);
  const [blob, setBlob] = useState<any>(null);

  const storage = getStorage();
  const imageRef = ref(storage, 'images/test3.mov');

  async function uploadFile() {
    uploadBytes(imageRef, blob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }

  const pickImage = async () => {
    const result: ImagePicker.ExpandImagePickerResult<
      ImagePicker.ImagePickerOptions | ImagePicker.OpenFileBrowserOptions
    > = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const getImage = async () => {
    const response = await fetch(image);
    const blob = await response.blob();
    setBlob(blob);
  };
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <Text>Profile Page</Text>
      <Button title="Upload photo" onPress={pickImage} />
      <Button title="Make blob" onPress={getImage} />
      <Button title="Send to FireStore" onPress={uploadFile} />
      <Button
        title="Sign out"
        onPress={() => {
          const auth = getAuth();
          signOut(auth);
        }}
      />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};
