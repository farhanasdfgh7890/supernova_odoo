document.getElementById('forgotForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = this.querySelector('input[type="email"]').value;

  // Simulate sending OTP
  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  console.log("OTP for " + email + " is " + otp);

  document.getElementById('message').textContent = 
    `An OTP has been sent to ${email}.`;
   
  // Here, in real project, send `email` and `otp` to backend
});
