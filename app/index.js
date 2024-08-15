import { Text, View, Image, Pressable, StyleSheet, Animated } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  const animation = new Animated.Value(0);

  const handlePress = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BABEBF'
      }}
    >

      <Text
        style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#0D0D0D', fontSize: 20 }}
      >
        Coffee with Programation
      </Text>

      <Image
        style={{
          width: 300,
          height: 300,
          borderRadius: 300
        }}
        source={require('../assets/images/cafe2.jpg')}
      />

      <Text
        style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#0D0D0D', fontSize: 20 }}
      >{'Guilherme Costa 2-C'}</Text>

      
      <Link href="/products" style={styles.button} asChild>
        <Pressable 
          onPress={handlePress}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressedButton,
          ]}
        >

          <Animated.Text
            style={[
              styles.buttonText,
              {
                transform: [
                  {
                    scale: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.9],
                    }),
                  },
                ],
              },
            ]}
          >
            Acessar Coffee WP
          </Animated.Text>

        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: '#59514F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,

  },
  pressedButton: {
    backgroundColor: '#333',
  },
  buttonText: {
    fontSize: 18,
    color: '#010101',
    fontWeight: 'bold',
  },
});