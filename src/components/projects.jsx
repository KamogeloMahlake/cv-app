import { Input } from "./input";

export function Project({project, handleChange, onClick}) {
  return (
  <section>
      <h2>Project</h2>
      <Input label='Project Name' type='text' id='title' value={project.title} onChange={e => handleChange(e, 'pr')}/>
      <Input label='Project URL' type='url' id='url' value={project.url} onChange={e => handleChange(e, 'pr')}/>
      <Input label='Role' type='text' id='role' value={project.role} onChange={e => handleChange(e, 'pr')}/>
      <textarea cols={25} rows={6} id='description' value={project.description} onChange={e => handleChange(e, 'pr')} placeholder="Description"></textarea>
      <label htmlFor="start">From: <Input label='From' type='date' id='start' value={project.start} onChange={e => handleChange(e, 'pr')}/></label>
      <label htmlFor="end">To:
      <Input label='end' type='date' id='end' value={project.end} onChange={e => handleChange(e, 'pr')}/></label>
      <button onClick={() => onClick('pr')}>Add Project</button>
  </section>
  )
}
