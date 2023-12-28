// import logo from './logo.svg';
import './App.css';
import Gallery, { Avatar } from './Pages/Gallery'   // First type -  Display Gallery Section images
import {Profile} from './Pages/Gallery' // second type - Display Profile image 


export default function App()
{
  return(
  <>
    <Profile/>
      {/* Export File Include - two types of attachment */}
    <Gallery/>
    <Avatar/>
    </>
  
  );
}

