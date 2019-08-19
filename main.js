import './css/css.css'
import './css/form-styles.css'
import './css/input-styles.css'
import './css/box-progress.css'
import $ from 'jquery';
import './js/datepicker-polyfill'

// undgå keyboard input i ie
if ($('input[type="date"]')[0].type != 'date') {
    $('input[type="date"]').keydown(function (event) {
        event.preventDefault();
        return false;
    })
}

// undgå tab input på sidste input på hver side
// undgå submit og hop til næste slider side 
$('input.last').keydown(function (event) {
    if (event.keyCode == 9) {
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
    $('.radio-list-js').parent().find('.hidden-input').val($(this).index() + 1);

})


$('#submit-button').on('click', function (e) {

    e.preventDefault();
    var isValid = validate(setState())
    // this function is called on submit ???
    // prevent final submit if not on final page
    if (setState() != renderForm.liLength - 1) return false;
    // replace with actual submit
    if (isValid) alert('Tak for din indmeldelse')

});


$('.button-container button').on('click', function (e) {

    var change = $(this).attr('id') === 'next-button' ? 1 : -1
    // valider inputs på side hvis gå frem
    var isValid = change > 0 ? validate(setState()) : true
    if (change == -1) clearValidationMessage(setState());
    if (isValid) renderForm.render(setState(change))
})

// clears/hides validation error messages on going back in slider
function clearValidationMessage(currentState) {
    $('form > ul > li').eq(currentState).find('input').each(function () {
        if (!$(this)[0].checkValidity()) {
            $(this).focus().blur();
            return false;
        }
    })
}

function validate(currentState) {

    var dateval = $('input[type="date"]').val();

    //https: //stackoverflow.com/questions/39514306/html-setcustomvalidity-oninvalid-and-oninput-explanation

    var dateMessage = (function () {
        if (new Date(dateval).getTime() < new Date().getTime() && new Date().toDateString() !== new Date(dateval).toDateString()) {
            return  "Dato må ikke ligge før dags dato"    
        } 
        return "";  
    })();
    $('input[type="date"]')[0].setCustomValidity(dateMessage);

    var returnValue = true;

    $('form > ul > li').eq(currentState).find('input').each(function () {
        if (!$(this)[0].checkValidity()) {
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
    return function (change) {
        var newState = ulState + change;
        if (newState < 0 || newState > renderForm.liLength - 1 || !change) return ulState;
        ulState = newState;
        return ulState
    }
}());


var renderForm = (function () {

    var $ul = $('#form-section form > ul'),
        $li = $('#form-section form > ul > li'),
        isMobile = (function() {
            var check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
          })();

    var render = {
        updateButtons(newState) {

            $('#prev-button').finish().animate({
                'opacity': newState === 0 ? '0' : '1'
            }, "fast")
            $('#next-button').finish().animate({
                'opacity': newState === $li.length - 1 ? '0' : '1'
            }, "fast")
        },
        animateUl(newState) {
            if (!isMobile) {    
                $ul.finish().animate({
                    'margin-left': parseInt($li.outerWidth()) * -newState
                });
                return;
            }
            $li.each(function(index,el) {
                if (newState != index) {
                    $(el).hide();
                }
                else {
                    $(el).show();
                }
            })
        },
        updateNav(newState) {
            $('#progress-bar li span').each(function (i) {
                if (i < (newState)) {
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
            $li.outerWidth(parseInt($formWidth) + 'px');
        },
        render(newState) {
            for (let r in render) {
                render[r](newState);
            }
        },
        get liLength() {
            return $li.length
        }
    }

}());

$(window).on('resize', function () {
    renderForm.setWidth();
    renderForm.render(setState())
}).trigger('resize');