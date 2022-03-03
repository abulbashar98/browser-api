

// 1. ALERT 

// alert('ma is coming');

const alertEm = () => {
    alert('Be Careful!! Life is Short!!!')
}


// 2. CONFIRM

// Note: 1. Confirm function returns it's response in 2 ways: #True  or   #False....
//       2. we can use the return values to do something.... Example below....

const confirmPicnic = () => {
    // confirm('are you going to ATTEND???');

    const response = confirm('are you going to ATTEND???');
    // console.log(response);

    if (response === true) {
        alert('Send me the money on stripe');
    }
    else {
        alert('Going to miss you buddy!!')
    }

}




// 3. PROMPT

// Note: 1. Just like confirm using prompts return....
//       2. Can check for a valid return..... 

const sendEmail = () => {
    // prompt('Enter your Email address');

    const emailAddress = prompt('Enter your Email address');
    if (emailAddress) {
        const res = confirm(`${emailAddress} is this correct???`);
        if (res === true) {
            alert('got you');
        }
        else {
            alert('insert again!!')
        }
    }

    else {
        alert("gibe your email correctly");
    }

}

