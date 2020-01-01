var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'images/vmSocks-green-onWhite.jpg',
        inventory: 8,
        onSale: true,
        details: ["80% cotton", "20% polyester", "gender-neutral"],
        variants: [
             {
            variantId: 2234,
            variantColor: "green",
            variantImage: "/images/vmSocks-green-onWhite.jpg"
        },
        {
            variantId: 2235,
            variantColor: "blue",
            variantImage: "/images/vmSocks-blue-onWhite.jpg"
        }
        ],
       cart:0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        }
    }
})
