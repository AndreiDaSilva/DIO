import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner tec = new Scanner(System.in);

        ContaPessoa pessoa = new ContaPessoa();

        System.out.println("Digite o numero da conta");
        pessoa.setNumero(tec.nextInt());

        System.out.println("Digite a agencia");
        pessoa.setAgencia(tec.next());

        System.out.println("Digite o nome completo");
        pessoa.setNome(tec.next());

        System.out.println("Digite o saldo da conta");
        pessoa.setSaldo(tec.nextDouble());

        System.out.println(pessoa.toString());

    }
}
