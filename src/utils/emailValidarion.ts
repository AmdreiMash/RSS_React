import getValue from './getValue';

const regExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

function emailValidation(ref: React.RefObject<HTMLInputElement>) {
  const email = getValue(ref);
  if (!email || !regExp.test(email) || email.includes(' ')) return false;
  return email;
}

export default emailValidation;
