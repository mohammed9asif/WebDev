let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");

let winPattersn =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turnO = false;
boxes.forEach((val,idx)=>{
    let win= false;
   
    val.addEventListener("click",(evt)=>{
      
        if(turnO){
            val.innerText = "O";
            turnO = false;
        }
        else{
            val.innerText = "X";
            turnO = true;
        }

        val.disabled= true;

       win = checkWinner(idx);

       if(win==true && turnO == false)
       alert("Player O wins");
        else if(win==true && turnO == true)
       alert("player X wins");

    });

   
   
    
})

let checkWinner = (idx)=>{
    
    for(let val of winPattersn){

        let first = boxes[val[0]].innerText;
        let second = boxes[val[1]].innerText;
        let third = boxes[val[2]].innerText;
        console.log(`first is ${first} , second is ${second} and third is ${third}`);
        
        if(first=='X' && second=='X' && third=='X')
            return true;

        if(first=='O' && second=='O' && third=='O')
            return true;

    }

    return false;
}

resetBtn.addEventListener("click",()=>{
   boxes.forEach((val)=>{
        val.innerText=" ";
        val.disabled=false;
   })
})
