// deliveryHub received customerAddress, and item and sending to customerAddress this item
function deliveryHub(customerAddress, item){
    customerAddress(item);
}
function customerAddress(item){
    // customer item received and happy
    console.log('peyechi', item);
}
// Owner call to deliveryHub with customerAddress and item
deliveryHub(customerAddress, 'headphone');