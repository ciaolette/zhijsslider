var box = document.box, 
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    box = document.querySelector('#mainsection');
    function setColor(){
        var r_hex = parseInt(r.value, 10).toString(16),
            g_hex = parseInt(g.value, 10).toString(16),
            b_hex = parseInt(b.value, 10).toString(16),
            hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
          box.style.backgroundColor = hex; 
        hex_out.value = hex;
      }
      
      function pad(n){
        return (n.length<2) ? "0"+n : n;
      }
      
      r.addEventListener('change', function() {
        setColor();
        r_out.value = r.value;
      }, false);
      
      r.addEventListener('input', function() {
        setColor();
        r_out.value = r.value;
      }, false);
      
      g.addEventListener('change', function() {
        setColor();
        g_out.value = g.value;
      }, false);
      
      g.addEventListener('input', function() {
        setColor();
        g_out.value = g.value;
      }, false);
      
      b.addEventListener('change', function() {
        setColor();
        b_out.value = b.value;
      }, false);
      
      b.addEventListener('input', function() {
        setColor();
        b_out.value = b.value;
      }, false);


    function changeOpacity(val){
        let myDiv = document.getElementById("#mainsection");
        mainsection.style.opacity=val;
    }
    

    rangeInput = document.getElementById('range');
    container = document.getElementById('mainsection')[0];
    
    rangeInput.addEventListener("mousemove",function(){
    mainsection.style.filter = "brightness(" + rangeInput.value + "%)";
    });


   