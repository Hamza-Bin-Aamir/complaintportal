import './App.css';
import './env';
import { useState } from 'react';
import Form from './form';
import Submitted from './submitted';
import Footer from './footer';
import AppContext from './env';
import angy from './images/angy.png';


function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (formData: FormData) => {
    // TODO: implement your custom logic here (e.g., send to backend)
    console.log('Form submitted with data:', Object.fromEntries(formData));
    
    // mark as submitted to show success message
    setIsSubmitted(true);
  };

  return (
    <div className="App">
      <header>
        <div className="Header-Item">
            <img src={angy} alt="Angy" id='AngyImage' /> <AppContext /> complaint portal
        </div>
      </header>
      <div className="Form2">
        <p>hullo! pls fill this form and your complaint will be submitted.</p>
        <p><small><i>pls note that complaints may take up to 20 business years to be fulfilled.</i></small></p>
        {isSubmitted ? <Submitted /> : <Form onSubmit={handleFormSubmit} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;