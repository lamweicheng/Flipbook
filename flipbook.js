<script>
  const flipButton = document.querySelector("#flipButton");
  const flipper = document.querySelector(".flipper");
  
  flipButton.addEventListener("click", function() {
    flipper.classList.toggle("flipped");
  });
</script>
