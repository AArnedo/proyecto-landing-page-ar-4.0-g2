$(document).ready(function() {
    let current_fs, next_fs, previous_fs;
    let opacity;
    let current = 1;
    let steps = $("fieldset").length;
    setProgressBar(current);
  
    $(".next").click(function(event) {
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
  
      // Validar campos requeridos de informacion Personal
      const campoRequerido1 = current_fs.find('#fname');
      const campoRequerido2 = current_fs.find('#lname');
      if (campoRequerido1.val() === '' || campoRequerido2.val() === '') {
        event.preventDefault();
        alert('Debes completar los campos requeridos antes de continuar');
        return;
      }
      // Validar campos requeridos e informacion de Cuenta
      const campoRequerido3 = current_fs.find('#email');
      const campoRequerido4 = current_fs.find('#uname');
      if (campoRequerido3.val() === ''|| campoRequerido4.val() === '') {
      (event || window.event).preventDefault();
      alert('Debes completar los campos requeridos antes de continuar');
      return;
      }
      
      
      // Validar campos requeridos e informacion de reclamo
      const campoRequerido5 = current_fs.find('#fecha');
      const campoRequerido6 = current_fs.find('#reserva');
      const campoRequerido7 = current_fs.find('#motivo');
      const campoRequerido8 = current_fs.find('#detalle');
      if (campoRequerido5.val() === ''|| campoRequerido6.val() === ''|| campoRequerido7.val() === ''|| campoRequerido8.val() === '') {
      (event || window.event).preventDefault();
      alert('Debes completar los campos requeridos antes de continuar');
      return;
      }
  
      //  Activa Clase
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
      // Muestra el siguiente fieldset
      next_fs.show();
      // Hide the current fieldset with style
      current_fs.animate({
        opacity: 0
      }, {
        step: function(now) {
          // for making fielset appear animation
          opacity = 1 - now;
  
          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          next_fs.css({
            'opacity': opacity
          });
        },
        duration: 500
      });
      setProgressBar(++current);
    });
  
    $(".previous").click(function() {
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      // Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
      // Muestra el anterior fieldset
      previous_fs.show();
  
      // Hide the current fieldset with style
      current_fs.animate({
        opacity: 0
      }, {
        step: function(now) {
          // for making fielset appear animation
          opacity = 1 - now;
  
          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          previous_fs.css({
            'opacity': opacity
          });
        },
        duration: 500
      });
      setProgressBar(--current);
    });
  
    function setProgressBar(curStep) {
      let percent = parseFloat(100 / steps) * curStep;
      percent = percent.toFixed();
      $(".progress-bar")
        .css("width", percent + "%")
    }
  
    $(".submit").click(function() {
      return false;
    })
  
  });
  /* validar fecha */
  function validarFecha() {
    var fechaInput = new Date(document.getElementById("fecha").value);
    var fechaActual = new Date();
  
    if (fechaInput > fechaActual) {
      alert("La fecha no puede ser una fecha futura");
      document.getElementById("fecha").value = "";
    }
  }