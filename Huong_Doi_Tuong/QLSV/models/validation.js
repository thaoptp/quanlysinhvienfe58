// xây dựng class để kiem tra du lieu 
var Validation =function(){
    this.kiemTraRong=function (selector,name,error_selector){
        if(document.querySelector(selector).value.trim()===''){
            document.querySelector(error_selector).innerHTML=name + " k dc bo trong"
            return false
        }
        document.querySelector(error_selector).innerHTML='';
        return true
    }
}
 