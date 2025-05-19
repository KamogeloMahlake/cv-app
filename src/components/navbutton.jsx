export function NavButton({title, onClick}) {

  return (
  <button id={title} onClick={onClick}>
    {title}
  </button>
  );
  
}
