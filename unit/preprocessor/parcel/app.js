/* Step 4:
 * using parcel with jquery is tricky
 * see https://stackoverflow.com/questions/47968529/how-do-i-use-jquery-and-jquery-ui-with-parcel-bundler
 */
const jquery = require('jquery')
window.$ = window.jQuery = jquery

$(document).ready(function() {
  $('button').click(() => console.log('Good job'))
})
