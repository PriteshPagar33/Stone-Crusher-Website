import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavbarC from './Stone_Crusher/NavbarC';
import Home from './Stone_Crusher/Home';
import AboutC from './Stone_Crusher/AboutC';
import TeamsC from './Stone_Crusher/TeamsC';
import GalleryC from './Stone_Crusher/GalleryC';
import ContactC from './Stone_Crusher/ContactC';
import FooterC from './Stone_Crusher/FooterC';

// import Machine from './Stone_Crusher/components/detailinfo';

import MachinePage from './Stone_Crusher/pages/Machine';
import ConeCrushers from './Stone_Crusher/pages/ConeCrushers';
import Jawcrusher from './Stone_Crusher/pages/jawCrusher';
import Feeder from './Stone_Crusher/pages/Feeders';
import Hopper from './Stone_Crusher/pages/Hopper';
import  VerticalShaftImpactor from './Stone_Crusher/pages/VerticalShaftImpactors';
import VibratingScreens from './Stone_Crusher/pages/VibratingScreens';


import ServicesPage from './Stone_Crusher/components/Stoneservices';
import Aggregate from './Stone_Crusher/components/Aggregate';
import Aggregate10mm from './Stone_Crusher/components/Aggregate10mm';
import Aggregate20mm from './Stone_Crusher/components/Aggregate20mm'
import Aggregate30mm from './Stone_Crusher/components/Aggregate30mm';
import Artificialsand from './Stone_Crusher/components/Artificialsand';
import Washedsand from  './Stone_Crusher/components/Washedsand';

import TermsOfUse from './Stone_Crusher/TermsofUse';
import PrivacyPolicy from './Stone_Crusher/privacyPolicy';
import ModifiedAccordion from './Stone_Crusher/faqsmodify';
import CookiesPolicy from './Stone_Crusher/cookiesPolicy';
import CookiesNotify from './Stone_Crusher/cookiesNotify';
import Helps from './Stone_Crusher/Help';
import PhoneCallButton from './Stone_Crusher/PhonecallBtn';
import './Stone_Crusher/PhoneCallButton.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
                    
                    <CookiesNotify/>
                          <NavbarC/>
                          
                        <Routes>
                            <Route path="/" element={<Home/>}/>    
                            <Route path="aboutpage" element={<AboutC/>}/>                 
                            <Route path="servicepage" element={<ServicesPage/>}/>       
                            <Route path="teampage" element={<TeamsC/>}/>                
                            <Route path="gallerypage" element={<GalleryC/>}/>           

                            <Route path="machinepage/" element={<MachinePage/>}/>  
                            <Route path="feederpage" element={<Feeder/>}/>                 
                            <Route path="conepage" element={<ConeCrushers/>}/>                 
                            <Route path="jawpage" element={<Jawcrusher/>}/>                 
                            <Route path="hopperpage" element={<Hopper/>}/>                 
                            <Route path="vsipage" element={<VerticalShaftImpactor/>}/>   
                            <Route path="vibpage" element={<VibratingScreens/>}/>     

                              <Route path="servicepage" element={<ServicesPage />} />
                            <Route exact path='/Aggregate' element={<Aggregate/>}/>
                            <Route path="/Aggregate10mm" element={<Aggregate10mm />} />
                            <Route path="/Aggregate20mm" element={<Aggregate20mm/>} />
                            <Route path="/Aggregate30mm" element={<Aggregate30mm />} />
                            <Route path="/Washedsand" element={<Washedsand />} />
                            <Route path="/Artificialsand" element={<Artificialsand />} />            

                            <Route path="/contactpage" element={<ContactC/>}/>                 
                            <Route path="/terms-of-use" element={<TermsOfUse/>}/> 
                            <Route path="/faqs" element={<ModifiedAccordion/>}/> 
                            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/> 
                            <Route path="/cookies-policy" element={<CookiesPolicy/>}/> 
                            <Route path="/help" element={<Helps/>}/> 

                       </Routes> 
                       
                        <FooterC/>
                    </BrowserRouter> 
    </div>
  );
}

export default App;
