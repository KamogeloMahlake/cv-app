import { Input } from "./input";

export function Skills({skills, handleChange, onClick})
{
  return (
    <section>
      <h2>Skills</h2>
      <Input label='Skill Name' type='text' id='skill' value={skills.skill} onChange={e => handleChange(e, 's')}/>
      <label htmlFor="priority" style={{margin: '0.5rem'}}>Priority: 
      <select id='priority' value={skills.priority} onChange={e => handleChange(e, 's')}>
        <option defaultValue={true} value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='High'>High</option>
      </select>
      </label>
      <button onClick={() => onClick('s')}>Add Skill</button>
    </section>
  )
}
