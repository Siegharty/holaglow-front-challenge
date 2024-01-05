export default function objectToArray(objectInput : any) {
  const objectArray = Object.entries(objectInput).map(([key, value]) => ({
    key,
    value,
  }));

  return objectArray;
}
