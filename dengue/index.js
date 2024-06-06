import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.nav}>
        <Text style={styles.logo}>CHURRASCARIA BOMBOIDI</Text>
        <View style={styles.menu}>
          <Text style={styles.menuItem}>Menu</Text>
          <Text style={styles.menuItem}>Reservas</Text>
          <Text style={styles.menuItem}>Localização</Text>
          <Text style={styles.menuItem}>Contato</Text>
        </View>
      </View>
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>TRADIÇÃO EM CHURRASCO</Text>
        <Text style={styles.aboutText}>Na Bomboidi, o churrasco é mais do que uma refeição; é uma celebração da tradição e da arte de cozinhar carne de forma autêntica. Venha desfrutar da tradição em churrasco, onde a arte de grelhar se mistura com a arte de convivência, proporcionando uma experiência única.</Text>
      </View>
      <View style={styles.foto}>
        <Image source={require('./carne-removebg-preview.png')} style={styles.fotoImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'linear-gradient(90deg, #020202, #ff0000)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 100,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  menuItem: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  about: {
    color: '#fff',
    width: 300,
    height: 0,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 300,
    marginRight: 900,
  },
  aboutTitle: {
    fontSize: 24,
  },
  aboutText: {
    fontSize: 16,
    marginTop: 20,
  },
  foto: {
    width: '100%',
    height: 300,
  },
  fotoImage: {
    width: '100%',
    height: '100%',
  },
});

export default App;
