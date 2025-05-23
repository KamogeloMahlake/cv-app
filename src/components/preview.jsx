import { DisplayEducation, DisplayExperience, DisplayProjects, TechnicalSkills } from "./display";

export function Preview({info, onClick})
{
  return (
    <div>
      <button onClick={onClick}>Print</button>
      <div>
        <h1>{info.personalInfo.name}</h1>
        <div>
          <p>{info.personalInfo.phone} | <a>{info.personalInfo.email}</a></p>
        </div>
      </div>
      {info.education.length > 0 && <DisplayEducation isPreview={true} education={info.education} /> }
      {info.experience.length > 0 && <DisplayExperience isPreview={true}  experience={info.experience}/>}
      {(info.skills.length > 0 && info.languages.length > 0) && <TechnicalSkills skills={info.skills}  languages={info.languages}/>}
      {info.projects.length > 0 && <DisplayProjects isPreview={true} array={info.projects} />}
    </div>
);
}
