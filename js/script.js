let color = document.getElementsByClassName("color__box");

for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('click', (e) => {
      let clickedColor = e.target.innerText;
      switch(clickedColor){
        case "RED": document.body.style.backgroundColor = "red"; break;
        case "BLUE": document.body.style.backgroundColor = "blue"; break;
        case "GREEN": document.body.style.backgroundColor = "green"; break;
        case "YELLOW": document.body.style.backgroundColor = "yellow"; break;
        case "PINK": document.body.style.backgroundColor = "pink"; break;
        case "WHITE": document.body.style.backgroundColor = "white"; break;
        case "BLACK": document.body.style.backgroundColor = "black"; break;
        case "GRAY": document.body.style.backgroundColor = "gray"; break;
        case "VIOLET": document.body.style.backgroundColor = "violet"; break;
        default:
      }
    });
  }
