function getValue(ref: React.RefObject<HTMLInputElement | HTMLSelectElement>) {
  return ref.current && ref.current.value && ref.current.value !== '' ? ref.current.value : false;
}

export default getValue;
