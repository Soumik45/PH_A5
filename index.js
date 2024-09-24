let taka= parseFloat(document.getElementById('money').innerText);


function findtime()
{
    const currentDateTime = new Date();

    const y = currentDateTime.getFullYear();
    const m = String(currentDateTime.getMonth() + 1).padStart(2, '0');
    const d = String(currentDateTime.getDate()).padStart(2, '0');

    const hours = String(currentDateTime.getHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');

    const formattedDateTime = `${y}-${m}-${d} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;

}


function hishab(id1,id2){
    //console.log(id1,id2)

    if(id1=='donate1')
    {
        d1='dilam1';
        d2='donate-korlam1';
        d3='name1'
    }
    else   if(id1=='donate2')
        {
            d1='dilam2';
            d2='donate-korlam2';
            d3='name2'
        }
    else   if(id1=='donate3')
        {
            d1='dilam3';
            d2='donate-korlam3';
            d3='name3'
        }


    let donated = parseFloat(document.getElementById(d1).innerText);

    let test =parseFloat(document.getElementById(d2).value);

    if (isNaN(test))
        alert("Enter a number to donate");
    else if(test<=0)
        alert("Money should be postive and more than 0")
    else if(test>taka)
        alert("you don't have enough money")
    else
        {my_modal_1.showModal()

            donated = donated +test;

            document.getElementById(d1).innerText= donated;
            taka = taka - test ;
           
            document.getElementById('money').innerText = taka;
            document.getElementById(d2).value=""


            let x = document.getElementById(d3).innerText;
            let div1 = document.createElement('div');
            div1.classList.add('border-2','border-gray-300','rounded-lg','mb-4','p-3')
            let time= findtime();
            div1.innerHTML=    `
            
            <h1 class="font-semibold "> ${test} is donated for ${x} </h1>
            <p  class="text-font-light"> Date: ${time} BDST </p>
            
            ` ;
            
            
            document.getElementById('history-card').appendChild(div1);



        }

}

//donate1
document.getElementById('donate1').addEventListener('click',function(){

    hishab('donate1','name1');



    
})

document.getElementById('donate2').addEventListener('click',function(){

    hishab('donate2','name2');



    
})

document.getElementById('donate3').addEventListener('click',function(){

    hishab('donate3','name3');



    
})






//button magic