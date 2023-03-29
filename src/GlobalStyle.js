import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --maxWidth: 1280px; 
    --white: #fff;
    --black:#000;
    --lightGrey: #eee;
    --MedGrey:#353535;
    --darkGrey: #1c1c1c;
    --grey:#808080;
    --Blue-Gray:	#7393B3;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.4rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;   
}


*{
    box-sizing: border-box;
    font-family: 'Roboto Flex', sans-serif;
}
body{
    padding: 0;
    margin: 0;  
    
    h1{
       font-size:2rem;
       font-weight:600;
       color:var(--white);  
    }
    h3{
        font-size:1.1rem;
        font-weight:600;    
    }
    
    p{
        font-size:15px;
        
    }
    a{
        cursor: pointer;
    }
}
.display{
    display:visible;
    color:red;
}
.hide{
    visibility: hidden;
}
@media screen and (max-width: 390px) {
   
   
  }

`;
