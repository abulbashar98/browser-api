// Resources:
// 1. https://www.kaspersky.com/resource-center/definitions/cookies
// 2. https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie



// console Link: https://www.kaspersky.com/resource-center/definitions/cookies

// access cookies and get cookie values....


// 1. document.cookie
// 2. document.cookie.split('; ')
// 3. document.cookie.split('; ').map(c => console.log(c))
// 4. document.cookie.split('; ').map(c => console.log(c.split('=')))

// 5. document.cookie.split('; ').find(c => c.includes('country'))
// 6. document.cookie.split('; ').find(c => c.includes('country')).split('=')
// 7. document.cookie.split('; ').find(c => c.includes('country')).split('=')[1]
// 7. document.cookie.split('; ').find(c => c.includes('IR_11660')).split('=')[1]


const getCookie = name => {
    const allCookie = document.cookie.split('; ');
    const nameCookie = allCookie.find(c => c.includes(name));
    const nameCookieValue = nameCookie.split('=')[1];
    return nameCookieValue;
}

const search = getCookie('country')