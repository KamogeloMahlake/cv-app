import { DisplayTechnicalSkills } from "./display";
import { Input } from "./input";

export function Languages({languages, handleChange, onClick, array, handleRemove}) {
  return (
  <section>
      <h2>Languages</h2>
      <Input label='Language Name' type='text' id='language' value={languages.language} onChange={e => handleChange(e, 'l')}/>
      <label htmlFor="priority" style={{margin: '0.5rem'}}>Priority: 
      <select id='priority' value={languages.priority} onChange={e => handleChange(e, 'l')}>
        <option defaultValue={true} value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='High'>High</option>
      </select>
      </label>
      <button onClick={() => onClick('l')}>Add Language</button>
      {array.length > 0 && <DisplayTechnicalSkills array={array} isSkill={false} handleRemove={handleRemove}/>}
  </section>
  )
}
