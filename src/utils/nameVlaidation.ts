import getValue from './getValue';
function nameValidation(ref: React.RefObject<HTMLInputElement>) {
  const name = getValue(ref);
  if (
    !name ||
    name.length > 30 ||
    name[0].toLowerCase() === name[0] ||
    name.includes(' ') ||
    /[0-9]/.test(name) ||
    !/[A-zА-я]/.test(name)
  )
    return false;
  return name;
}

export default nameValidation;
