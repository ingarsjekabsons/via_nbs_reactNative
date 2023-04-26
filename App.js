import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Modal, Button, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import FormLauncher from './FormLauncher';
import Form from './Form';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [isAuthorised, setAuthorised] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [userName, setUserName] = useState("");

  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '772164726833-o5nq75vqvh17t0uv0a62tnufnl1e5fol.apps.googleusercontent.com',
    iosClientId: '772164726833-bem2ifmolgnnk0ibmk1dmka8i825bnb7.apps.googleusercontent.com',
    webClientId: '772164726833-gjbn243f93muegsb0ivegucmaetpr1ub.apps.googleusercontent.com',
    expoClientId: '772164726833-sefgvqhhi8n215h5cap3k13dkanr9a5j.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const doStuff = () => {
    console.log("Click!");
    setFormOpen(true);
    console.log(isFormOpen);
  }

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
      setUserName(user.name);
      setAuthorised(true)
    } catch (error) {
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetings}>Sveicināti NBS lietotnē{ isAuthorised ? ", " + userName : "" }!</Text>

      </View>
      <View>
        <Image style={{width:  100, height: 100}} source={require('./assets/nbs_logo.jpg')} />
      </View>
       {!isAuthorised && <>
          <View style={{marginTop: 40, marginBottom: 30}}>
            <Text>Pierakstieties izmantojot kādu no identitātes servisiem</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.buttonGoogleStyle} activeOpacity={0.5} onPress={ () => promptAsync() } >
              <Image style={styles.buttonImageIconStyle} source={require('./assets/google.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFacebookStyle} activeOpacity={0.5}>
              <Image style={styles.buttonImageIconStyle} source={require('./assets/facebook.png')} />
            </TouchableOpacity>
          </View>
        </>
      }
      <View style={{marginTop: 30}}>
        <FormLauncher title="Aizpildīt pieteikuma formu" disabled={!isAuthorised} onPress={ doStuff }/>
      </View>
      <View>
        <Modal visible={isFormOpen}>
          <Form vards={userInfo?.given_name} uzvards={userInfo?.family_name} />
          <Button title="Aizvērt" onPress={ () => setFormOpen(false)}/>
        </Modal>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonGoogleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 70,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: 'black',
    marginBottom: 4,
    marginLeft: 10,
  },
  greetings: {
    color: 'black',
    fontSize: 20,
  },
});
