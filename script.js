const curency1=document.getElementById('currency-one');
const curency2=document.getElementById('currency-two');
const amount1=document.getElementById("amount-one");
const amount2=document.getElementById("amount-two");
const rateText=document.getElementById('rate');
const swap=document.getElementById('btn');
const date =document.getElementById('date')

amount1.addEventListener('input',calculatemoney);
amount2.addEventListener('input',calculatemoney)
curency1.addEventListener('change',calculatemoney)
curency2.addEventListener('change',calculatemoney)


function calculatemoney(){
    
    const one=curency1.value;
    const two=curency2.value;
    // let url=`https://api.exchangerate-api.com/v4/latest/${one}`;
    // console.log(url);
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res=>res.json()).then(data=>{
        const rate=data.rates[two]
        rateText.innerText=`1 ${one} =${rate} ${two} `
        amount2.value=(amount1.value*rate).toFixed(3)
        const newdate=data.date
        date.innerText=newdate

        
    //   console.log(data.rates[two])  
    });//ดึงข้อมูลจากapi call เเล้วตอบjason
    //return promise 
    
}
swap.addEventListener('click',()=>{
    const temp =curency1.value;//ต้นทาง
    curency1.value=curency2.value;
    curency2.value=temp;
    calculatemoney();
})
calculatemoney();
