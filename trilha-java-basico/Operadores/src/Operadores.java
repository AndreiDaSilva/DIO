public class Operadores {   

    public static void main(String[] args) {
        
        
        String nomeCompleto = "LINGUAGEM" + " " + "JAVA";
        System.out.println(nomeCompleto);
        
        String concatenacao = "?";
        
        System.out.println(concatenacao);
        concatenacao = 1 + 1 + 1 + "1";
        System.out.println(concatenacao);
        concatenacao = 1+"1"+1+1;
        System.out.println(concatenacao);
        concatenacao = 1+"1"+1+"1";
        System.out.println(concatenacao);
        concatenacao = "1"+1+1+1;
        System.out.println(concatenacao);

        //incrementação
        int numero = 5;

        numero++;

        System.out.println(numero);

        numero =+ 1;

        System.out.println(numero);

        numero--;

        System.out.println(numero);
        
        //negação de boolean

        boolean ehVerdade = true;
        
        System.out.println(!ehVerdade);

        ehVerdade = !ehVerdade;

        System.out.println(ehVerdade);
    }


    
}