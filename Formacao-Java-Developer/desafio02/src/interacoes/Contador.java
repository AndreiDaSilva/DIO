package interacoes;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Contador {

    static void contar(int numbUm, int numbDois) throws ParametrosInvalidosException {
        if (numbUm > numbDois) {
            throw new ParametrosInvalidosException();
        }
        int contador = numbDois - numbUm;
        System.out.println("Os numeros seram contados até " + contador);
        for (int i = 1; i <= contador; i++) {
            System.out.println("Numero = " + i);
        }
    }

    public static void main(String[] args) {
        
        try {
            Scanner sc = new Scanner(System.in);
            System.out.println("Digite o primeiro numero");
            int numbUm = sc.nextInt();
            System.out.println("Digite o segundo numero");
            int numbDois = sc.nextInt();
            contar(numbUm, numbDois);

        } catch (InputMismatchException e) {
            System.out.println("Divite um valor inteiro, sem virgulas ou ponto");
        } catch (ParametrosInvalidosException e) {
            System.out.println("Primeiro numero tem que ser menor que o segundo");
        }
    }

}
