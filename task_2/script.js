 document.getElementById("styleForm").addEventListener("submit", function (e) {
      e.preventDefault(); 

      var textColor = document.getElementById("textColor").value;
      var bgColor = document.getElementById("bgColor").value;
      var content = document.getElementById("content").value;

      var output = document.getElementById("output");
      output.textContent = content;
      output.style.color = textColor;
      output.style.backgroundColor = bgColor;
      output.style.padding = "10px";
    });