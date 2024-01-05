export default function stringToFloat(stringNumber: string): string {
  const stringAsNumber: number = parseFloat(stringNumber);

  if (!isNaN(stringAsNumber)) {
    const numberPrecision: string = stringAsNumber.toFixed(2);
    return numberPrecision;
  } else {
    return stringNumber;
  }
}
