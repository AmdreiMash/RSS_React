function resetValues(values: React.RefObject<HTMLInputElement>[]) {
  values.forEach((value) => {
    value && value.current && value.current.value && (value.current.value = '');
    value && value.current && value.current.checked && (value.current.checked = false);
  });
}

export default resetValues;
