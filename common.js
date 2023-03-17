

function moveChoice() {
    location.href = 'choice.html';
}

function home() {
    location.href = 'index.html';
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
        case 'soojin':
            click1 += 1;
            break;
        case 'jimin':
            click2 += 1;
            break;
        case 'zoa':
            click3 += 1;
            break;
        case 'jaehee':
            click4 += 1;
            break;
        case 'jihan':
            click5 += 1;
            break;
        case 'soeun':
            click6 += 1;
            break;
        case 'nam':
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
            document.getElementById('ch_id_3').style.display = "block";
            break;
        case '3':
            document.getElementById('ch_id_3').style.display = "none";
            document.getElementById('ch_id_4').style.display = "block";
            break;
        case '4':
            document.getElementById('ch_id_4').style.display = "none";
            document.getElementById('button_area').style.display = "block";
            //document.getElementById('ch_id_5').style.display = "block";
            break;
			/*
        case '5':
            document.getElementById('ch_id_5').style.display = "none";
            document.getElementById('ch_id_6').style.display = "block";
            break;
        case '6':
            document.getElementById('ch_id_6').style.display = "none";
            document.getElementById('ch_id_7').style.display = "block";
            break;
        case '7':
            document.getElementById('ch_id_7').style.display = "none";
            break;*/
        
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
    document.getElementById('button_area').style.display = "none";
    for (var i = 0; i < 8; i++) {
        if (click_arr[i] == click_max) {
            //alert("위치 : " + i + " 입니다. 그리고 최대 클릭은 : " + click_max);
			    switch(i) {
					case 0:
						//alert('이수진');
						document.getElementById('chc_00').style.display = "block";
						break;
					case 1:
						//alert('김지민');
						document.getElementById('chc_01').style.display = "block";
						break;
					case 2:
						//alert('조혜원');
						document.getElementById('chc_02').style.display = "block";
						break;
					case 3:
						//alert('이재희');
						document.getElementById('chc_03').style.display = "block";
						break;
					case 4:
						//alert('한지효');
						document.getElementById('chc_04').style.display = "block";
						break;
					case 5:
						//alert('박소은');
						document.getElementById('chc_05').style.display = "block";
						break;
					case 6:
						//alert('남자');
						document.getElementById('chc_06').style.display = "block";
						break;
					
				}
        }
    }
}