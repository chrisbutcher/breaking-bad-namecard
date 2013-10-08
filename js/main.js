$(function(){

  $('#name').focus();
  $('#name').val('');

  String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
  }

  var c = $('#name_canvas')[0];
  var ctx=c.getContext("2d");

  var chemicals = [{"symbol": "ac", "name": "actinium"},{"symbol": "ag", "name": "silver"},{"symbol": "al", "name": "aluminum"},{"symbol": "am", "name": "americium"},{"symbol": "ar", "name": "argon"},{"symbol": "as", "name": "arsenic"},{"symbol": "at", "name": "astatine"},{"symbol": "au", "name": "gold"},{"symbol": "b", "name": "boron"},{"symbol": "ba", "name": "barium"},{"symbol": "be", "name": "beryllium"},{"symbol": "bh", "name": "bohrium"},{"symbol": "bi", "name": "bismuth"},{"symbol": "bk", "name": "berkelium"},{"symbol": "br", "name": "bromine"},{"symbol": "c", "name": "carbon"},{"symbol": "ca", "name": "calcium"},{"symbol": "cd", "name": "cadmium"},{"symbol": "ce", "name": "cerium"},{"symbol": "cf", "name": "californium"},{"symbol": "cl", "name": "chlorine"},{"symbol": "cm", "name": "curium"},{"symbol": "co", "name": "cobalt"},{"symbol": "cn", "name": "copernicium"},{"symbol": "cr", "name": "chromium"},{"symbol": "cs", "name": "cesium"},{"symbol": "cu", "name": "copper"},{"symbol": "db", "name": "dubnium"},{"symbol": "ds", "name": "darmstadtium"},{"symbol": "dy", "name": "dysprosium"},{"symbol": "er", "name": "erbium"},{"symbol": "es", "name": "einsteinium"},{"symbol": "eu", "name": "europium"},{"symbol": "f", "name": "fluorine"},{"symbol": "fe", "name": "iron"},{"symbol": "fm", "name": "fermium"},{"symbol": "fr", "name": "francium"},{"symbol": "ga", "name": "gallium"},{"symbol": "gd", "name": "gadolinium"},{"symbol": "ge", "name": "germanium"},{"symbol": "h", "name": "hydrogen"},{"symbol": "he", "name": "helium"},{"symbol": "hf", "name": "hafnium"},{"symbol": "hg", "name": "mercury"},{"symbol": "ho", "name": "holmium"},{"symbol": "hs", "name": "hassium"},{"symbol": "i", "name": "iodine"},{"symbol": "in", "name": "indium"},{"symbol": "ir", "name": "iridium"},{"symbol": "k", "name": "potassium"},{"symbol": "kr", "name": "krypton"},{"symbol": "la", "name": "lanthanum"},{"symbol": "li", "name": "lithium"},{"symbol": "lr", "name": "lawrencium"},{"symbol": "lu", "name": "lutetium"},{"symbol": "md", "name": "mendelevium"},{"symbol": "mg", "name": "magnesium"},{"symbol": "mn", "name": "manganese"},{"symbol": "mo", "name": "molybdenum"},{"symbol": "mt", "name": "meitnerium"},{"symbol": "n", "name": "nitrogen"},{"symbol": "na", "name": "sodium"},{"symbol": "nb", "name": "niobium"},{"symbol": "nd", "name": "neodymium"},{"symbol": "ne", "name": "neon"},{"symbol": "ni", "name": "nickel"},{"symbol": "no", "name": "nobelium"},{"symbol": "np", "name": "neptunium"},{"symbol": "o", "name": "oxygen"},{"symbol": "os", "name": "osmium"},{"symbol": "p", "name": "phosphorus"},{"symbol": "pa", "name": "protactinium"},{"symbol": "pb", "name": "lead"},{"symbol": "pd", "name": "palladium"},{"symbol": "pm", "name": "promethium"},{"symbol": "po", "name": "polonium"},{"symbol": "pr", "name": "praseodymium"},{"symbol": "pt", "name": "platinum"},{"symbol": "pu", "name": "plutonium"},{"symbol": "ra", "name": "radium"},{"symbol": "rb", "name": "rubidium"},{"symbol": "re", "name": "rhenium"},{"symbol": "rf", "name": "rutherfordium"},{"symbol": "rg", "name": "roentgenium"},{"symbol": "rh", "name": "rhodium"},{"symbol": "rn", "name": "radon"},{"symbol": "ru", "name": "ruthenium"},{"symbol": "s", "name": "sulfur"},{"symbol": "sb", "name": "antimony"},{"symbol": "sc", "name": "scandium"},{"symbol": "se", "name": "selenium"},{"symbol": "sg", "name": "seaborgium"},{"symbol": "si", "name": "silicon"},{"symbol": "sm", "name": "samarium"},{"symbol": "sn", "name": "tin"},{"symbol": "sr", "name": "strontium"},{"symbol": "ta", "name": "tantalum"},{"symbol": "tb", "name": "terbium"},{"symbol": "tc", "name": "technetium"},{"symbol": "te", "name": "tellurium"},{"symbol": "th", "name": "thorium"},{"symbol": "ti", "name": "titanium"},{"symbol": "tl", "name": "thallium"},{"symbol": "tm", "name": "thulium"},{"symbol": "u", "name": "uranium"},{"symbol": "uuh", "name": "ununhexium"},{"symbol": "uun", "name": "ununnilium"},{"symbol": "uuo", "name": "ununoctium"},{"symbol": "uup", "name": "ununpentium"},{"symbol": "uuq", "name": "ununquadium"},{"symbol": "uus", "name": "ununseptium"},{"symbol": "uut", "name": "ununtrium"},{"symbol": "uuu", "name": "ununumium"},{"symbol": "v", "name": "vanadium"},{"symbol": "w", "name": "tungsten"},{"symbol": "xe", "name": "xenon"},{"symbol": "y", "name": "yttrium"},{"symbol": "yb", "name": "ytterbium"},{"symbol": "zn", "name": "zinc"},{"symbol": "zr", "name": "zirconium"}];
  
  function randomColor(){
      var r = Math.floor(Math.random()*256);
      var g = Math.floor(Math.random()*256);
      var b = Math.floor(Math.random()*256);
      return "rgb("+ r + "," + g + "," + b +")";
  }

  function breaking_bad_text(prefix, symbol, suffix, x, y){
      for(var i = 0; i <= prefix.length; ++i){
          var ch = prefix.charAt(i);
          ctx.fillStyle = 'rgb(230, 230, 230)';
          ctx.fillText(prefix.charAt(i), x, y);
          x += ctx.measureText(ch).width;
      }

      for(var i = 0; i <= symbol.length; ++i){
          var ch = symbol.charAt(i);
          ctx.fillStyle = 'rgb(62, 105, 65)';
          ctx.fillText(symbol.charAt(i), x, y);
          x += ctx.measureText(ch).width;
      }

      for(var i = 0; i <= suffix.length; ++i){
          var ch = suffix.charAt(i);
          ctx.fillStyle = 'rgb(230, 230, 230)';
          ctx.fillText(suffix.charAt(i), x, y);
          x += ctx.measureText(ch).width;
      }
  }

  $(document).on("keypress", "#name", function(event) {

      // Enter pressed
      if(event.which == 13) {
        event.preventDefault();

        $("#match_list").empty();    

        var name_raw = $('#name').val();
        var name = _(name_raw).titleize();

        $('#first_tip').fadeIn();

        _.each(chemicals, function(chemical){
          var match = name.match(new RegExp(chemical.symbol, "i"));

          if (match != null){
            var name_prefix = name.substring(0, match.index);
            var name_suffix = name.substring(match.index + chemical.symbol.length, name.length);

            var symbol_capitalized = chemical.symbol.charAt(0).toUpperCase() + chemical.symbol.slice(1);
            var chemical_name_capitalized = chemical.name.charAt(0).toUpperCase() + chemical.name.slice(1);

            $('#match_list').append('<li class="generated_name" data-name_prefix=" ' +
                                                                  name_prefix +
                                                                  '" data-symbol_capitalized="' + symbol_capitalized +
                                                                  '" data-chemical_name_capitalized="' + chemical_name_capitalized +
                                                                  '" data-name_suffix="' + name_suffix + '">' +
                                                                  name_prefix +
                                                                  '<span class="chemical_color" title="' +
                                                                  chemical_name_capitalized +
                                                                  '"><b>' +
                                                                  symbol_capitalized +
                                                                  '</b></span>' +
                                                                  name_suffix +
                                                                  '</li>');

            $('#results').fadeIn();
          }
        });

        $( ".generated_name" ).on( "click", function() {
          $('#name_canvas').fadeIn();
          $('#second_tip').fadeIn();

          ctx.clearRect (0, 0, 851, 315);

          var gradient = c.getContext("2d").createLinearGradient(0, 0, 1, 851);

          gradient.addColorStop(0, '#1f2519');
          gradient.addColorStop(0.2, '#202819');
          gradient.addColorStop(0.4, '#2d3116');
          gradient.addColorStop(0.6, '#313213');
          gradient.addColorStop(0.8, '#2f2911');
          gradient.addColorStop(1.0, '#101010');

          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, 851, 315);

          ctx.font="bold 50px Arial";
          breaking_bad_text($(this).data('name_prefix'), $(this).data('symbol_capitalized'), $(this).data('name_suffix'), 30, c.height / 2 - 31);

          $('#chemical_tip').text($(this).data('symbol_capitalized') + ' = ' + $(this).data('chemical_name_capitalized'));
          $('#chemical_tip').attr('href', 'http://en.wikipedia.org/wiki/' + $(this).data('chemical_name_capitalized'));

          var container = $('div'),
          scrollTo = $('#name_canvas');

          $('html,body').animate({scrollTop: scrollTo.offset().top});
        });
      }
  });

  $(document).foundation();
});
