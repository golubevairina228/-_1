//условие  (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);
let a = Math.floor(Math.random() * 100);
//if...else
if(a>10){
    b=a
}
else
    b=a * 2

if(b>5){
    b=a*2+1
    console.log(b)
}
else{
    if(a<3){
        b = 1
    }
    else
        b = 2 * (a-2)

    if(b>4){
        b=5
        console.log(b)
    }
    else {
        if(a%2==0){
            b=6
            console.log(b)
        }
        else
            b=7
            console.log(b)
    }}

//switch
switch(true){
    case (a>10):
        b=a;
        break;
    default:
        b=a*2;
        break;
}
switch(true){
    case (b>5):
        b=(2 * a) + 1;
        console.log(b);
        break;
    case (a<3):
        b=1;
    default:
        b=2 * (a-2);
switch(true){
    case (b>4):
        b=5;
        console.log(b);
        break;
    case (a%2==0):
        b=6;
        console.log(b);
        break;
    default:
        b=7
        console.log(b);
        break;
    }}
