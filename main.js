

import './css.css'
import './form-styles.css'
import './input-styles.css'
import './box-progress.css'
// import $ from 'jquery';
import './datepicker-polyfill'

// undgå keyboard input i ie
if ($('input[type="date"]')[0].type != 'date') {
    $('input[type="date"]').keydown(function (event) {
        event.preventDefault();
        return false;
    })
}

// undgå enter og tab input på sidste input på hver side
// undgå submit og hop til næste slider side 
$('input.last').keydown(function (event) {  
    if (event.keyCode == 9 || event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
})

$('.checkmark-js').on('click', function (event) { 
    var getHidden = $(this).parent().find('.hidden-input')[0];
    getHidden.checked = getHidden.checked ? false : true;
    $(this).html(
        getHidden.checked ? '<span>' + '\u2713' + '</span>' : ''
    );
})

$('.radio-list-js li').on('click', function (event) {
    $('.radio-list-js li span').removeClass('radio-toggle')
    $(this).find('span').addClass('radio-toggle')
    $('.radio-list-js').parent().find('.hidden-input').val($(this).index() +1); 
   
})

$('#submit-button').on('click', function (e) {

    e.preventDefault();
    var isValid = validate(setState())
    if (isValid) alert('Tak for din indmeldelse')
   
});


$('.button-container button').on('click', function (e) {

    var change = $(this).attr('id') === 'next-button' ? 1 : -1
    // valider inputs på side hvis gå frem
    var isValid = change > 0 ? validate(setState()) :  true
    if (isValid)  renderForm.render(setState(change))
})

function validate (currentState) {

     var dateval = $('input[type="date"]').val();

     https://stackoverflow.com/questions/39514306/html-setcustomvalidity-oninvalid-and-oninput-explanation
     if (new Date(dateval).getTime() < new Date().getTime() && new Date().toDateString() !== new Date(dateval).toDateString()) {
         $('input[type="date"]')[0].setCustomValidity('Dato må ikke ligge før dags dato')
     } else {
        $('input[type="date"]')[0].setCustomValidity('')
     }

    var returnValue = true;

     $('form > ul > li').eq(currentState).find('input').each(function ()  {       
        if( !$(this)[0].checkValidity()) {      
            $('input[type="submit"]').trigger('click');
            returnValue = false;
            return false;     
        }
     })  
    return returnValue;
}
// returner state med param ændring eller nuværende 
var setState = (function () {
    var ulState = 0;
    return function(change) {
        var newState = ulState + change;
        if( newState < 0 || newState > renderForm.liLength -1 || !change) return ulState;
        ulState = newState;
        return ulState
    }
}());


var renderForm = (function () {

    var $ul = $('#form-section form > ul'),
    $li = $('#form-section form > ul > li');
    
    var render =  {
        updateButtons(newState) {
            
            $('#prev-button').finish().animate({'opacity' : newState === 0 ? '0' : '1'}, "fast")
            $('#next-button').finish().animate({'opacity' : newState === $li.length -1 ? '0' : '1'}, "fast")
        },
        animateUl(newState) {
            $ul.finish().animate({'margin-left' :  parseInt($li.outerWidth()) * -newState } );
        },
        updateNav(newState) {
            $('#progress-bar li span').each(function (i) {
                if ( i < (newState)) {
                    $(this).addClass('color-animate');
                } else {
                    $(this).removeClass('color-animate');
                }    
            })
        }
    }
        
    return {
        // beregn bredde af form > ul og li
        setWidth() {
            var $formWidth = $('form').outerWidth();
            $ul.outerWidth(parseInt($formWidth) * $li.length + 'px');
            $li.outerWidth(parseInt($formWidth)  +  'px');
        },
        render(newState) {
            for (let r in render) { render[r](newState); }
        },
        get liLength() { return $li.length }
    }
   
}());

$(window).on('resize', function () {
    renderForm.setWidth();
    renderForm.render(setState())
}).trigger('resize');

