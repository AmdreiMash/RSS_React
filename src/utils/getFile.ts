import { Ref } from '../Types/Types';

function getFile(ref: Ref) {
  return ref && ref.current && ref.current.files ? ref.current.files[0] : false;
}

export default getFile;
