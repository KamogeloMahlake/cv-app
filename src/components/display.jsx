export function DisplayEducation({education, handleRemove, isPreview}) {
  return (
  <div>
      <h3 className="align">Education</h3>
      <hr />
      {education.map(({school, study, stay, location}, index) => {
      return (
      <div className="align" key={index}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <p style={{fontWeight: 'bold'}}>{school}</p>
          <p>{location}</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <p><em>{study}</em></p>
          <p><em>{stay}</em></p>
        </div>
        {!isPreview && <button onClick={() => handleRemove(index, 'education')}>Remove Education</button>}
      </div>)
      })}
  </div>
  );
}

export function DisplayExperience({experience, handleRemove, isPreview}) {
  return (
  <div>
      <h3>Experience</h3>
      <hr />
      {experience.map(({company, position, responsibilities, from, to}, index) => {
        return (
        <div className="align" key={index}>
          <div style={{display: 'flex'}}>
              <p><strong>{company}</strong> | <em>{position}</em> : </p>
              <p>{responsibilities}</p>
          </div>
          <p>From: <em>{from}</em> To: <em>{to}</em></p>
          {!isPreview && <button onClick={() => handleRemove(index, 'experience')}>Remove Experience</button>}
        </div>
        )
      })}
  </div>
  );
}

export function TechnicalSkills({skills, languages}) {
  return (
  <div>
      <h3>Technical Skills</h3>
      <hr />
      {languages.length > 0 && <p>Languages: {languages.map(({language}, index) => languages.length === 1 || languages.length - index != 1  ? language : `and ${language}`).join(', ')}</p>}

      {skills.length > 0 && <p>Skills: {skills.map(({skill}, index) => skills.length === 1 || skills.length - index != 1  ? skill : `and ${skill}`).join(', ')}</p>} 
  </div>

  );
}

export function DisplayTechnicalSkills({array, isSkill, handleRemove}) {
  const heading = isSkill ? 'Skill' : 'Language'

  return (
  <table>
      <thead>
        <tr><th>{heading}</th><th>Priority</th><th>Action</th></tr>
      </thead>
      <tbody>
      {array.map(({skill, priority, language}, index) => {
        return (
        <tr key={index}>
          <td>{skill ?? language}</td>
          <td>{priority}</td>
          <td><button onClick={() => handleRemove(index, isSkill ? 'skills' : 'languages' )} id={index}>Remove</button></td>
        </tr>
        )
      })}
      </tbody>

  </table>
  );

}

export function DisplayProjects({array, handleRemove, isPreview}) {
  return (
  <div>
      <h3>Projects</h3>
      {array.map(({title, url, role, start, end, description}, index) => {
        return (
        <div key={index}>
          <div>
              <p><strong>{title}</strong> | <em>{role}</em></p>
              <p>{description}</p>
          </div>
          <div>
              <a>URL: {url}</a>
              <p>From: <em>{start}</em> To: <em>{end}</em></p>
          </div>
          {!isPreview && <button onClick={() => handleRemove(index, 'projects')}>Remove Project</button>}
        </div>
        )
      })}

  </div>
  )
}
