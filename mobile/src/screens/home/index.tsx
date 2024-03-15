import { Image, View, FlatList } from 'react-native';
import {useEffect, useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import logoIMG from '../../assets/LogoMobile.png'
import {useNavigation} from '@react-navigation/native'

import { styles } from './styles';
import { Header } from '@/components/Header';
import { GameCard, GameCardProps } from '@/components/GameCard';
import { Background } from '@/components/Background';

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([])
  const navigation = useNavigation();

  function handleOpenGame({id,title,bannerUrl}:GameCardProps){
    navigation.navigate('gameAds',{id,title,bannerUrl})
  }

  useEffect(() => {
    fetch('http://192.168.0.118:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  },[])

  return (

    <Background>
      <SafeAreaView style={styles.container}>
          <Image 
              source={logoIMG}
              style={styles.logo}
          />

          <Header
              title="Encontre o seu Duo"
              subtitle="Selecione o game que deseja jogar..."
          />

         <FlatList
            data={games}
            keyExtractor={item => item.id}
           renderItem={({item}) => (
              <GameCard
                data={item}
                onPress={() => handleOpenGame(item)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
          />

        

      </SafeAreaView>
    </Background>
  );
}