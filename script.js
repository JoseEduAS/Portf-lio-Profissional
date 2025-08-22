    // ===== Validação do formulário =====
    document.getElementById("formContato").addEventListener("submit", function(e){
      e.preventDefault();
      let nome = document.getElementById("nome").value.trim();
      let email = document.getElementById("email").value.trim();
      let mensagemInput = document.getElementById("mensagemInput").value.trim();
      let mensagem = document.getElementById("mensagem");

      if(nome === "" || email === "" || mensagemInput === ""){
        mensagem.style.color = "red";
        mensagem.textContent = "Por favor, preencha todos os campos!";
      } else {
        mensagem.style.color = "green";
        mensagem.textContent = "Mensagem enviada com sucesso!";
        document.getElementById("formContato").reset();
      }
    });