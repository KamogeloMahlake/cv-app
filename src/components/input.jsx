export function Input({required, id, label, type, value, onChange})
{
  return (
  <div> 
      <input 
      required={required}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={label}
      />

  </div>
  )
}
