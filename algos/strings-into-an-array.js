const data1 = 'Jordan Smith';
 
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});
 
// only use 'read-only' methods: filter, forEach, map, some, every, etc.
// cannot use: push, pop, splice, shift, reverse, etc.
 
console.log(data2);
