let taka= parseFloat(document.getElementById('money').innerText);


function hishab(id1,id2){
    console.log(id1,id2)

    if(id1=='donate1')
    {
        d1='dilam1';
        d2='donate-korlam1'
    }
    else   if(id1=='donate2')
        {
            d1='dilam2';
            d2='donate-korlam2'
        }
    else   if(id1=='donate3')
        {
            d1='dilam3';
            d2='donate-korlam3'
        }


    let donated = document.getElementById(d1).innerText;

    let test =parseFloat(document.getElementById(d2).value);

    if (isNaN(test))
        alert("Enter a number to donate");
    else if(test<=0)
        alert("Money should be postive and more than 0")
    else if(test>taka)
        alert("you don't have enough money")
    else
        {my_modal_1.showModal()

            

            document.getElementById(d1).innerText= test;
            taka = taka - test ;
            document.getElementById('money').innerText = taka;
            document.getElementById(d2).value=""
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