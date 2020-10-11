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

const $$ = {
    I:I,
    K:K,
    constant:K,
    curry:curry,
    compose:compose,
    after:after,
    before:before
};