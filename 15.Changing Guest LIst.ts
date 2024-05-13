

let guest_list : string [] = ['Ayesha','Isha','Eman','Wania'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Madam' + guest_list[i] + ',\n\nWe invited you on dinner tomorrow.\n\nThank You')
}
let not_present :string = 'Isha';
let new_guest :string = 'Muskan';
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Madam' + guest_list[i] + ',\n\nWe invited you on dinner tomorrow.\n\nThankYou')
}
console.log(`Madam. ${not_present} will not coming tomorrow dinner. `)