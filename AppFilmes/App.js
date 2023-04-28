import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [filmes, setFilmes] = useState([]);

  const url = 'https://api.otaviolube.com/api/filmes?populate=*';
  const baseURL = 'https://api.otaviolube.com';

  const image = {uri: 'https://static.vecteezy.com/system/resources/previews/003/715/887/original/black-background-with-gray-gothic-letters-gloomy-pattern-for-text-and-fabric-vector.jpg'};

  useEffect(function(){
    fetch(url).then(data => data.json()).then(objeto => {
        console.log(objeto);
        setFilmes(objeto.data);
      })
  }, []);
  return (
    <View style={styles.container}>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      {filmes.length > 0 ? filmes.map(filme =>

      <View style={styles.card}>

        <Image style={styles.imagem} source={{uri: baseURL + filme.attributes.poster.data.attributes.url}}/>
         
          <View style={styles.texto}>

            <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
            <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>

              <View style={styles.caixaBotao}>
                <Button title='comprar' color='black' />
              </View>

          </View>

      </View>

      ) :
        <View style={styles.ActivityIndicator}>
        <ActivityIndicator size='large' color='white'></ActivityIndicator>
        </View>
        }

        </ImageBackground>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201E20',
   
  },
  texto:{
    flexDirection: 'column',
    textAlign: 'justify',
    maxWidth: '70%',
    alignItems: 'center'
  },
  card:{
    flexDirection: 'row',
    padding: '20px',
    margin: '10px',
    borderWidth: '8px',
    borderRadius: '30px',
    borderColor: 'white',
    backgroundColor: '#DDC3A5',
  },
  ActivityIndicator:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  caixaBotao: {
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
    marginTop: '8%',
    borderRadius: '30px',
  },
  imagem:{
    width: '25%',
    height: '100%',
    marginRight: '4%',
    borderRadius: '15px'
  },
  titulo:{
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#900C3F',
    paddingBottom: '3%'
  },
  sinopse:{
    alignItems: 'center',
    fontFamily: 'Verdana'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});