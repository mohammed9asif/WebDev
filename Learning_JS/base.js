alert("hello");
let a;
let age = prompt("enter age:");
let student = {
    age:age,
    name:"asif",
    cgpa:8.2
};

let arr = [20,30,35,2];
student.age = student.age +1;
if(student.age>18){
    console.log("You can vote ");
}

let i = 0;
for(;i<10;i++){
    console.log("asif");
}

while(i!=15){
    console.log("inWhile loop");
    i++;
}

do{
   
    console.log("inDowhhileLoop");
    i++;
}while(i!=20);


for(let val of student.name){
    console.log(val);
}
for(let a of arr){
    console.log(a);
}
for(let val in student){
    student.age = student.age +1;
    student[val]= student[val] +1;
    console.log(student[val]);
}

//checking for in for arr
for(let val in arr){
    console.log(arr[val]);
}

console.log(arr.push(6));
console.log(arr.pop());
console.log(arr.toString());

for(let val in arr){
    console.log(arr[val]);
}


let ans = printEven(1,10);

console.log("*******printing even numbers****")
for(let val of ans){
    console.log(val);
}


//printing from the arr.forEach
ans.forEach((val)=> {
    console.log(val*val);
})

let de=ans.filter(function f(val){
    return val==2||val==4;
})

console.log("prining from the map ");
de.map((val)=>{
    console.log(val);
})
//functions
function printEven(start,end){
    let res =[];
    for(;start<=end;start++){
        if(start%2==0){
            // console.log(start);

            res.push(start);
            
        }
    }

  
    return res;
}

//arrow funtion
let printEvenArrow = (start,end) =>{
    console.log("printing in arrow function")
    for(;start<=end;start++){
        if(start%2==0){
             console.log(start);
        }
    }
   

}

printEvenArrow(11,20);


let heading = document.querySelector("h1");
console.log(heading);
console.dir(heading);


//Creating the elements and inserting the elements

let but = document.createElement("button");
but.innerText="click me!";
but.style.backgroundColor="red";
but.style.color="white";
but.style.padding="2rem";
but.style.border="solid 1px blue";
document.body.prepend(but);




