document.querySelector("form").addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you for contacting PowerFit Gym! We will get back to you soon.");

    this.reset();

});