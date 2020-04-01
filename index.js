var calculator = new Vue({
    el: '#calculator',
    data: {
        price: '',
        tipRate: '20',
        total: ''
    },
    computed: {
        calcTotal: function(e){
            var percentage = this.tipRate/100 + 1;
            var calculatedTotal = percentage * this.price
            return currencyFormat(calculatedTotal)

        },
        numFormat: function(e){
            e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    }

});


//https://blog.tompawlak.org/number-currency-formatting-javascript
function currencyFormat (num) {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
