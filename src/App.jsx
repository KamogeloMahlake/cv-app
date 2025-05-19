import { useState } from 'react'
import './App.css'
import { PersonalInfo } from './components/personalInfo'
import { Education } from './components/education';
import { Experience } from './components/experience';
import { NavButton } from './components/navbutton';
import { Preview } from './components/preview';
import { Skills } from './components/skills';

function App() {
  const [state, setState] = useState({
    currentView: 'Personal',
    currentPersonalInfo: {name: '', email: '', phone: ''},
    currentEducation: {school: '', study: '', stay: ''},
    currentExperience: {company: '', position: '', responsibilities: '', from: '', to: ''},
    currentSkills: {skill: '', priority: 'Low'},
    education: [],
    experience: [],
    personalInfo: {},
    skills: []
  })

  const handleChange = (e, ob) => {
    const {id, value} = e.target
    switch (ob) {
      case 'p':
        setState({...state, currentPersonalInfo: {...state.currentPersonalInfo, [id]: value}});
        break;
      case 'ed':
        setState({...state, currentEducation: {...state.currentEducation, [id]: value}});
        break;
      case 'ep':
        setState({...state, currentExperience: {...state.currentExperience, [id]: value}});
        break;
      case 's':
        setState({...state, currentSkills: {...state.currentSkills, [id]: value}});
        break;
      default:
        break;
    }
    console.log(state);
  };
  const handleAdd = (ob) => {
    switch (ob) {
      case 'p':
        setState({...state, personalInfo: state.currentPersonalInfo, currentView: 'Preview'});
        break;
      case 'ed':
        setState({...state, education: [...state.education, state.currentEducation], currentEducation: {school: '', study: '', stay: ''}});
        break;
      case 'ep':
        setState({...state, experience: [...state.experience, state.currentEducation], currentExperience: {company: '', position: '', responsibilities: '', from: '', to: ''}})
        break;
      case 's':
        setState({...state, skills: [...state.skills, state.currentSkills], currentSkills: {skill: '', priority: 'Low'}});
        break;
      default:
        break;
    }
  };
  const handleNavButton = (e) => {
    setState({...state, currentView: e.target.id});
  }

  return (
  <>
      <nav>
        <NavButton title='Preview' onClick={handleNavButton}/>
        <NavButton title='Personal'  onClick={handleNavButton}/>
        <NavButton title='Education'  onClick={handleNavButton}/>
        <NavButton title='Experience'  onClick={handleNavButton}/>
        <NavButton title='Skills'  onClick={handleNavButton}/> 
        <NavButton title='Languages'  onClick={handleNavButton}/>
        <NavButton title='Projects'  onClick={handleNavButton}/>
      </nav>
      {state.currentView === 'Preview' && <Preview info={state} />}
      {state.currentView === 'Personal' && <PersonalInfo personalInfo={state.currentPersonalInfo} handleChange={handleChange} onClick={handleAdd}/>}
      {state.currentView === 'Education' && <Education  education={state.currentEducation} handleChange={handleChange} handleAdd={handleAdd}/>}
      {state.currentView === 'Experience' && <Experience experience={state.currentEducation} handleChange={handleChange} handleAdd={handleAdd}/>}
      {state.currentView === 'Skills' && <Skills skills={state.currentSkills} handleChange={handleChange} onClick={handleAdd}/>}
  </>
  )
}
export default App
