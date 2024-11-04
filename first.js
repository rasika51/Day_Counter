
function funName(){
    let c_date = new Date;
    let second= c_date.getSeconds();
    let minute = c_date.getMinutes();
    let hour = c_date.getHours();

    let days = c_date.getDate();
    let month = c_date.getMonth();
    let finalDay;
    let feb;
    let year = c_date.getFullYear();
    let daycount;


    if(year%4==0){
        feb=29;
        daycount=366;
    }
    else{
        feb=28;
        daycount= 365;
    }
    
    switch(month){

        case 1:
            finalDay=daycount-31;
            break;
        case 2:
            finalDay= daycount- (31+feb);
            break;
        case 3:
            finalDay=daycount- (62+feb);
            break;
        case 4:
            finalDay= daycount- (92+feb);
            break;
        case 5:
            finalDay=daycount- (123+feb);
            break;
        case 6:
            finalDay= daycount- (153+feb);
            break;
        case 7:
            finalDay=daycount- (183+feb);
            break;
        case 8:
            finalDay= daycount- (214+feb);
            break;
        case 9:
            finalDay=daycount- (244+feb);
            break;
        case 10:
            finalDay= daycount- (275+feb);
            break;
        case 11:
            finalDay=daycount- (305+feb);
            break;
        case 12:
            finalDay= daycount- (336+feb);
            break;
            
    }

    document.getElementById("secondID").innerHTML=59 - second;
    document.getElementById("minuteID").innerHTML=59 - minute;
    document.getElementById("hoursID").innerHTML=23 - hour;
    document.getElementById("dayID").innerHTML=finalDay - (1+days);
}

let interval = window.setInterval(funName, 1000);
