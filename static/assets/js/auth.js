
  const Signup = async () =>{
    
    var money = document.getElementById("currency")
    var cash = money.options[money.selectedIndex];
    var type = document.getElementById("employ_type")
    var work = type.options[type.selectedIndex];

    var pay = document.getElementById("salary")
    var payment = pay.options[pay.selectedIndex];

    var account = document.getElementById("account_type")
    var accounttype = account.options[account.selectedIndex];
    var sexs = document.getElementById("gender")
    var gender = sexs.options[sexs.selectedIndex];
    try { 
        const Details = {}
        Details.firstname = document.getElementById("fname").value
        Details.lastname = document.getElementById("lname").value
        Details.email = document.getElementById("email").value
        Details.phone = document.getElementById("phone").value
        Details.dob = document.getElementById("dob").value
        Details.sex = gender.value
        Details.house_address = document.getElementById("house_address").value
        Details.city = document.getElementById("city").value
        Details.postal_code = document.getElementById("postal_code").value
        Details.country = document.getElementById("country").value
        Details.state = document.getElementById("state").value
        Details.currency = cash.value
        Details.national_id = document.getElementById("national_id").value
        Details.employer_address = document.getElementById("employer_address").value
        Details.employ_type = work.value
        Details.salary = payment.value
        Details.name_kin = document.getElementById("name_kin").value
        Details.kin_work = document.getElementById("kin_work").value
        Details.password = document.getElementById("password").value
        Details.account_type = accounttype.value
        
        console.log("details",Details);

        // var arrow = document.getElementById("arrow")
        // var spin = document.getElementById("spin")
        // arrow.style.display = "none"
        // spin.style.display = "block"


        const resp = await  axios.post('/signup', Details,{
            headers:{
                'Content-Type': 'application/json'
            }
            
        });
        
        //  console.log(resp.data);
        if (resp.data.status==200) {
            var notify = document.getElementById("notification")
            document.getElementById('alertmsg').innerText = resp.data.msg
            notify.style.display = "block"
            arrow.style.display = "block"
            spin.style.display = "none"
            window.location.replace("/message")
            console.log(resp);
        }

        if(resp.data.status==404){
            var notify = document.getElementById("notification")
            document.getElementById("alertmsg").innerText = resp.data.msg
            notify.classList.remove("is-primary")
            notify.classList.add("is-danger")
            notify.style.display = "block"
            arrow.style.display = "block"
            spin.style.display = "none"
        }

    } catch (error) {
      console.log(error)
    }


  }


  const Signin = async () =>{

    try { 
        const Details = {}
        Details.national_id = document.getElementById("national_id").value
        Details.password = document.getElementById("password").value
        // var arrow = document.getElementById("arrow")
        // var spin = document.getElementById("spin")
        // arrow.style.display = "none"
        // spin.style.display = "block"


        const resp = await  axios.post('/signin', Details,{
            headers:{
                'Content-Type': 'application/json'
            }
            
        });
        
        //  console.log(resp.data);
        if (resp.data.status==200) {
            var notify = document.getElementById("notification")
            document.getElementById('alertmsg').innerText = resp.data.msg
            notify.style.display = "block"
            // arrow.style.display = "block"
            // spin.style.display = "none"
            console.log(resp);
            window.location.replace("/dashboard")
        }

        if(resp.data.status==404){
            var notify = document.getElementById("notification")
            document.getElementById("alertmsg").innerText = resp.data.msg
            notify.classList.remove("is-primary")
            notify.classList.add("is-danger")
            notify.style.display = "block"
            // arrow.style.display = "block"
            // spin.style.display = "none"
        }
        if (resp.data.status==401) {
            var notify = document.getElementById("notification")
            document.getElementById('alertmsg').innerText = resp.data.msg
            notify.style.display = "block"
            // arrow.style.display = "block"
            // spin.style.display = "none"
            console.log(resp);
            //window.location.replace("/dashboard")
        }

    } catch (error) {
      console.log(error)
    }


  }
  function confirmAction() {
    confirm("Are you sure you want to proceed with this transfer?");
    // if (confirmAction) {
    //   alert("Action successfully executed");
    // } else {
    //   alert("Action canceled");
    // }
  }

//   const transaction = async () =>{
    
//     // var country = document.getElementById("countryCodeSelect")
//     // var country_code = country.options[country.selectedIndex];
   
//     try { 
//         const Details = {}
//         Details.bank_name = document.getElementById("bank").value
//         Details.bank_account = document.getElementById("account").value
//         Details.ben_name = document.getElementById("ben_name").value
//         // Details.bank_email= document.getElementById("email").value
//         // Details.reciver_code = country_code.value
//         // Details.timestamps = document.getElementById("demo").value
//         Details.swifts = document.getElementById("swift").value
//         Details.bank_amounts = document.getElementById("tf_amount").value
//         console.log("details",Details);

       


//         const resp = await axios.post('/si', Details,{
//             headers:{
//                 'Content-Type': 'application/json'
//             }
            
//         });
        
//         //  console.log(resp.data);
//         if (resp.data.status==200) {
//             // var notify = document.getElementById("notification")
//             // document.getElementById('alertmsg').innerText = resp.data.msg
//             // notify.style.display = "block"
//             // arrow.style.display = "block"
//             // spin.style.display = "none"
//             console.log(resp);
//             window.location.replace("/dash")
//         }

//         if(resp.data.status==404){
//             // var notify = document.getElementById("notification")
//             // document.getElementById("alertmsg").innerText = resp.data.msg
//             // notify.classList.remove("is-primary")
//             // notify.classList.add("is-danger")
//             // notify.style.display = "block"
//             // arrow.style.display = "block"
//             // spin.style.display = "none"
//         }

//     } catch (error) {
//       console.log(error)
//     }


//   }
