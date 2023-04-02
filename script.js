let x = document.getElementsByClassName('BigContainer')
let y = document.getElementsByClassName('BigContainers')
let nav = document.getElementsByClassName('navbar')[0]
let darkmode = false;

function togglemode() {
  //   var x = document.getElementsByClassName("BigContainer");
  //   for (var i = 0; i < x.length; i++) {
  //     if(darkmode==false){
  //       x[i].style.background = "black";
  //       x[i].style.color = "white";
  //       darkmode=true;
  //     }
  //     else{
  //      window.location.reload()
  //      darkmode=false;
  //     }
  //   }

  if (darkmode == false) {
    x[0].style.background = "black";
    x[0].style.color = "white";
    x[1].style.background = "black";
    x[1].style.color = "white";
    x[2].style.background = "black";
    x[2].style.color = "white";
    x[3].style.background = "black";
    x[3].style.color = "white";
    y[0].style.background = "black";
    y[0].style.color = "white";
    nav.classList.add('navbar-dark', 'bg-dark')
    nav.classList.remove('navbar-lg', 'bg-lg')
    darkmode = true;
  } else {
    nav.classList.remove('navbar-dark', 'bg-dark')
    nav.classList.add('navbar-lg', 'bg-lg')
    y[0].style.background = "linear-gradient(to right, rgb(236, 255, 255), rgb(255, 243, 220), rgb(255, 209, 193))";
    y[0].style.color = "black";
    x[0].style.background = "linear-gradient(to right, rgb(236, 255, 255), rgb(255, 243, 220), rgb(255, 209, 193))";
    x[0].style.color = "black";
    x[1].style.background = "linear-gradient(to right, rgb(236, 255, 255), rgb(255, 243, 220), rgb(255, 209, 193))";
    x[1].style.color = "black";
    x[2].style.background = "linear-gradient(to right, rgb(236, 255, 255), rgb(255, 243, 220), rgb(255, 209, 193))";
    x[2].style.color = "black";
    x[3].style.background = "linear-gradient(to right, rgb(236, 255, 255), rgb(255, 243, 220), rgb(255, 209, 193))";
    x[3].style.color = "black";
    darkmode = false;
  }
}

function sendMail() {
  var params = {
    name: document.getElementById('name').value,
    Email: document.getElementById('email').value,
    Message: document.getElementById('message').value
  }
  const serviceID = "service_53btl69"
  const templateID = "template_wvirgjm"

  emailjs
    .send(serviceID, templateID, params)
    .then(
      res => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
        console.log(res)
        alert("your message sent succesfully")
      }
    )
    .catch((err) => console.log(err));
}
