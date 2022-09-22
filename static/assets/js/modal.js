function network(){
validate()
  alert("Network not available now")

}

function apply(){
  window.location="apply.html";

  }
  function transfer(){
  window.location="transfer.html";
}
function success(){
  alert("Loan request submitted successfully")
}
function profile(){
  window.location="profile.html";
}


function validate_card(){
  var state = document.getElementById("state")
   var namestate = state.options[state.selectedIndex];
   var cardtype = document.getElementById("card")
   var card = cardtype.options[cardtype.selectedIndex];
  var home = document.getElementById("Haddress").value
  var office = document.getElementById("Oaddress").value
  var city= document.getElementById("City").value

 



  if (home == "") 
    {
            alert("field value missing");
        return false;
    }
    if (office == "") 
    {
            alert("field value missing");
        return false; 
    }
   
    if (city == "") 
    {
            alert("field value missing");
        return false;
    }
    if (namestate == "") 
    {
            alert("field value missing");
        return false;
    }
    if (card == "") 
    {
            alert("field value missing");
        return false;
    }else{
      alert("Network not available now")
    }
   
}
function validate_bills(){
  var code = document.getElementById("countryCodeselect")
   var country_code = code.options[code.selectedIndex];
  
  
  var amount= document.getElementById("amount").value
  var email= document.getElementById("email").value
  var beneficiary= document.getElementById("ben_name").value
  var account= document.getElementById("account").value
  var date= document.getElementById("demo").value
  var swift= document.getElementById("swift").value
  
  
  
  
  

  if (beneficiary == "") 
  {
      alert("field value missing");
      return false;
  }
  if (swift == "") 
  {
          alert("field value missing");
      return false;
  }
  if (account == "") 
  {
          alert("field value missing");
      return false;
  
  }
    if (amount == "") 
    {
            alert("field value missing");
        return false;
    }
    if (email == "") 
    {
            alert("field value missing");
        return false;
    }
    if (date == "") 
    {
            alert("field value missing");
        return false;
    }else{
      alert("Network not available now");
      // setTimeoout(alert(),4000);
      // setTimeoout(modal7,4000);
    }
   
}

function validate_international(){
  var state = document.getElementById("state")
   var namestate = state.options[state.selectedIndex];
   var cardtype = document.getElementById("card")
   var card = cardtype.options[cardtype.selectedIndex];
  var home = document.getElementById("Haddress").value
  var office = document.getElementById("Oaddress").value
  var city= document.getElementById("City").value
  var bank = document.getElementById('bank').value

 



  if (home == "") 
    {
            alert("field value missing");
        return false;
    }
    if (office == "") 
    {
            alert("field value missing");
        return false; 
    }
   
    if (city == "") 
    {
            alert("field value missing");
        return false;
    }
    if (namestate == "") 
    {
            alert("field value missing");
        return false;
    }
    if (card == "") 
    {
            alert("field value missing");
        return false;
    }else{
      alert("Network not available now")
    }
   
}