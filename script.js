const curency1=document.getElementById('currency-one');
const curency2=document.getElementById('currency-two');
const amount1=document.getElementById("amount-one");
const amount2=document.getElementById("amount-two");

const rateText=document.getElementById('rate');
const swap=document.getElementById('btn');

curency1.addEventListener('change',calculatemoney)
curency2.addEventListener('change',calculatemoney)
function calculatemoney(){
    
    const one=curency1.value;
    const two=curency2.value;
    // let url=`https://api.exchangerate-api.com/v4/latest/${one}`;
    // console.log(url);
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res=>res.json()).then(data=>{
      console.log(data)  
    });//ดึงข้อมูลจากapi call เเล้วตอบjason
    //return promise 
    
}
calculatemoney();