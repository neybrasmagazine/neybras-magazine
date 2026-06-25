/* Newsletter lead-magnet — capture email + remise du guide (partagé) */
(function(){
  var FS='https://formspree.io/f/mgoppdpg';
  function deliver(form,pdf){
    if(pdf){
      var a=document.createElement('a');
      a.href=pdf;a.setAttribute('download','');a.rel='noopener';
      document.body.appendChild(a);a.click();a.remove();
    }
    form.innerHTML='<p class="lnl-ok">✓ Merci ! Votre guide se télécharge.'+(pdf?' Sinon, <a href="'+pdf+'" download>cliquez ici</a>.':'')+'</p>';
  }
  function handle(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var inp=form.querySelector('input[type="email"]');
      var btn=form.querySelector('button[type="submit"]');
      var email=inp?inp.value.trim():'';
      if(!email||email.indexOf('@')<1){if(inp)inp.focus();return;}
      var pdf=form.getAttribute('data-pdf');
      if(btn){btn.textContent='Envoi…';btn.disabled=true;}
      try{ if(typeof window.brevoAdd==='function'){window.brevoAdd(email);} }catch(_){}
      fetch(FS,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({email:email,_subject:'Lead-magnet — Newsletter Neybras Magazine'})})
        .catch(function(){})
        .then(function(){ deliver(form,pdf); });
    });
  }
  document.querySelectorAll('form.lnl-form').forEach(handle);
})();
