// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBXG3qt6AOISmX66ACpQBHg5ucGqKSY798",
    authDomain: "kwitter-webapp-97231.firebaseapp.com",
    databaseURL: "https://kwitter-webapp-97231-default-rtdb.firebaseio.com",
    projectId: "kwitter-webapp-97231",
    storageBucket: "kwitter-webapp-97231.appspot.com",
    messagingSenderId: "155502897037",
    appId: "1:155502897037:web:5e6a9b319d0552629fbfc4",
    measurementId: "G-TT0V14J9TW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_room.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
  firebase.database().ref(room_name).child(message_id).update(like = updated_likes)
}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
   message:msg,
   like:0 
  });
  document.getElementById("msg").value = "";
}
