import java.util.Locale;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in).useLocale(Locale.US);

        System.out.println("Digite seu nome:");
        String nome = scn.next();

        System.out.println("Digite seu sobrenome:");
        String sobrenome = scn.next();

        System.out.println("Digite sua idade:");
        int idade = scn.nextInt();

        System.out.println("Digite sua altura:");
        double altura = scn.nextDouble();

        System.out.println("\nOla, me chamo " + nome + " " + sobrenome + "\ntenho " + idade + " anos \nminha altura e "
                + altura + "cm ");
    }
}
