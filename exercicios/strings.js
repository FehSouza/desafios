const calc = (str) => {
  // const arr = str.split('').filter((elem) => elem !== '-');

  // let acc = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   let tempI = arr[i];
  //   if (tempI === '>') {
  //     for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[j] === '<') {
  //       acc = acc + 2;
  //     }
  //     }
  //   }
  // }
  // return acc;

  // const res = arr.reduce((acc, elem, index) => {
  //   if (elem === '>') {
  //     for (let i = index + 1; i < arr.length; i++) {
  //       arr[i] === '<' ? (acc = acc + 2) : acc;
  //     }
  //   }
  //   return acc;
  // }, 0);

  const arrows = str.replace(/-/g, '').replace(/(^<*|>*$)/g, '');
  const left = arrows.replace(/>/g, '').length;
  const right = arrows.replace(/</g, '').length;
  return left * right * 2;
};

console.log(calc('>----->-----<--<'), 8);
console.log(calc('<--<--->----<'), 2);
console.log(calc('>>>>>>>>>>>>>>>>>>>>>----------<'), 42);
console.log(calc('<--<--->-->--<'), 4);
console.log(calc('<--<----->--'), 0);
