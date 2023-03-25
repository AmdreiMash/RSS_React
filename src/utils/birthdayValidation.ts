import getValue from './getValue';
function birthdayValidation(ref: React.RefObject<HTMLInputElement>) {
  const data = getValue(ref);
  if (typeof data !== 'string') return false;
  const year = Number(data.split('-')[0]);
  if (year > 2015 || year < 1940) return false;
  return data;
}
export default birthdayValidation;
