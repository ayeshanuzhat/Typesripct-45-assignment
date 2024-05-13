

let current_users = ['NaEem', 'DaNiyal', 'Ali', 'John', 'TaHa'];
let new_users = ['Babar', 'NaEem', 'Ayan', 'Ubaid', 'John'];
new_users.forEach(newUsername => { 
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLocaleLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. Please write a different username`);

    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
