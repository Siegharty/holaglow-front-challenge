export default function stringToFloat(stringNumber: string): string {
  const stringAsNumber: number = parseFloat(stringNumber);

  if (!isNaN(stringAsNumber)) {
    const numeroConPrecision: string = stringAsNumber.toFixed(2);
    return numeroConPrecision;
  } else {
    return stringNumber;
  }
}
