

let guest_list : string [] = ['Ayesha','Isha','Eman','Wania'];

let not_present : string = 'Isha';
let new_guest : string = 'Muskan';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Madam ' + guest_list[i] +  ',\n\nWe invited you on dinner tomorrow.\n\nThank You.')
}
guest_list.unshift('Noor','Kiran','Abiha');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Madam ' + guest_list[i] +  ',\n\nWe invited you on dinner tomorrow.\n\nThank You.')
}
