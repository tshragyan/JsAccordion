$('.accordion').click(function() {
    if ($(this).attr('active') === "true") {
        $(this).attr('active', false)
        $(this).find('.body').hide()
    } else {
        $(this).attr('active', true)
        $('.body').each(function () {
            $(this).hide()
        })
        $(this).find('.body').show(300)
    }
})