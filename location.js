

// Resources: https://developer.mozilla.org/en-US/docs/Web/API/Location

// Window.location.reload

const reloadPage = () => {
    location.reload()
    alert('page reloaded')
}


// window.location.assign

const assignToPH = () => {
    window.location.assign('https://web.programming-hero.com/?fbclid=IwAR3vncMzqxG80VFnn0SYUrHbfdBAaXdQWsSJiQ2j3iDAfy1rZ7qOhXcuV44')
}





// Console URL:  https://reactjs.org/docs/react-dom.html#hydrate


// change hash
location.hash = '#hydrate'

// change href
location.href = 'https://developer.mozilla.org/en-US/docs/Web/API/Location'





// Fun Fact about Search query On Youtube.....

// 1. search query is a part looks like this: ?q=baz
// 2. we can join Searches by using:- &
// 3. Example on use:

// Youtube video link: https://www.youtube.com/watch?v=KJe7yDTEDTU

// youtube link starts the same video at 8 min 20 sec: https://www.youtube.com/watch?v=KJe7yDTEDTU&t=500s

// Extra part = &t=500s .... where t=500s is another search query added by &.....




