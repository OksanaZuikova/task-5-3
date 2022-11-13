// eslint-disable-next-line no-console
interface ObjectA {
  [key: string]: undefined | { cvalue: string | number | undefined | ObjectA };
}
const testObj: ObjectA = {
  hello: { cvalue: 1 },
  world: { cvalue: { yay: { cvalue: '2' } } },
  wo: { cvalue: undefined },
  jg: undefined,
};

function summ(a: ObjectA) {
  const x = Object.keys(a).map((k) => {
    const elem = a[k];
    if (typeof elem === 'undefined' || typeof elem.cvalue === 'undefined')
      return 2021;
    if (typeof elem.cvalue === 'string') return +elem.cvalue || '2021';
    if (typeof elem.cvalue === 'object') return +summ(elem.cvalue);
    return elem.cvalue;
  });
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += +x[i];
  }
  return sum;
}

console.log(summ(testObj));
