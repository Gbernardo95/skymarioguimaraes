// O FormSubmit já faz o envio e redireciona. 
// Se quiser feedback instantâneo sem sair da página, descomente abaixo e remova o action do formulário.
/*
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('formMessage').textContent = "Obrigado! Seus dados foram enviados com sucesso. Em breve entraremos em contato.";
  setTimeout(() => {
    document.getElementById('contactForm').reset();
    document.getElementById('formMessage').textContent = "";
  }, 6000);
});
*/