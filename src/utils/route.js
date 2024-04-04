import { getUser } from "../global/state/globalstate";
import { Login, PrintPokemonPage, printTemplateDashboard } from "../pages"; //faltaria añadir PrintTicTacToePage()


export const initControler = (pagesRender) => {
 
    switch (pagesRender) {
  
    // si no hay usuario, pinta el Login
      case undefined:
        localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
        break;

      case "Pokemon":
        PrintPokemonPage();
        break;
      case "Dashboard":
        printTemplateDashboard();
        break;
      case "TicTacToe":
        PrintTicTacToePage();
        break;
      case "Login":
        Login();
        break;
      case "Memory":
        "Memory()";
        break;
    }
  };