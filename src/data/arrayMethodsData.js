export const arrayMethods = [
  {
    title: "1️⃣ New Array Create செய்யும் Methods (Immutable)",
    description: "👉 Original array change ஆகாது",
    methods: [
      "map",
      "filter",
      "slice",
      "concat",
      "flat",
      "flatMap",
      "toSorted",
      "toReversed",
      "toSpliced",
      "with",
      "Array.from",
      "Array.of",
    ],
  },

  {
    title: "2️⃣ New Array Create செய்யாத Methods (Mutable)",
    description: "👉 Original array change ஆகும்",
    methods: [
      "push",
      "pop",
      "shift",
      "unshift",
      "splice",
      "sort",
      "reverse",
      "fill",
      "copyWithin",
    ],
  },

  {
    title: "3️⃣ Special Case Methods",
    description:
      "👉 Array change செய்யாது / new array return செய்யாது 👉 value / boolean return செய்யும்",
    methods: [
      "includes",
      "indexOf",
      "lastIndexOf",
      "find",
      "findIndex",
      "findLast",
      "findLastIndex",
      "some",
      "every",
      "reduce",
      "reduceRight",
      "forEach",
      "join",
      "toString",
      "at",
      "entries",
      "keys",
      "values",
    ],
  },
];



export const immutableMethods = [
  {
    method: "map()",
    example: "[1,2,3].map(n=>n*2)",
    return: "New Array",
    type: "Immutable",
    category: "Transformation",
    condition: "Yes (callback)",
    objectsSearch: "Possible",
    notFound: "[]",
  },
  {
    method: "filter()",
    example: "[10,20,30].filter(n=>n>15)",
    return: "New Array",
    type: "Immutable",
    category: "Filtering",
    condition: "Yes (callback)",
    objectsSearch: "Possible",
    notFound: "[]",
  },
  {
    method: "slice()",
    example: "arr.slice(1,3)",
    return: "New Array",
    type: "Immutable",
    category: "Copy",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "[]",
  },
  {
    method: "concat()",
    example: "[1,2].concat([3,4])",
    return: "New Array",
    type: "Immutable",
    category: "Merge",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "[]",
  },
  {
    method: "flat()",
    example: "[1,[2,3]].flat()",
    return: "New Array",
    type: "Immutable",
    category: "Transformation",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "[]",
  },
  {
    method: "flatMap()",
    example: "[1,2].flatMap(n=>[n,n*2])",
    return: "New Array",
    type: "Immutable",
    category: "Transformation",
    condition: "Yes (callback)",
    objectsSearch: "Possible",
    notFound: "[]",
  },
  {
    method: "toSorted()",
    example: "[3,1,2].toSorted()",
    return: "New Array",
    type: "Immutable",
    category: "Sorting",
    condition: "Optional compare",
    objectsSearch: "Possible",
    notFound: "[]",
  },
  {
    method: "toReversed()",
    example: "[1,2,3].toReversed()",
    return: "New Array",
    type: "Immutable",
    category: "Reordering",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "[]",
  },
  {
    method: "toSpliced()",
    example: "[1,2,3].toSpliced(1,1)",
    return: "New Array",
    type: "Immutable",
    category: "Modification",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "[]",
  },
  {
    method: "with()",
    example: "[10,20].with(1,99)",
    return: "New Array",
    type: "Immutable",
    category: "Modification",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "Error if invalid index",
  },
  {
    method: "Array.from()",
    example: "Array.from('hi')",
    return: "New Array",
    type: "Immutable",
    category: "Creation",
    condition: "Optional map fn",
    objectsSearch: "Possible",
    notFound: "[]",
  },
  {
    method: "Array.of()",
    example: "Array.of(1,2,3)",
    return: "New Array",
    type: "Immutable",
    category: "Creation",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "[]",
  },
];

export const mutableMethods = [
  {
    method: "push()",
    example: "arr.push(4)",
    return: "Length",
    type: "Mutable",
    category: "Mutation",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "N/A",
  },
  {
    method: "pop()",
    example: "arr.pop()",
    return: "Removed Element",
    type: "Mutable",
    category: "Mutation",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "undefined",
  },
  {
    method: "shift()",
    example: "arr.shift()",
    return: "Removed Element",
    type: "Mutable",
    category: "Mutation",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "undefined",
  },
  {
    method: "unshift()",
    example: "arr.unshift(1)",
    return: "Length",
    type: "Mutable",
    category: "Mutation",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "N/A",
  },
  {
    method: "splice()",
    example: "arr.splice(1,2)",
    return: "Removed Array",
    type: "Mutable",
    category: "Mutation",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "[]",
  },
  {
    method: "sort()",
    example: "arr.sort()",
    return: "Same Array",
    type: "Mutable",
    category: "Sorting",
    condition: "Optional compare",
    objectsSearch: "Possible",
    notFound: "N/A",
  },
  {
    method: "reverse()",
    example: "arr.reverse()",
    return: "Same Array",
    type: "Mutable",
    category: "Reordering",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "N/A",
  },
  {
    method: "fill()",
    example: "arr.fill(0)",
    return: "Same Array",
    type: "Mutable",
    category: "Modification",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "N/A",
  },
  {
    method: "copyWithin()",
    example: "arr.copyWithin(0,2)",
    return: "Same Array",
    type: "Mutable",
    category: "Modification",
    condition: "No",
    objectsSearch: "Possible",
    notFound: "N/A",
  },
];

export const specialMethods = [

{
method: "includes()",
example: "[1,2,3].includes(2)",
return: "Boolean",
type: "Special",
category: "Search",
condition: "No",
objectsSearch: "Difficult",
notFound: "false"
},

{
method: "indexOf()",
example: "[1,2,3].indexOf(2)",
return: "Index",
type: "Special",
category: "Search",
condition: "No",
objectsSearch: "Difficult",
notFound: "-1"
},

{
method: "lastIndexOf()",
example: "[1,2,2,3].lastIndexOf(2)",
return: "Index",
type: "Special",
category: "Search",
condition: "No",
objectsSearch: "Difficult",
notFound: "-1"
},

{
method: "find()",
example: "[1,2,3].find(n=>n>1)",
return: "Value",
type: "Special",
category: "Search",
condition: "Yes (callback)",
objectsSearch: "Possible",
notFound: "undefined"
},

{
method: "findIndex()",
example: "[1,2,3].findIndex(n=>n>1)",
return: "Index",
type: "Special",
category: "Search",
condition: "Yes (callback)",
objectsSearch: "Possible",
notFound: "-1"
},

{
method: "findLast()",
example: "[1,2,3].findLast(n=>n>1)",
return: "Value",
type: "Special",
category: "Search",
condition: "Yes (callback)",
objectsSearch: "Possible",
notFound: "undefined"
},

{
method: "findLastIndex()",
example: "[1,2,3].findLastIndex(n=>n>1)",
return: "Index",
type: "Special",
category: "Search",
condition: "Yes (callback)",
objectsSearch: "Possible",
notFound: "-1"
},

{
method: "some()",
example: "[1,2,3].some(n=>n>2)",
return: "Boolean",
type: "Special",
category: "Condition",
condition: "Yes (callback)",
objectsSearch: "Possible",
notFound: "false"
},

{
method: "every()",
example: "[1,2,3].every(n=>n>0)",
return: "Boolean",
type: "Special",
category: "Condition",
condition: "Yes (callback)",
objectsSearch: "Possible",
notFound: "false"
},

{
method: "reduce()",
example: "[1,2,3].reduce((a,b)=>a+b,0)",
return: "Single Value",
type: "Special",
category: "Aggregation",
condition: "Yes (callback)",
objectsSearch: "Possible",
notFound: "Depends"
},

{
method: "reduceRight()",
example: "[1,2,3].reduceRight((a,b)=>a+b,0)",
return: "Single Value",
type: "Special",
category: "Aggregation",
condition: "Yes (callback)",
objectsSearch: "Possible",
notFound: "Depends"
},

{
method: "forEach()",
example: "[1,2,3].forEach(n=>console.log(n))",
return: "undefined",
type: "Special",
category: "Iteration",
condition: "Yes (callback)",
objectsSearch: "Possible",
notFound: "N/A"
},

{
method: "join()",
example: "[1,2,3].join('-')",
return: "String",
type: "Special",
category: "Conversion",
condition: "No",
objectsSearch: "Possible",
notFound: "\"\""
},

{
method: "toString()",
example: "[1,2,3].toString()",
return: "String",
type: "Special",
category: "Conversion",
condition: "No",
objectsSearch: "Possible",
notFound: "\"\""
},

{
method: "at()",
example: "[10,20,30].at(1)",
return: "Value",
type: "Special",
category: "Access",
condition: "No",
objectsSearch: "Possible",
notFound: "undefined"
},

{
method: "entries()",
example: "[10,20].entries()",
return: "Iterator",
type: "Special",
category: "Iterator",
condition: "No",
objectsSearch: "Possible",
notFound: "done:true"
},

{
method: "keys()",
example: "[10,20].keys()",
return: "Iterator",
type: "Special",
category: "Iterator",
condition: "No",
objectsSearch: "Possible",
notFound: "done:true"
},

{
method: "values()",
example: "[10,20].values()",
return: "Iterator",
type: "Special",
category: "Iterator",
condition: "No",
objectsSearch: "Possible",
notFound: "done:true"
}

];
