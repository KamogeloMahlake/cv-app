export function Input({id, label, type, value, onChange})
{
  return (
  <div> 
      <input 
      required={true}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={label}
      />

  </div>
  )
}
