import { DisplayEducation } from "./display";

export function Preview({info})
{
  return (
    <div>
      <div>
        <h1>{info.personalInfo.name}</h1>
        <div>
          <p>{info.personalInfo.phone} | <a>{info.personalInfo.email}</a></p>
        </div>
      </div>
      {info.education && <DisplayEducation education={info.education} /> }
    </div>
);
}
