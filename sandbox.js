const form = document.querySelector('form')
const updatemsg = document.querySelector('.updatemsg')
const mode = document.querySelector('.mode')
const body = document.querySelector('body')

form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const data = {
        email:form.email.value,
        name:form.name.value,
        message:form.message.value,
        time: firebase.firestore.Timestamp.fromDate(now)
    };
    db.collection('MY_CV').add(data)
        .then(() => form.reset())
        .catch(err => console.log(err));
    updatemsg.innerText='We Sent your message, Thanks!';
    setTimeout(() => updatemsg.innerText='',3000);
});

mode.addEventListener('click',  e => {
    console.log('Works')
    if(e.target.classList.contains('test')) {
        body.classList.add('dark')
        e.target.classList.remove('test')
    } else{
        body.classList.remove('dark')
        e.target.classList.add('test')
     }
})

