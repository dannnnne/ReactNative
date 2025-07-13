import { StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import { useState } from 'react';
import Numbercontainer from '../components/game/NumberContainer';
import PrimaryButtons from '../components/ui/PrimaryButton';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

export default function GameScreen() {
  const initialGuess = generateRandomBetween(1, 100, useNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Numbercontainer>{currentGuess}</Numbercontainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButtons>+</PrimaryButtons>
          <PrimaryButtons>-</PrimaryButtons>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
