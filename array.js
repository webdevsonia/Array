// push
 let num = [1,2,3]
 num.push(4);
 console.log(num)

 //pop
 let fruits = ["apple", "banana"];
 fruits.pop();
 console.log(fruits)

 //shift
 let fruit = ["mango","orange","banana"]
 fruit.shift()
 console.log(fruit)

 //unshift
 let Name = ["denisha","krishna","srushti"]
 Name.unshift("bhagyavi")
 console.log(Name)

 //splice
 let car = ["toyto","xuv","i20"]
 car.splice(2,2,"xuv1")
 console.log(car)

 //map
 let number = [1,2,3,4,5]
 let sqare = number.map(num => num*num)
 console.log(sqare)

 //filter
 let Numbers = [1,2,3,4,5]
 let evenNumbers = Numbers.filter(num => num  % 2 === 0)
console.log(evenNumbers)
 
//sort 
let inline = [3,1,2,4];
inline.sort()
    console.log(inline)

//concat
let arr = [1,2]
let arr1 = [3,4]
let merged = arr.concat(arr1)
console.log(merged)

//reverse
let reverse= [1,2,3,4]
reverse.reverse()
console.log(reverse)

//reduce
let reduce = [1,2,3,4]
let sum = reduce.reduce((total,ele) => total += ele,0)
console.log(sum)

//includes
let area = ["parvat-patia", "saroli","saroli"]
console.log(area.includes("vesu"))
console.log(area.includes("katargam"))