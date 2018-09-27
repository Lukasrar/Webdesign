(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDXdzYaF244N_MVewdIe5zma8BMgAHCW_0",
        authDomain: "loginform-7059e.firebaseapp.com",
        databaseURL: "https://loginform-7059e.firebaseio.com",
        projectId: "loginform-7059e",
        storageBucket: "loginform-7059e.appspot.com",
        messagingSenderId: "95951182974"
    };
    firebase.initializeApp(config);
    //get elements
    const txtEmail =document.getElementById('email');
    const txtPass =document.getElementById('password');
    const btnLogin =document.getElementById('btnLogin');
    const btnRegister =document.getElementById('btnRegister');
    const btnLogout =document.getElementById('btnLogout');

    //add login event
    btnLogin.addEventListener('click', e =>{
        //get email and password
        const email = txtEmail.value;
        const pass = txtPass.value;
        const auth = firebase.auth();

        //sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message))
    });
    btnRegister.addEventListener('click', e=>{
        //get email and password
        const email = txtEmail.value;
        const pass = txtPass.value;
        const auth = firebase.auth();

        //sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message))
    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log("not logged in");
            btnLogout.classList.add('hide');
        }
    })
}());