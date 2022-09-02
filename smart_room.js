
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      const firebaseConfig = {
            apiKey: "AIzaSyAtAPuV-ZydFEGUveePNSWvEfawwD-R9mU",
            authDomain: "smartcloud-3a4af.firebaseapp.com",
            databaseURL: "https://smartcloud-3a4af-default-rtdb.firebaseio.com",
            projectId: "smartcloud-3a4af",
            storageBucket: "smartcloud-3a4af.appspot.com",
            messagingSenderId: "223967163591",
            appId: "1:223967163591:web:1da9dce2b58b09d3213ae2"
          };

          // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome"+ user_name + "!"


      //End code
      });});}
getData();


function redirectToRoom(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
        window.location="index.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}