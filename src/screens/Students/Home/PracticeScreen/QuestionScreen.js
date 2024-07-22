import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../../../../constants';
import { FormButton } from '../../../../components/Button/FormButton';
import AppHeader from '../../../../components/Header/AppHeader';

const QuestionScreen = () => {
  
    const questions = [
      {
        number: 1,
        detail: "What is the capital of France?",
        options: [
          { label: "A", text: "Berlin", isCorrect: false },
          { label: "B", text: "Madrid", isCorrect: false },
          { label: "C", text: "Paris", isCorrect: true },
          { label: "D", text: "Rome", isCorrect: false },
        ],
      },
      {
        number: 2,
        detail: "What is the largest planet in our Solar System?",
        options: [
          { label: "A", text: "Earth", isCorrect: false },
          { label: "B", text: "Mars", isCorrect: false },
          { label: "C", text: "Jupiter", isCorrect: true },
          { label: "D", text: "Saturn", isCorrect: false },
        ],
      },
      // Add more questions here
    ];
  
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showCorrect, setShowCorrect] = useState(false);
  
    const currentQuestion = questions[currentQuestionIndex];
  
    const handleOptionPress = (option) => {
      setSelectedOption(option);
      setShowCorrect(true);
    };
  
    const handleNextQuestion = () => {
      setSelectedOption(null);
      setShowCorrect(false);
      setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };
  
    const getBorderColor = (option) => {
      if (!showCorrect) return 'black';
      if (option === selectedOption) {
        return option.isCorrect ? 'green' : 'red';
      }
      if (selectedOption && !selectedOption.isCorrect && option.isCorrect) {
        return 'orange';
      }
      return 'black';
    };
  
  const getIconSource = (option) => {
    if (!showCorrect) return icons.circlee;
    if (option === selectedOption) {
      return option.isCorrect ?icons.correct: icons.incorrect;
    }
    if (option.isCorrect) {
      return icons.correct;
    }
    return icons.circlee;
  };
  return (
    <View style={styles.container}>
      <AppHeader
     title={'Practice Questions'}
     />

<View style={{paddingHorizontal:SIZES.base*2}}>
      <Text style={styles.questionNumber}>Question {currentQuestion.number}</Text>
      <Text style={styles.questionDetail}>{currentQuestion.detail}</Text>
      {currentQuestion.options.map((option) => (
        <TouchableOpacity
          key={option.label}
          style={[styles.optionContainer, { borderColor: getBorderColor(option) }]}
          onPress={() => handleOptionPress(option)}
          disabled={showCorrect}
        >
          <View style={styles.optionContent}>
            <Text style={[
              styles.optionLabel,
              option.isCorrect && showCorrect ? styles.correctOptionText : null
            ]}>
              {option.label}
            </Text>
            <Text style={[
              styles.optionText,
              option.isCorrect && showCorrect ? styles.correctOptionText : null
            ]}>
              {option.text}
            </Text>
            <Image
              source={getIconSource(option)}
              style={styles.optionIcon}
            />
          </View>
        </TouchableOpacity>
      ))}
   
   {showCorrect && (
<View style={{marginTop:SIZES.h1}}>
<FormButton
title={'continue'}
onPress={handleNextQuestion}/>

</View>
)}
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  questionNumber: {
    ...FONTS.h2,
    color:COLORS.black,
    marginBottom: 10,
  },
  questionDetail: {
    ...FONTS.h3,
    lineHeight:SIZES.base*3,
    color:COLORS.black,
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 0.7,
    borderRadius: 5,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionLabel: {
    ...FONTS.body4,
    marginRight: 10,
  },
  optionText: {
    ...FONTS.body3,
    color:COLORS.black,
    flex: 1,
  },
  optionIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  correctOptionText: {
    fontWeight: 'bold',
    color: 'green',
  },
});

export default QuestionScreen;