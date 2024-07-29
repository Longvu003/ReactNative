
import React from 'react';
import {
  SafeAreaView, StyleSheet
} from 'react-native';
import Bai1 from './src/Lab1/bai1';
import Test1 from './src/Test/Test1';
import CustomTaskbar from './src/Custom/CustomTaskbar';
import Main from './src/Lab2/Main';
import Stack from './src/ASM/Stack/Stack';
import TabNavigation from './src/ASM/Navigation/TabNavigation';
import Cart from './src/ASM/Screens/Cart';
import Bai1_Lab3 from './src/Lab3/Bai1_Lab3';
import Detail from './src/ASM/Screens/Detail';
import Bai1_lab4 from './src/Lab4/Bai1_lab4';
import Test2 from './src/Test/Test2';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Test2 /> */}
      <Stack />
      {/* <ScreenWelcome /> */}
      {/* <Bai1 /> */}
      {/* <Test1 /> */}
      {/* <CustomTaskbar /> */}
      {/* <Detail/> */}
      {/* <Home /> */}
      {/* <Main /> */}
      {/* <Bai1_Lab3 /> */}
      {/* <Bai1_lab4 /> */}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

});

export default App;
