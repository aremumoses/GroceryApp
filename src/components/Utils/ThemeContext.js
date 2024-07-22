import React, {createContext, useState, useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateDarkModeState = async newState => {
    setIsDarkMode(newState);
    try {
      await EncryptedStorage.setItem('darkMode', newState.toString());
    } catch (error) {
      console.error('Error saving dark mode state to storage:', error);
    }
  };

  useEffect(() => {
    const loadDarkModeState = async () => {
      try {
        const storedDarkMode = await EncryptedStorage.getItem('darkMode');
        if (storedDarkMode !== null) {
          setIsDarkMode(storedDarkMode === 'true');
        }
      } catch (error) {
        console.error('Error loading dark mode state from storage:', error);
      }
    };
    loadDarkModeState();
  }, []);

  return (
    <ThemeContext.Provider value={{isDarkMode, updateDarkModeState}}>
      {children}
    </ThemeContext.Provider>
  );
};
