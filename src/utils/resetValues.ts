function resetValues(values: React.RefObject<HTMLInputElement>[]) {
  values.forEach((value) =>
    value && value.current && value.current.value ? (value.current.value = '') : false
  );
}

export default resetValues;
