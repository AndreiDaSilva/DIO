package org.operadores;
public class Operadores {

    public static void main(String[] args) {

        String nomeCompleto = "LINGUAGEM" + " " + "JAVA";
        System.out.println(nomeCompleto);

        String concatenacao = "?";

        System.out.println(concatenacao);
        concatenacao = 1 + 1 + 1 + "1";
        System.out.println(concatenacao);
        concatenacao = 1 + "1" + 1 + 1;
        System.out.println(concatenacao);
        concatenacao = 1 + "1" + 1 + "1";
        System.out.println(concatenacao);
        concatenacao = "1" + 1 + 1 + 1;
        System.out.println(concatenacao);

        // incrementação
        int numero = 5;

        numero++;

        System.out.println(numero);

        numero = +1;

        System.out.println(numero);

        numero--;

        System.out.println(numero);

        // negação de boolean

        boolean ehVerdade = true;

        System.out.println(!ehVerdade);

        ehVerdade = !ehVerdade;

        System.out.println(ehVerdade);

        // Ternário

        int a, b;

        a = 5;
        b = 6;
        String resultado;

        if (a == b) {
            resultado = "verdadeiro";
        } else {
            resultado = "falso";
        }
        System.out.println(resultado);

        resultado = a == b ? "verdadeiro" : "falso";
        // true o false;
        System.out.println(resultado);

        // Relacionas

        int num1, num2;

        num1 = 1;
        num2 = 2;

        boolean simNao = num1 == num2;
        System.out.println("numeroUm é igual a numeroDois? " + simNao);

        simNao = num1 != num2;
        System.out.println("numeroUm é diferente a numeroDois? " + simNao);

        simNao = num1 > num2;
        System.out.println("numeroUm é maior a numeroDois? " + simNao);

        simNao = num1 < num2;
        System.out.println("numeroUm é menor a numeroDois? " + simNao);

        if (num1 == num2) {
            System.out.println("É igual");
        }

        String nome1 = "Andrei";
        String nome2 = "Andrei";
        String nome3 = new String("Andrei");

        if (nome1 == nome2) {
            System.out.println("Nome é igual");
        }

        
        if (nome1 == nome3) {
            System.out.println("Nome é igual");
        }
        
        if (nome1.equals(nome3)) {
            System.out.println("Nome é igual");
        }

        //Logicos
        boolean condicao1 = true;
        boolean condicao2 = false;

        if (condicao1 && condicao2) {
            System.out.println("As duas condições são verdadeira");
        }
        
        if (condicao1 || condicao2) {
            System.out.println("Uma das duas condições são verdadeiras");
            
        }

        System.out.println("fim");
    }

}
