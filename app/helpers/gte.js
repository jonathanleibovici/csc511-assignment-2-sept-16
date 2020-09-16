import { helper } from '@ember/component/helper';

let gte = ([a,b])=> {
    if(a>=b) return true;

    return false;
}

  export default helper(gte);