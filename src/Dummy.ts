export const PrimeFacts = (n: number) : any => {
     const factors = [];
      let i = 2;

      while (n >= 2) {
        if (n % i == 0) {
          factors.push(i);
          n = n / i;
        } else {
          i++;
        }
      }
      return factors;
}
