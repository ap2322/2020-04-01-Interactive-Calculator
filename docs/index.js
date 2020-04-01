var calculator = new Vue({
    el: '#calculator',
    data: {
        price: '',
        tipRate: '20',
        total: ''
    },
    computed: {
        numTipTotal: function(e) {
          var percentage = this.tipRate/100 + 1;
          var calculatedTotal = percentage * this.price
          return calculatedTotal
        },
        calcTotal: function(e){
            return currencyFormat(this.numTipTotal)
        },
        numFormat: function(e){
            e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        },
        calcTip: function(e){
          var calculatedTip = this.numTipTotal - this.price;
          return currencyFormat(calculatedTip)
        }
    }

});


//https://blog.tompawlak.org/number-currency-formatting-javascript
function currencyFormat (num) {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
