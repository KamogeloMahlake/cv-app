export function Preview({info})
{
  return (
    <div>
      <h1>{info.personalInfo.name}</h1>
      {info.education && 
      info.education.map((item) => <div>{item.school}</div>)
      }
    </div>
);
}
