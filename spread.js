const nums = [9, 3, 2, 8];
Math.max(nums); // NaN
Math.max(...nums); // 9

// ---------------

function giveMeFour(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}

const colors = ['red', 'orange', 'yellow', 'green']; // giveMeFour(colors) doesn't work. You need to use giveMeFour(...colors)

const str = "GOAT";

giveMeFour(...str);
/**
 * a G
 * b O
 * c A
 * d T
 */

 // ---------------

 const nums1 = [ 1, 2, 3 ];
 const nums2 = [ 4, 5, 6 ];

 [ ...nums1, ...nums2 ]; // [ 1, 2, 3, 4, 5, 6 ]
 [ 'a', 'b', ...nums2 ]; // [ "a" , "b", 4, 5, 6 ]
 [ ...nums1, ...nums2, 7, 8, 9 ]; // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

 // ---------------

 const cephalopods = [ 'dumbo octopus', ' humboldt squid', 'flamboyant cuttlefish' ];
 const gastropods = [ 'giant african snail', 'banana slug', 'variable neon slug' ];
 const cnidaria = [ 'fire coal', 'moon jelly' ];

 const mollusca = [ ...cephalopods, ...gastropods ];
 const inverts = [ ...cnidaria, ...gastropods, ...cephalopods ];

 const cephCopy = [ ...cephalopods ];

// ---------------

const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };

const dog = { ...canine, isPet: true };
const lion = { ...feline, genus: 'Panthera' };
const catDog = { ...feline, ...canine };