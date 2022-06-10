const form = document.querySelector('form')
const updatemsg = document.querySelector('.updatemsg')

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