import { helper } from '@ember/component/helper';

let eq = ([a, b])=> {
    if (a === b) return true;

    return false;
}

  export default helper(eq);