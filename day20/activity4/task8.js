sessionStorage.setItem("myRat", "Jerry");

// logging content of session storage
for(let i = 0; i < sessionStorage.length; i++){
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    console.log(`${key}: ${value}`);
}

// deleting item from session storage
sessionStorage.removeItem("myRat");

// logging content of session storage
for(let i = 0; i < sessionStorage.length; i++){
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    console.log(`${key}: ${value}`);
}
