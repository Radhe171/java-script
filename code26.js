let a=55;
let b=55;
let c=55;

if(a>b){
    if(a>c){
        console.log(a+": is larger");
    }else if ( a=c){
        console.log(a +" "+ c+" both are equal");
    }
}
else if (a=b=c){
    console.log(a+" "+b+"&"+c+"all equal to each other  ")
}else if ( a=b){
    console.log(a+"&"+b+" both are equal ");
}else if( b>c){
    console.log(b+" : is larger ");
}else if ( b=c){
    console.log(b+"&"+c+" both are equal")
}else if (c>a){
    console.log(c+": is larger ");
}

