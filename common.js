function moveChoice() {
    location.href = 'choice.html';
}

var click1 = 0;
var click2 = 0;
var click3 = 0;
var click4 = 0;
var click5 = 0;
var click6 = 0;
var click7 = 0;

function clickId(id, type) {
    console.log("id : " + id);
    switch(id) {
        case 'type1':
            click1 += 1;
            break;
        case 'type2':
            click2 += 1;
            break;
        case 'type3':
            click3 += 1;
            break;
        case 'type4':
            click4 += 1;
            break;
        case 'type5':
            click5 += 1;
            break;
        case 'type6':
            click6 += 1;
            break;
        case 'type7':
            click7 += 1;
            break;
        
    }
    
    switch(type) {
        case '1':
            document.getElementById('ch_id_1').style.display = "none";
            document.getElementById('ch_id_2').style.display = "block";
            break;
        case '2':
            document.getElementById('ch_id_2').style.display = "none";
            break;
        case '3':
            //click3 += 1;
            break;
        case '4':
            //click4 += 1;
            break;
        case '5':
            //click5 += 1;
            break;
        case '6':
            //click6 += 1;
            break;
        case '7':
            c//lick7 += 1;
            break;
        
    }
    /*
    var id_type = "ch_id_"+type;
    if(type != '7') {
        console.log("not 7");
        document.getElementById(id_type).style.display = "none";
        document.getElementById(id_type).style.display = "block";
    } else {
        console.log("yes 7");
        document.getElementById(id_type).style.display = "none";
    }*/
}

var click_arr = new Array();
function submit() {
    click_arr[0] = click1;
    click_arr[1] = click2;
    click_arr[2] = click3;
    click_arr[3] = click4;
    click_arr[4] = click5;
    click_arr[5] = click6;
    click_arr[6] = click7;
    console.log(click_arr);
    var click_max = Math.max.apply(null, click_arr);
    console.log("click max : " + click_max);
    for (var i = 0; i < 8; i++) {
        if (click_arr[i] == click_max) {
            console.log("위치 : " + i + " 입니다.");
        }
    }
}