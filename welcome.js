let btn = document.getElementById('proceedBtn');
btn.addEventListener('click', () =>{
        const checked = document.querySelector('#proceed:checked') !== null;
        if(checked){
            document.getElementById('welcomePage').style.display = "none";
            document.getElementById('questions-part').style.display = "block";
        }
})
