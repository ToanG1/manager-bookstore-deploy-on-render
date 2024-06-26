function add(id) {
    const num = document.getElementById(id+'');
    let a = num.innerHTML;
    a++;
    num.innerText = a;
    document.getElementById('quantity-'+ id).innerHTML=a;
    const price = document.getElementById('price-' + id);
    let total = Number(a)* Number(price.innerHTML.slice(2));
    document.getElementById('total-'+id).innerHTML = String(total);
    document.getElementById('price-order-'+id).innerHTML = String(total);
    updateTotal(id, 'add');
}
function remove(id) {
    const num = document.getElementById(id+'');
    let a = num.innerHTML;
    if(a > 1){
        a--;
        num.innerText = a;
        document.getElementById('quantity-'+ id).innerHTML=a;
        const price = document.getElementById('price-' + id);
        let total = Number(a)* Number(price.innerHTML.slice(2));
        document.getElementById('total-'+id).innerHTML = String(total);
        document.getElementById('price-order-'+id).innerHTML = String(total);
        updateTotal(id, 'remove');
    }
}
function changeAddress() {
    let countryId =  document.getElementById("countryId");
    let stateId = document.getElementById('stateId');
    let cityId = document.getElementById('cityId');
    let country = document.getElementById('country');
    let state = document.getElementById('state');
    let city = document.getElementById('city');
    
    country.value = countryId.value;
    state.value = stateId.value;
    city.value = cityId.value;
    document.getElementById('form-address').submit();
}
function updateTotal(id,type) {
    let total = document.getElementById('total-price');
    const price = document.getElementById('price-' + id);
    if (type === 'add'){
        total.innerHTML = String(Number(total.innerHTML) + Number(price.innerHTML.slice(2)));
    }else {
        total.innerHTML = String(Number(total.innerHTML) - Number(price.innerHTML.slice(2)));
    }
    document.getElementById('sub-order-price').innerHTML = total.innerHTML;
    document.getElementById('total-price-order').innerHTML = total.innerHTML;
    document.getElementById('free').checked = true;
}
function changeShipping(ship){
    let total_order = document.getElementById('total-price-order');
    let total = document.getElementById('total-price');
    total_order.innerHTML = String(Number(total.innerHTML) + Number(ship.value));
    document.getElementById('total-order').innerHTML = total_order.innerHTML;
    document.getElementById('total-order-final').innerHTML = total_order.innerHTML;
}
function confirmOrder() {
    document.getElementById('sub-order-price').innerHTML = document.getElementById('total-price').innerHTML;
    document.getElementById('total-order').innerHTML = document.getElementById('total-price-order').innerHTML;
    document.getElementById('total-order-final').innerHTML = document.getElementById('total-price-order').innerHTML;
    if (document.getElementById('free').checked === true){
        document.getElementById('shipping-type').innerHTML = "Free shipping";
    }
    if (document.getElementById('rate').checked === true){
        document.getElementById('shipping-type').innerHTML = " Flat rate: $15";
    }else {
        document.getElementById('shipping-type').innerHTML = "Local pickup: $8";
    }
}
function orderProduct() {
    if (document.getElementById('address-order').innerHTML !== ""){
        let arr_quantity = [];
        let array = document.getElementById('array');
        let totalPrice = document.getElementById('totalPrice');
        let quantities = document.getElementsByName('quantity-o-p');
        quantities.forEach((item) => {
            arr_quantity.push(Number(item.innerHTML));
        })
        array.value = arr_quantity;
        totalPrice.value = document.getElementById('total-order-final').innerHTML;
        document.getElementById('form-order').submit();
    }else {
        document.getElementById('btn-modal-err-address').click();
        return false;
    }
}
function deleteProduct(id) {
    document.getElementById('delete-product').submit();
}
