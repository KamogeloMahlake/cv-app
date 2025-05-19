import { Input } from "./input";

export function PersonalInfo({personalInfo, handleChange, onClick}) {
  return (
  <section>
      <h2>Personal Infomation</h2>
      <Input required={true} label='Name' id='name' type='text' value={personalInfo.name} onChange={e => handleChange(e, 'p')} />
      <Input required={true} label='Email' id='email' type='email' value={personalInfo.email} onChange={e => handleChange(e, 'p')} />
      <Input required={true} label='phone' id='phone' type='tel' value={personalInfo.phone} onChange={e => handleChange(e, 'p')} />
    <button onClick={() => onClick('p')} >Submit</button> 
  </section>
  )
}
