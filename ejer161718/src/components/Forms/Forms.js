import './Forms.css'
import Cards from '../Cards/Cards';
import React, {useState} from 'react';
import Profile from '../Profile/Profile';

function About({i}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cards, setCards ] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email === '' && name === '') alert('Debes rellenar la informacion');

   const newCards = {
      name:name, 
      email:email,
    }

    const temp = [newCards, ...cards ]
    setCards(temp)

   // setCards('')
    //setEmail('')
}

function hadleChange(e) {
 setEmail(e.target.value)
 setName(e.target.value)
}

function remove(e) {
  const index = cards.indexOf(e);
  const tempContact = [...cards];
  tempContact.splice(index, 1);
  setCards(tempContact);
}


  return (
    <div className="forms-container">
      <Profile  
        name={name} 
        setName= {setName} 
        email={email} 
        setEmail={setEmail}
        cards={cards}
        setCards={setCards}
        handleSubmit={ handleSubmit }
        hadleChange = { hadleChange }
        />
        {
          
        cards.map(() => ( 
            <Cards  key={i} 
                    name={name} 
                    email={email} 
                    cards={cards}
                    remove={remove} />
        ))
        }
    </div>
  );
}

export default About;