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

        promise.catch(e => {
            if(e.code == 'auth/user-not-found'){
                console.log('nao tem esse usuario!')
            }
        });
    });
    btnRegister.addEventListener('click', e=>{
        //get email and password
        const email = txtEmail.value;
        const pass = txtPass.value;
        const auth = firebase.auth();

        //sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            document.getElementById('user').innerHTML += " "+email.value;
            console.log("Usuario logado: "+email.value);
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
            user.classList.remove('hide');
        } else {
            console.log("Usuario "+email.value+" fez logout");
            user.classList.add('hide')
            btnLogout.classList.add('hide');
        }
    })
}());