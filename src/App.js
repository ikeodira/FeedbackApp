import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "./components/Header";
import FeedbackList from './components/FeedbackList';

import FeedbackStat from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

import AboutIconLink from './components/AboutIconLink';

export default function App(){
  
    

    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                            <FeedbackForm />
                            <FeedbackStat/>
                            <FeedbackList/>
                            </>
                        }/>                       
                    
                        
                        <Route path="/about" element={<AboutPage/>} />
                </Routes>

                <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

