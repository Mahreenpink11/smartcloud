//YOUR FIREBASE LINKS

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

function send()
      {
msg= document.getElementById("msg").Value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
})
document.getElementById("msg").Value="";

      }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
