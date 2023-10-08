function tugasIf() {
let Username = document.getElementById("Username").value;
let Password = document.getElementById("Password").value; 
     if(Username == "Infinite Learning") {
         if (Password == "tugasJs1") {
            // tombol = document.getElementsByClassName("btn");
            // tombol[0].remove();
            Username= document.getElementById("Username").value="";
            Password= document.getElementById("Password").value=""; 
            window.location = "1.html";
        } else {
            alert("Password salah yang bener tugasJs1");
        }
    }else{
        alert("Username salah yang bener Infinite Learning");
    }
}

function tugasSwitch() {
let bobot = parseInt(document.getElementById("bobot").value);
switch (true) {
    case bobot>100:
        text = "Error";
        break;
    case bobot<=100 && bobot>=90:
      text = "A";
      break;
    case bobot>=80:
      text = "B";
      break;
    case bobot>=60:
      text = "C";
    break;
    case bobot>=40:
      text = "D";
    break;

    default:
      text = "E";
  }
    document.getElementById("tes").innerHTML = text;
}

function tugasLoop() {
let a;
let loop = parseInt(document.getElementById("loop").value);
let hasil='';
let hasil2='';
let hasil3=''; 
for (a= 0; a < loop; a++) {
    for (let j = 0; j <= a; j++) {
        document.getElementById("hasil").innerHTML = hasil += '*';
    }
     document.getElementById("hasil").innerHTML = hasil += '<br>';
}
let b=0;
while (b<loop) {
    let c=loop;
    while (b<c) { 
        document.getElementById("hasil2").innerHTML = hasil2 += '@';
        c--;        
    }
    document.getElementById("hasil2").innerHTML = hasil2 += '<br>';
    b++;
}
let d=loop;
do {
  let e = loop;
  let f = 1;
  do {
    if (f>=d) {
      document.getElementById("hasil3").innerHTML= hasil3 +='#';
    } else {
      document.getElementById("hasil3").innerHTML = hasil3+= '0';
    }
    f++;
  } while (f<=e);
document.getElementById("hasil3").innerHTML= hasil3 +='<br>';
d--;
} while (d>0); 
}