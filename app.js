// EVENT
// hide.addEventListener('click', function(){
//     document.getElementById('text').style.display = 'none';
// })
// show.addEventListener('click', function(){
//     document.getElementById('text').style.display = 'Block';
// })
// hide.addEventListener('click', function(){
//     document.getElementById('show').style.display = 'Block';
//     document.getElementById('text').style.display ='none';
//     document.getElementById('hide').style.display ='none';
// })
// show.addEventListener('click', function(){
//     document.getElementById('show').style.display = 'none';
//     document.getElementById('text').style.display ='Block';
//     document.getElementById('hide').style.display ='Block';
// })

function hide(){
   document.getElementById('show').style.display = 'Block';
    document.getElementById('text').style.display ='none';
    document.getElementById('hide').style.display ='none';   
}
function show(){
     document.getElementById('show').style.display = 'none';
    document.getElementById('text').style.display ='Block';
    document.getElementById('hide').style.display ='Block';
}

function more(){
    document.getElementById('open').style.display ="inline";
    document.getElementById('more').style.display ="none";
}
function less(){
    document.getElementById('open').style.display ="none";
    document.getElementById('more').style.display ="inline";
}

// DATE AND TIME
// let currentdate = new Date();

// let currentmonth = currentdate.getMonth();
// let newmonth = Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
// document.write(newmonth[currentmonth]);


// switch
let currentdate = new Date();

let daysoftheweek = currentdate.getDay();
let newdays = Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");


switch(newdays[daysoftheweek]){
    case "Sunday":
        document.write("Happy Sunday");
    break;
    case "Monday":
        document.write("Happy Monday");
    break;
    case "Tuesday":
        document.write("Happy Tuesday Negro");
    break;
    case "Wednesday":
        document.write("Happy Wednesday");
    break;
    case "Thursday":
        document.write("Happy Thursday");
    break;
    case "Friday":
        document.write("Happy Friday");
    break;
    case "Saturday":
        document.write("Happy Saturday")
}

// LOOP
// WHILE LOOP, DO WHILE LOOP, FOR LOOP
