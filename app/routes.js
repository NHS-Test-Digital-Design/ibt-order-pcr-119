const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.post('/symptoms-answer', function (req, res) {
    var symptoms = req.session.data['do-you-have-symptoms']
    if (symptoms == "yes") {
        res.redirect('order-pcr-tests-119/when-did-symptoms-start')
    } else {
        res.redirect('order-pcr-tests-119/eligibility')
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

module.exports = router
