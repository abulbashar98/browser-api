
// Resources: https://www.geeksforgeeks.org/difference-between-local-storage-session-storage-and-cookies/



// Console Link: https://www.youtube.com/


// 1. Access local Storage
//    window.localStorage

// 2. Access simple item set by using application in devTool.....
//    localStorage.def

// 3. Access storage complex value set by domain  using key.....
//    localStorage.getItem('yt-remote-device-id')

// 4. Assign the JSON value to a variable....
//    const localStorageItemJson = localStorage.getItem('yt-remote-device-id')

// 5. convert to parse and store in a variable.....
//    localStorageItem = JSON.parse(localStorageItemJson)

// 6. assign key and value to the parsed object....
//    localStorageItem.setByJS = '88877878787'

// 7. confirm the entry....
//    localStorageItem

// 8. stringify the new object to add in storage.....
//    localStorageItemStringified = JSON.stringify(localStorageItem)

// 9. set the object on that Id used to get the item.....
//    localStorage.setItem('yt-remote-device-id', localStorageItemStringified)

// 10. confirm by using Application window in devtool..