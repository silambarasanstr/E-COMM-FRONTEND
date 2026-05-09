export const methodsTable = [
  {
    type: "Immutable",
    methods: ["map", "filter", "slice"]
  },
  {
    type: "Mutable",
    methods: ["push", "pop", "splice"]
  },
  {
    type: "Special",
    methods: ["includes", "find", "reduce"]
  }
];


export const methodsDetails = {
  map: {
    title: "Array.map()",

    description: "Creates a new array by transforming each element.",

    syntax: `array.map(callback(element, index, array), thisArg)`,

    parameters: [
      {
        name: "callback",
        description: "Function that runs for each element",
      },
      {
        name: "element",
        description: "Current array element",
      },
      {
        name: "index",
        description: "Index of current element",
      },
      {
        name: "array",
        description: "Original array",
      },
      {
        name: "thisArg",
        description: "Value used as 'this' when executing callback",
      },
    ],

    example: `const numbers = [1,2,3]

const doubled = numbers.map(n => n * 2)

console.log(doubled)
// [2,4,6]`,
  },

  filter: {
    title: "Array.filter()",

    description: "Returns elements that match a condition.",

    syntax: `array.filter(callback(element, index, array), thisArg)`,

    parameters: [
      {
        name: "callback",
        description: "Function that tests each element",
      },
      {
        name: "element",
        description: "Current array element",
      },
      {
        name: "index",
        description: "Index of current element",
      },
      {
        name: "array",
        description: "Original array",
      },
      {
        name: "thisArg",
        description: "Value used as 'this' when executing callback",
      },
    ],

    example: `const numbers = [1,2,3,4]

const even = numbers.filter(n => n % 2 === 0)

console.log(even)
// [2,4]`,
  },
};