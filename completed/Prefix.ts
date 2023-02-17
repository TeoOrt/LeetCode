const Arr:string[] =["c","acc","ccc"]

const Common= (strs:string[]):string  => {
    const ShortestString  =  (Prefixes:string[]):number => {
           const short = Prefixes.map(x => x.length)
           const s= short.sort()
           return s[0]
    }
const short = ShortestString(strs);
let numberInstances = []
        for(let i:number = 0; i< short ; i++){
            let J = strs.map( x => x.charAt(i)=== strs[0][i] ? true: false)
                J.includes(false) === true ? i = short: numberInstances.push(strs[0][i]);
          
            // aylin
        }
        return numberInstances.join('');
}

// console.log(CommonPrefix(Prefixes))
console.log("Cout",Common(Arr), "Expected: ")
