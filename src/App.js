import './App.css';
import React, {useState, useEffect,} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Enterprise from './screens/Enterprise';
import Schedule from './screens/Schedule';
import Login from './screens/Login'
import RegistrationTwo from './screens/RegistrationTwo';
// import BiddingPage from './screens/BiddingPage';
import BiddingPageTwo from './screens/BiddingPageTwo';
// import Spinner from './components/Spinner';
import TrackingPage from './components/TrackingPage';
import ExportPdfComponent from './components/PdfComponent';
// import SetDataToContext from './screens/SetDataToContext'
import TestinContext from './screens/TestinContext';
import SelectedBookingContext from './context/SelectedBooking'
import {UserContext} from './context/NewContext';
import {AllPricesContext} from './context/SelectAllPricesContext'
import {SelectedTotal} from './context/SelectedTotal'
import {AllBookingsContext} from './context/AllBookingsContext'
import Dashboard from './screens/Dashboard';
import Cargo from './components/Cargo';
import Myfleet from './components/Myfleet';
import Myreferrals from './components/Myreferrals';
import Profile from './components/Profile';
import Analysis from './components/Analysis';
import Wallet from './components/Wallet';
import ContactLink from './components/ContactLink';

function App() {
  // const [allbookingsValue, setAllBookingsValue] = useState('hello from context')
  // const {allBookingValue, setAllBookingValue}  = useContext(AllBookingsContext)
  const [selectedValue, setSelectedValue] = useState('hello from context')
  const [allPricesValue, setAllPricesValue] = useState('hello from context')
  const [selectedTotalValue, setSelectedTotalValue] = useState('hello from context')

  return (
    <div className='app'>
        <BrowserRouter>
        {/* <AllBookingsContext.Provider value={{allbookingsValue, setAllBookingsValue}}> */}
        <SelectedTotal.Provider value={{selectedTotalValue, setSelectedTotalValue}}>
        <AllPricesContext.Provider value={{allPricesValue, setAllPricesValue}}>
        <UserContext.Provider value={{selectedValue, setSelectedValue}}>
          <Routes>
            <Route exact path='/enterprise' element={<Enterprise />} />
            <Route exact path='/schedule' element={<Schedule />} />
            <Route exact path='/Login' element={<Login />} />
            <Route exact path='/registration' element={<RegistrationTwo />} />
            <Route exact path='/bidding' element={<BiddingPageTwo />} />
            <Route exact path='/tracking' element={<TrackingPage />} />  
            <Route exact path='/dashboard' element={<Dashboard />} />                        
            <Route exact path='/pdfexport' element={<ExportPdfComponent />} />
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/fleet' element={<Myfleet />} />
            <Route exact path='/referals' element={<Myreferrals />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/analysis' element={<Analysis />} />
            <Route exact path='/wallet' element={<Wallet />} />
            <Route exact path='/cargo' element={<Cargo />} />
            <Route exact path='/contactLink' element={<ContactLink />} />
            {/* <Route exact path='/setdata' element={<SetDataToContext />} /> */}
          </Routes>
        </UserContext.Provider>
        </AllPricesContext.Provider>
        </SelectedTotal.Provider>
        {/* </AllBookingsContext.Provider> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
