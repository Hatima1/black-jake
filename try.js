
let sum = 0
let ary=[]
let hasB=false
let is=false
let ms=""
let ss=document.querySelector("#s")
let cc=document.getElementById("ca")
let player={
    name:"hatim",
    mon:200
}
let m=document.getElementById("man")//name and money
m.textContent=player.name +": "+player.mon +"$"
console.log(ary)
function get(){
    let rand=Math.floor(Math.random()*13)+1
    if(rand===1){
        return 11
    }else if (rand>11) {
        return 13
    } 
else{
    return rand

}
  

}
function star(){
    is=true
  let  f1= get()
    let f2= get()
        ary=[f1,f2]
        sum = f1+f2
    rendr()
}
function rendr(){
    cc.textContent  =" card : " 
       ss.textContent="sum:" +sum
    for(i=0; i<ary.length; i++){
        cc.textContent+=ary[i]+" "
        
    }
    if (sum<=20){
        ms="try agine"
        
        
        }else if(sum===21){
           ms="you won!!!!"
            hasB=true
            
        }else{
        
            ms="you are out !"
            is=false//is alive
        }
        
let x=document.getElementById("mas")
x.textContent=ms
}

function neew(){
    if(is===true&&hasB===false){
        let n=get()
        sum+=n
    ary.push(n) 
     
        rendr() 
       

    }
  


    
   }

