var x;
function f1(){
     x =window.open("http://facebook.com", "_blank" , "width=500  height=400");
     window.setTimeout(f2,1000);
}
  function f2()
    {
     choice= confirm("Do You Want to close your facebookwindow");
     if(choice==true){
         x.close();

            }
     else{
         alert("dont Worry I am using facebook")
         }
    }
