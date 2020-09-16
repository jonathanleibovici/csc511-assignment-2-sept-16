import { helper } from '@ember/component/helper';

function sum(args) {
  //console.log(arg.length)
  //return arg[0] + arg[1];
  // loop syntax
  let sum = 0;
  try {
    args.forEach(element => {
        const n = parseInt(element)
        //takes a string and turns it into a number string i 
        //want to know if every arg is a number or not
        if(isNaN(n)) throw new Error("NOT ALL VALUES ARE NUMBERS");

        sum += n;
    })
  }catch(err) {
      return err
  }

  return sum
}


export default helper(sum);
