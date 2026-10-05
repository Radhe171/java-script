function isPallindrom(str){
    let revrse="";
    for(let i=str.length-1;i>=0;i--){
        revrse=revrse+str[i];
    }
  if ( str==revrse){
    return true;
  }else{
    return false ;
  }

}
let str="madam";
let ans =isPallindrom(str);
console.log(ans);