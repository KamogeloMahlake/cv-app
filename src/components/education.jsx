import { Input } from "./input";

export function Education({education, handleChange, handleAdd}) {
  return (
  <section>
      <h2>Education</h2>
      <Input id='school' value={education.school} onChange={e => handleChange(e, 'ed')} required={false} label='School/University/College'  type='text'/>
      <Input id='study' value={education.study} onChange={e => handleChange(e, 'ed')}required={false} label='Title of Study' type='text'/>
      <Input id='stay' value={education.stay} onChange={e => handleChange(e, 'ed')} required={false} label='Length of stay' type='text' />
      <button onClick={() => handleAdd('ed')} >Add Education</button>
  </section>
  )
}
