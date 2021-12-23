import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Screen from './components/Screen';
import Screen2 from './components/Screen2';
import Screen24 from './components/Screen24';
import Screen8 from './components/Screen8';
import Screen3 from './components/Screen3';
import Screen11 from './components/Screen11';
import Screen13 from './components/Screen13';
import Screen9 from './components/Screen9';
import Screen12 from './components/Screen12';
import Screen19 from './components/Screen19';
import Screen20 from './components/Screen20';
import Screen21 from './components/Screen21';
import Screen23 from './components/Screen23';
import Screen4 from './components/Screen4';
import Screen5 from './components/Screen5';
import Screen6 from './components/Screen6';
import Screen7 from './components/Screen7';
import Screen10 from './components/Screen10';
import Screen25 from './components/Screen25';
import Screen26 from './components/Screen26';
import Screen27 from './components/Screen27';
import Screen28 from './components/Screen28';
import Screen29 from './components/Screen29';
import Screen22 from './components/Screen22';
import Screen16 from './components/Screen16';
import Screen18 from './components/Screen18';
import Screen14 from './components/Screen14';
import Screen15 from './components/Screen15';
import Screen17 from './components/Screen17';
function App() {
  return (
    <div>
       {/* <Screen/>  */}
          {/* <Screen2/> */}
         {/* <Screen24/> */}
        {/* <Screen8/> */}
        {/* <Screen3/> */}
        {/* <Screen11/> */}
        {/* <Screen13/> */}
        {/* <Screen9/> */}
        {/* <Screen12/> */}
        {/* <Screen19/> */}
        {/* <Screen20/> */}
         {/* <Screen21/>  */}
        {/* <Screen23/> */}
         {/* <Screen4/>  */}
         {/* <Screen5/> */}
          {/* <Screen6/>  */}
         {/* <Screen7/> */}
          {/* <Screen10/>  */}
         {/* <Screen25/> */}
         {/* <Screen26/> */}
         {/* <Screen27/> */}
         {/* <Screen28/> */}
          {/* <Screen29/>  */}
         {/* <Screen22/> */}
         {/* <Screen16/> */}
         {/* <Screen18/> */}
         {/* <Screen14/> */}
         {/* <Screen15/> */}
         {/* <Screen17/> */}
         <BrowserRouter>
         <Routes>
           <Route path="/" element={<Screen/>}></Route>
           <Route path="/screen2" element={<Screen2/>}></Route>
           <Route path="/screen3" element={<Screen3/>}></Route>
           <Route path="/screen4" element={<Screen4/>}></Route>
           <Route path="/screen5" element={<Screen5/>}></Route>
           <Route path="/screen6" element={<Screen6/>}></Route>
           <Route path="/screen7" element={<Screen7/>}></Route>
           <Route path="/screen8" element={<Screen8/>}></Route>
           <Route path="/screen9" element={<Screen9/>}></Route>
           <Route path="/screen10" element={<Screen10/>}></Route>
           <Route path="/screen11" element={<Screen11/>}></Route>
           <Route path="/screen12" element={<Screen12/>}></Route>
           <Route path="/screen13" element={<Screen13/>}></Route>
           <Route path="/screen14" element={<Screen14/>}></Route>
           <Route path="/screen15" element={<Screen15/>}></Route>
           <Route path="/screen16" element={<Screen16/>}></Route>
           <Route path="/screen17" element={<Screen17/>}></Route>
           <Route path="/screen18" element={<Screen18/>}></Route>
           <Route path="/screen19" element={<Screen19/>}></Route>
           <Route path="/screen20" element={<Screen20/>}></Route>
           <Route path="/screen21" element={<Screen21/>}></Route>
           <Route path="/screen22" element={<Screen22/>}></Route>
           <Route path="/screen23" element={<Screen23/>}></Route>
           <Route path="/screen24" element={<Screen24/>}></Route>
           <Route path="/screen25" element={<Screen25/>}></Route>
           <Route path="/screen26" element={<Screen26/>}></Route>
           <Route path="/screen27" element={<Screen27/>}></Route>
           <Route path="/screen28" element={<Screen28/>}></Route>
           <Route path="/screen29" element={<Screen29/>}></Route>

           
         </Routes>
         
         </BrowserRouter>
        


    </div>
  );
}

export default App;
