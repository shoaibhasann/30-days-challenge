localStorage.setItem("myCat", "Tom");

// logging content of local storage
for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}

// removing above data from local storage
localStorage.removeItem("myCat");
// logging content of local storage
for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}