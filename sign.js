const sign = (nbr) => nbr > 0 ? 1 : nbr < 0 ? -1: 0 ;
const sameSign = (a , b) => sign(a) === sign(b) ? true : false ;