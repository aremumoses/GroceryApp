import { AppState, Alert, ToastAndroid, InteractionManager } from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import StartLearningScreen from '../screens/Students/Home/StartLearningScreen';
import PracticeScreen from '../screens/Students/Home/PracticeScreen';
import PerformanceScreen from '../screens/Students/Home/PerformanceScreen';
import MyInstitutionScreen from '../screens/Students/Home/MyInstitutionScreen';
import MyClassRoomScreen from '../screens/Students/Home/MyClassRoomScreen';
import LeaderBoardScreen from '../screens/Students/Home/LeaderBoardScreen';
import ClassroomActivityScreen from '../screens/Students/Home/ClassroomActivityScreen';
import AssignmentSubmissionScreen from '../screens/Students/Home/AssignmentSubmissionScreen';
import SelectClassScreen from '../screens/Students/Home/SelectClassScreen';
import JoinInstitutionScreen from '../screens/Students/Home/JoinInstitutionScreen';
import LessonSearchScreen from '../screens/Students/Lesson/LessonSearchScreen';
import TermandConditionScreen from '../screens/Students/Account/TermandConditionScreen';
import SecurityScreen from '../screens/Students/Account/SecurityScreen';
import NotificationScreen from '../screens/Students/Account/NotificationScreen';
import LanguageScreen from '../screens/Students/Account/LanguageScreen';
import HelpCenter from '../screens/Students/Account/HelpCenter';
import EditProfileScreen from '../screens/Students/Account/EditProfileScreen';
import TransactionPin from '../screens/Students/Account/TransactionPin';
import LessonCurriculum from '../screens/Students/Lesson/LessonCurriculum';
import LessonOverview from '../screens/Students/Lesson/LessonOverview';
import StartLesson from '../screens/Students/Lesson/StartLesson';
import LessonScreen from '../screens/Students/Lesson/LessonScreen';
import QuestionScreen from '../screens/Students/Home/PracticeScreen/QuestionScreen';
import PerformanceDetails from '../screens/Students/Home/PerformanceDetails';
import Chat from '../screens/Students/Chat/Chat';




const inactiveTimeInMinute = 5
const millisecToMins = 60000


const StudentsStack = () => {
  const Stack = createNativeStackNavigator();

  const navigation = useNavigation();


  // const [appStateVisible, setAppStateVisible] = useState(AppState.currentState);
  const sessionTimeoutRef = useRef(null);
  const alertShownRef = useRef(false);


  const appState = useRef(AppState.currentState)
  const [appStateVisibl, setAppStateVisible] = useState(appState.current)

const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Session Timeout!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }; 

  const onAppStateChange = useCallback(
    async (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        const storedInactiveTime = await EncryptedStorage.getItem('inactiveTime')
        const previousInactiveTime = parseInt(storedInactiveTime) || 0
        const differenceInElapsedTime = Date.now() - previousInactiveTime

        console.log('====================================');
        console.log({previousInactiveTime});
        console.log({differenceInElapsedTime});
        console.log('====================================');
      

        if (differenceInElapsedTime > 0) {
          const backgroundElapsedTime = Math.floor(differenceInElapsedTime / millisecToMins)
          console.log('====================================');
          console.log({backgroundElapsedTime});
          console.log('====================================');

          if (backgroundElapsedTime >= inactiveTimeInMinute) {
            FetchToken()
          }
        }
      }

      if (nextAppState === 'background') {
        await EncryptedStorage.setItem('inactiveTime', Date.now().toString())
      }

      appState.current = nextAppState
      setAppStateVisible(appState.current)
    },
    []
  )




  return (
    <Stack.Navigator
      //   initialRouteName='Auth'
      screenOptions={{
        headerShown: false,
      }}>
        
      {/* BOTTOM TAB */}
      <Stack.Screen name="BottomTab" component={BottomTab} />

      {/* HOME SCREEN */}
      <Stack.Screen name="StartLearningScreen" component={StartLearningScreen} />
      <Stack.Screen name="PracticeScreen" component={PracticeScreen} />
      <Stack.Screen name="PerformanceScreen" component={PerformanceScreen} />
      <Stack.Screen name="MyInstitutionScreen" component={MyInstitutionScreen} />
      <Stack.Screen name="MyClassRoomScreen" component={MyClassRoomScreen} />
      <Stack.Screen name="LeaderBoardScreen" component={LeaderBoardScreen} />

      <Stack.Screen name="ClassroomActivityScreen" component={ClassroomActivityScreen} />
      <Stack.Screen name="AssignmentSubmissionScreen" component={AssignmentSubmissionScreen} />
      <Stack.Screen name="SelectClassScreen" component={SelectClassScreen} />
      <Stack.Screen name="JoinInstitutionScreen" component={JoinInstitutionScreen} />
      <Stack.Screen name="LessonSearchScreen" component={LessonSearchScreen} />

      {/* Account Screens */}
      <Stack.Screen name="TermandConditionScreen" component={TermandConditionScreen} />
      <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="TransactionPin" component={TransactionPin} />

      {/* Lesson Screen */}
      <Stack.Screen name="LessonCurriculum" component={LessonCurriculum} />
      <Stack.Screen name="LessonOverview" component={LessonOverview} />
      <Stack.Screen name="StartLesson" component={StartLesson} />
      <Stack.Screen name="LessonScreen" component={LessonScreen} />


      <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      <Stack.Screen name="PerformanceDetails" component={PerformanceDetails} />
      <Stack.Screen name="Chat" component={Chat} />







    </Stack.Navigator>
  );
};


export default StudentsStack;











