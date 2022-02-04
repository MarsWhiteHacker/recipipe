import React, { useState, VFC } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadString } from 'firebase/storage';
import * as FileSystem from 'expo-file-system';

export const Profile: VFC = () => {
  const [image, setImage] = useState<any>(null);

  /* const storage = getStorage(); */
  /* const imageRef = ref(storage, 'images/test.jpg'); */
  /* async function uploadFile() {

    FileSystem.uploadAsync('', '', options)

    await storage
      .bucket('recipipe.appspot.com')
      .upload(
        '',
        {
          destination: 'test',
        },
      );
  } */

  const sendPhoto = () => {
    FileSystem.uploadAsync(
      'https://storage.googleapis.com/upload/storage/v1/b/recipipe.appspot.com/o?uploadType=media&name=image22.mov',
      image,
      {
        headers: {
          Authorization:
            'Bearer ya29.A0ARrdaM8Cw1OsOrawDpJ69HWxHCg86z7gLz7rqXjLBAwjdAbMMBn22hA_71Q24CYDvPlX2sQJup2F7AgZjleZLTRedZS1qzLaaUS8Cuk-x9lKNJcGBDETM0AoTa8nP9DfDGzW9aCfKLqOJPkkuowPey6b2HMC',
          /* 'Content-Type': 'image/jpeg', */
        },
      },
    )
      .then((i) => console.log(i))
      .catch((e) => console.log(e));
  };

  /* uploadString(imageRef, image, 'base64').then((snapshot) => {
      console.log('Uploaded a blob or file!');
      global.Blob = Blob;
    }); */
  /*  }; */

  const pickImage = async () => {
    const result: ImagePicker.ExpandImagePickerResult<
      ImagePicker.ImagePickerOptions | ImagePicker.OpenFileBrowserOptions
    > = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
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
      <Button title="Send photo to Firestore" onPress={sendPhoto} />
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
