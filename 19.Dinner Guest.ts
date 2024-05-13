

let guest_list : string [] = ['Ayesha','Isha','Eman','Wania'];

let not_present : string = 'Isha';
let new_guest : string = 'Muskan';
guest_list[1] = new_guest;
guest_list.unshift('Noor','Kiran','Abiha');


// console.log('\nunfortunately we can not arrange big table , Only two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    // console.log(`Sorry Madam.${remove_guest} you are not invited for dinner.`);
}
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Madam ' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner\nThank You\n')

// }
guest_list.splice(0,2)
console.log(guest_list) 


console.log(`Total number of Guest Are: ${guest_list.length}`);
