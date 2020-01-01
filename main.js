var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'images/vmSocks-green-onWhite.jpg',
        inventory: 8,
        onSale: true,
        details: ["80% cotton", "20% polyester", "gender-neutral"],

        variants: 
        {
            variantId: 2234,
            variantColor: "green"
        },
        {
            variantId: 2235,
            variantColor: "blue"
        },
       




    }
})
