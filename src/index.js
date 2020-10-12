// Funtional Utils

// Identity
const I = x => x

const K = x => y => x;

// Autocurrying
const curry = (f) => {
  function $internal (...args) {
    if (args.length < f.length) return $internal.bind(null, ...args)
    return f(...args)
  };
  return $internal
}

// Function Composition
const compose = (...f) => x => f.reverse().reduce((acc,f) => f(acc),x);

const after = (n,fn) => {
    let counter = 0;
    return function() { counter == n? fn.apply(this):counter++; }
}

const before = (n,fn) => {
    let counter = 0;
    let prev;
    return function() { return counter<n?(prev=fn.apply(this,...args)):prev; };
}

const chunk = (arr,chunks=1) => {
    let r = [];
    let ch = [];
    let curr = 0;
    for(let i = 0; i < arr.length;i++) {
        ch.push(arr[i]);
        curr++;
        if(curr == chunks) {
            r.push(ch);
            ch = [];
            curr = 0;
        } 
    }
    if(arr.length%chunks) r.push(ch);
    return r;
};

const compact = (arr) => arr.filter(I);

const drop = (arr,n=1) => arr.filter((e,i) => n-i<i || n == 0);

const dropRight = (arr,n=1) => arr.filter((e,i) => (arr.length-n)>i || n == 0)

const fill = (arr,value,start=0,end=arr.length) => {
    for(let i = start;i < end;i++) arr[i] = value;
    return arr;
}

const findIndex = (arr, predicate=I, fromIndex=0) => {
    for(let i = fromIndex; i < arr.length; i++) if(predicate(arr[i])) return i;
    return -1;
}

const fromPairs = (pairs) => {
   let obj = {};
   for(let p of pairs) obj[p[0]] = p[1];
   return obj;
}

const head = (arr) => arr[0];

const last = (arr) => arr[arr.length-1];

const nth = (arr,n) => n<0?arr[arr.length-n]:arr[n];

const tail = (arr) => drop(arr,1);

const initial = (arr) => dropRight(arr,1);

const take = (arr, n=1) => dropRight(arr,arr.length-n);

const takeRight = (arr, n=1) => drop(arr,arr.length-n);

const $$ = {
    I:I,
    K:K,
    constant:K,
    curry:curry,
    compose:compose,
    after:after,
    before:before,
    chunk:chunk,
    compact:compact,
    drop:drop,
    dropRight:dropRight,
    fill:fill,
    findIndex:findIndex,
    fromPairs: fromPairs,
    head:head,
    last:last,
    nth:nth,
    tail:tail,
    initial:initial,
    take:take,
    takeRight:takeRight
};

if(typeof module != "undefined") module.exports = $$;