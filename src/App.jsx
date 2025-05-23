import { useState } from 'react'
import './App.css'
import { PersonalInfo } from './components/personalInfo'
import { Education } from './components/education';
import { Experience } from './components/experience';
import { NavButton } from './components/navbutton';
import { Preview } from './components/preview';
import { Skills } from './components/skills';
import { Languages } from './components/languages';
import { Project } from './components/projects';

function App() {
  const [state, setState] = useState({
    currentView: 'Personal',
    currentPersonalInfo: {name: '', email: '', phone: ''},
    currentEducation: {school: '', study: '', stay: '', location: ''},
    currentExperience: {company: '', position: '', responsibilities: '', from: '', to: ''},
    currentSkills: {skill: '', priority: 'Low'},
    currentLanguage: {language: '', priority: 'Low'},
    currentProject: {title: '', url: '', role: '', start: '', end: '', description: ''},
    education: [],
    experience: [],
    personalInfo: {},
    skills: [],
    languages: [],
    projects: []
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
      case 'l':
        setState({...state, currentLanguage: {...state.currentLanguage, [id]: value}});
        break;
      case 'pr':
        setState({...state, currentProject: {...state.currentProject, [id]: value}});
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
        setState({...state, education: [...state.education, state.currentEducation], currentEducation: {school: '', study: '', stay: '', location: ''}});
        break;
      case 'ep':
        setState({...state, experience: [...state.experience, state.currentExperience], currentExperience: {company: '', position: '', responsibilities: '', from: '', to: ''}})
        break;
      case 's':
        setState({...state, skills: [...state.skills, state.currentSkills], currentSkills: {skill: '', priority: 'Low'}});
        break;
      case 'l':
        setState({...state, languages: [...state.languages, state.currentLanguage], currentLanguage: {language: '', priority: 'Low'}});
        break;
      case 'pr':
        setState({...state, projects: [...state.projects, state.currentProject], currentProject: {title: '', url: '', role: '', start: '', end: '', description: ''}});
        break;
      default:
        break;
    }
  };
  const handleNavButton = (e) => {
    setState({...state, currentView: e.target.id});
  }

  const handleRemove = (id, array)  => {
    setState({...state, [array]: state[array].filter((_item, index) => index != id)});
  };
  const handlePrint = () => {
    document.querySelectorAll('button').forEach(button => button.className = 'hidden');
    print();
  };

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
      {state.currentView === 'Preview' && <Preview onClick={handlePrint} info={state} />}
      {state.currentView === 'Personal' && <PersonalInfo personalInfo={state.currentPersonalInfo} handleChange={handleChange} onClick={handleAdd}/>}
      {state.currentView === 'Education' && <Education handleRemove={handleRemove} array={state.education} education={state.currentEducation} handleChange={handleChange} handleAdd={handleAdd}/>}
      {state.currentView === 'Experience' && <Experience handleRemove={handleRemove} array={state.experience} experience={state.currentExperience} handleChange={handleChange} handleAdd={handleAdd}/>}
      {state.currentView === 'Skills' && <Skills handleRemove={handleRemove} array={state.skills} skills={state.currentSkills} handleChange={handleChange} onClick={handleAdd}/>}
      {state.currentView === 'Languages' && <Languages handleRemove={handleRemove} array={state.languages} languages={state.currentLanguage} handleChange={handleChange} onClick={handleAdd}/>}
      {state.currentView === 'Projects' && <Project handleRemove={handleRemove} array={state.projects} project={state.currentProject} handleChange={handleChange} onClick={handleAdd} />}
  </>
  )
}
export default App
