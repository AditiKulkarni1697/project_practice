let cardDetails = JSON.parse(localStorage.getItem("card")) || [];

let Merchant_Details= document.getElementById("Merchant_Details")
let otp = document.getElementById("otp")
const generateOTP = (length=6)=>{
    let otp = ''

    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10)
    }

    return otp
}
 let otp_generated = generateOTP(6)
 Merchant_Details.innerHTML=`
 <h3>Merchant Details</h3>
 <div>
<table>
<tr>
<td>Merchant Name</td>
<td>WWW APNIDUKAN IN</td>
</tr>
<tr>
<td>Date</td>
<td>Jaan 23, 2023</td>
</tr>
<tr>
<td>Card Number</td>
<td>${cardDetails[2]}</td>
</tr>
<tr>
<td>Amount</td>
<td>Rs.${cardDetails[1]}</td>
</tr>
</table>
 </div>
 
 
 `
 otp.innerHTML=`
 <form action="https://formsubmit.co/your@email.com" method="POST">
     <input type="text" name="name" value="Aditi"required>
     <input type="email" name="email" value="aditisujlegaonkar@gmail.com"required>
     <button type="submit">Send</button>
</form>
 `
 
 
 
 

 