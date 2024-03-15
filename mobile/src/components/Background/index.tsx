import { ImageBackground } from 'react-native';

import backgroundIMG from '../../assets/backgroundMobile.png'

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Background({children}:Props) {
  return (
    <ImageBackground
        source={backgroundIMG}
        style={styles.container}
        defaultSource={backgroundIMG}
    >
        {children}
    </ImageBackground>
  );
}