
//  Get element 
function selectSeat(id) {
    const seatId = document.getElementById(id)

    if (seatId.style.backgroundColor == 'green') {
        alert("Selected Already. Please Enter Another one.");
        return
    }

    count = 1
    //  Get available Seat 
    const availableSeats = document.getElementById("available-seat")
    const availableSeat = parseInt(availableSeats.innerText)
    console.log(availableSeat)

    // Selected Seat 
    const selectedSeat = document.getElementById("selectedSeat")
    const selectedNow = parseInt(selectedSeat.innerText)

    const currentCounted = selectedNow + count
    console.log(currentCounted)

    if (currentCounted > 4) {
        alert("Limition Already Crossed")
        return
    }
    seatId.style.backgroundColor = 'green'
    selectedSeat.innerText = currentCounted

    // current availableSeat 
    const currentSeat = availableSeat - count
    console.log(currentSeat)

    availableSeats.innerText = currentSeat

    // Show Coupon Option
    const couponApply = document.getElementById('couponApply')
    couponApply.classList.remove('hidden')

    // Calculate total Price 
    const total_price = currentCounted * 550
    console.log(total_price)

    // get total price 
    const totalPrice = document.getElementById('total-price')
    const finalTotal = totalPrice.innerText

    // append Total Price
    totalPrice.innerText = total_price


    // Coupon Draw
    const coupons = document.getElementById('coupon')
    const couponEnter = coupons.value

    const coupon1 = "NEW15"
    const coupon2 = "Couple 20"
    if ((couponEnter === coupon1)) {

    }
    // else[
    //     alert("Please enter correct coupon code")
    // ]


    // get Grand total price 
    const grandPrice = document.getElementById('grand-total')
    const grandTotal = grandPrice.innerText

    // append Total Price
    grandPrice.innerText = total_price

    // Get Next Button 
    const NextButton = document.getElementById('Next-button')

    // Display Next Option
    // entered Phone number
    
    NextButton.classList.remove('hidden')

    NextButton.addEventListener('click', function(){
        const main = document.getElementById('main')
        main.classList.add('hidden')
        const header = document.getElementById('header')
        header.classList.add('hidden')
        const footer = document.getElementById('footer')
        footer.classList.add('hidden')

        const modals = document.getElementById('modal')
        modals.classList.remove('hidden')

        
    })

    
    
}
