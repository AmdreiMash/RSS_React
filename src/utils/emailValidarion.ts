import getValue from './getValue';

const regExp = new RegExp(/^\S+@\S+\.\S+$/);

function emailValidation(ref: React.RefObject<HTMLInputElement>) {
  const email = getValue(ref);
  if (!email || !regExp.test(email)) return false;
  return email;
}

export default emailValidation;
