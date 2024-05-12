window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
  } else {
      header.classList.remove('header-scrolled');
  }
});

document.addEventListener('DOMContentLoaded', function () {
const cards = document.querySelectorAll('.card');
let flippedCard = null;

cards.forEach(card => {
  card.addEventListener('click', function () {
    const cardInner = this.querySelector('.card-inner');
    
    if (flippedCard && flippedCard !== cardInner) {
      flippedCard.style.transform = 'rotateY(0)';
    }
    
    if (cardInner.style.transform === 'rotateY(180deg)') {
      cardInner.style.transform = 'rotateY(0)';
      flippedCard = null;
    } else {
      cardInner.style.transform = 'rotateY(180deg)';
      flippedCard = cardInner;
    }
  });
});
});



    var btn = document.getElementById('btn');
    var form = document.getElementById('contactForm');

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      checkInput();

    });

    function checkInput() {
      const items = document.querySelectorAll('.item');
      let valid = true;

      for (const item of items) {
        if (item.value.trim() === '') {
          valid = false;
          item.classList.add('error');
          item.parentElement.classList.add('error');
        } else {
          item.classList.remove('error');
          item.parentElement.classList.remove('error');
        }
      }

      if (valid) {
        if (!isValidEmail(document.getElementById('email').value)) {
          valid = false;
          const emailInput = document.getElementById('email');
          emailInput.classList.add('error');
          emailInput.parentElement.classList.add('error');
        }
      }

      if (valid) {
        if (!isValidPhoneNumber(document.getElementById('phone').value)) {
          valid = false;
          const phoneInput = document.getElementById('phone');
          phoneInput.classList.add('error');
          phoneInput.parentElement.classList.add('error');
        }
      }

      if (valid) {
        sendMessage();
      }
    }

    function isValidEmail(email) {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone) {
      // Regular expression for phone number validation
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    }


    function sendMessage() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var subject = document.getElementById('subject').value;
      var message = document.getElementById('message').value;
      var body = 'name: ' + name + '<br/> email: ' + email + '<br/> phone: ' + phone + '<br/> subject: ' + subject + '<br/> message: ' + message;

      Email.send({
        SecureToken: "9cb23832-8a61-4b77-a73c-d5f1c8aeea15",
        To: 'info@glamtwisthub.com',
        From: "info@glamtwisthub.com",
        Subject: "Contact message",
        Body: body
      }).then(
        message => {
          if (message == 'OK') {
            Swal.fire({
              title: "Success!",
              text: "Message sent successfully!",
              icon: "success"
            });
            // Reset form fields after successful submission
            form.reset();
          }
        }
      );
    }




