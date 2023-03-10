const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



// country answer.
router.post('/country-answer', function (req, res) {
    var country = req.session.data['where-do-you-live']
    if (country == "scotland") {
        res.redirect('order-pcr-tests-119/exit/service-ended-scotland')
    } else if (country == "ni"){
        res.redirect('order-pcr-tests-119/exit/service-ended-ni')
    } else if (country == "wales"){
        res.redirect('order-pcr-tests-119/exit/service-ended-wales')
    } else {
        res.redirect('order-pcr-tests-119/symptoms')
    }
})


router.post('/symptoms-answer', function (req, res) {
    var symptoms = req.session.data['do-you-have-symptoms']
    var country = req.session.data['where-do-you-live']
    if (symptoms == "yes") {
        res.redirect('order-pcr-tests-119/when-did-symptoms-start')
    } else if (symptoms == "no" && country == "england" ) {
        res.redirect('order-pcr-tests-119/england/eligibility-eng')
    } else if (symptoms == "no" && country == "scotland" ) {
        res.redirect('order-pcr-tests-119/scotland/eligibility-scot')
    } else if (symptoms == "no" && country == "ni" ) {
        res.redirect('order-pcr-tests-119/exit/service-ended-ni')
    } else if (symptoms == "no" && country == "wales" ) {
        res.redirect('order-pcr-tests-119/wales/eligibility-wales')
    } else {
        res.redirect('order-pcr-tests-119/england/eligibility-eng')
    }
})

// mobile-number-confirm answer.
router.post('/mobile-answer', function (req, res) {
    var mobile = req.session.data['hasMobile']
    if (mobile == "no") {
        res.redirect('order-pcr-tests-119/call-us')
    } else {
        res.redirect('order-pcr-tests-119/email-confirm')
    }
})

// email-confirm answer.
router.post('/email-answer', function (req, res) {
    var email = req.session.data['hasEmail']
    if (email == "no") {
        res.redirect('order-pcr-tests-119/call-us')
    } else {
        res.redirect('order-pcr-tests-119/gender')
    }
})

// travel-work-education answer.
router.post('/travel-work-education-answer', function (req, res) {
    var travelWorkEdu = req.session.data['travel-work-education']
    if (travelWorkEdu == "yes-work") {
        res.redirect('order-pcr-tests-119/area-of-work')
    } else if (travelWorkEdu == "yes-education"){
        res.redirect('order-pcr-tests-119/education-place')
    } else if (travelWorkEdu == "no"){
        res.redirect('order-pcr-tests-119/address/home-address-postcode')
    } else if (travelWorkEdu == "not-to-say"){
        res.redirect('order-pcr-tests-119/address/home-address-postcode')
    } else {
        res.redirect('order-pcr-tests-119/area-of-work')
    }
})

// gp-address answer.
router.post('/gp-address-answer', function (req, res) {
    var gpaddress = req.session.data['confirmGpAddress']
    if (gpaddress == "yes") {
        res.redirect('order-pcr-tests-119/nhs-number')
    } else if (gpaddress == "no"){
        res.redirect('order-pcr-tests-119/address/gp-address-postcode')
    } else {
        res.redirect('order-pcr-tests-119/nhs-number')
    }
})

// treatments answer.
router.post('/treatments-answer', function (req, res) {
    var treatment = req.session.data['treatments']
    if (treatment == "no") {
        res.redirect('order-pcr-tests-119/exit/not-eligible')
    } else {
        res.redirect('order-pcr-tests-119/priority-groups')
    }
})

// // priority groups answer.
// router.post('/priority-group-answer', function (req, res) {
//     var priority = req.session.data['priority-group']
//     if (priority == "yes") {
//         res.redirect('order-pcr-tests-119/name')
//     } else {
//         res.redirect('order-pcr-tests-119/priority-groups')
//     }
// })

// travel-overseas answer.
router.post('/travel-answer', function (req, res) {
    var overseas = req.session.data['travel']
    if (overseas == "no") {
        res.redirect('order-pcr-tests-119/tested-positive-before')
    } else {
        res.redirect('order-pcr-tests-119/travel-country')
    }
})

// vaccine answer.
router.post('/vaccine-answer', function (req, res) {
    var vax = req.session.data['vaccine']
    if (vax == "no") {
        res.redirect('order-pcr-tests-119/check-answers')
    } else {
        res.redirect('order-pcr-tests-119/vaccine-date')
    }
})

// vaccine answer.
router.post('/delivery-address-answer', function (req, res) {
    var delivery = req.session.data['confirmDeliveryAddress']
    if (delivery == "no") {
        res.redirect('order-pcr-tests-119/address/delivery-address-postcode')
    } else {
        res.redirect('order-pcr-tests-119/order-summary')
    }
})

module.exports = router