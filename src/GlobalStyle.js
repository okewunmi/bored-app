import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --MedGrey:#353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.4rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;   
}

.white{
    color:var(--white);
}
.color-change-5x{animation:color-change-5x 8s linear infinite alternate both}
@keyframes color-change-5x{0%{background:#19dcea}25%{background:#b22cff}50%{background:#ea2222}75%{background:#f5be10}100%{background:#3bd80d}}

*{
    box-sizing: border-box;
    font-family: 'Spectral', serif;
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
    h4{
        font-size:.9rem;
        font-weight:600; 
        color: var(--white);
        padding-left:.3rem; 
    }
    p{
        font-size:15px;
        color: var(--white);
    }
}


`;
