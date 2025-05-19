import { Input } from "./input";

export function Experience({experience, handleChange, handleAdd}) {
  return (
  <section>
      <h2>Experience</h2>
      <Input label='Company Name' required={false} type='text' id='company' value={experience.company} onChange={e => handleChange(e, 'ep')}/>
      <Input label='Position' required={false} type='text' id='position' value={experience.position} onChange={e => handleChange(e, 'ep')}/>
        <textarea cols={25} rows={6} id='responsibilities' value={experience.responsibilities} onChange={e => handleChange(e, 'ep')} placeholder="Responsibilities"></textarea>
      <label htmlFor="from">From: <Input label='From' type='date' required={false} id='from' value={experience.from} onChange={e => handleChange(e, 'ep')}/></label>
      <label htmlFor="to">To:
      <Input label='To' type='date' required={false} id='to' value={experience.to} onChange={e => handleChange(e, 'ep')}/></label>
      <button onClick={() => handleAdd('ep')}>Add Job</button>
  </section>
  )
}
