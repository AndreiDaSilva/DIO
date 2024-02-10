package candidatura;
public class ProcessoSeletivo {
    
    static void analisarCandidato(double salarioPretendido){
        double salarioBase = 2000.0;

        if (salarioBase > salarioPretendido) {
            System.out.println("Ligar para o candidato");
        } else if (salarioBase == salarioPretendido) {
            System.out.println("Ligar para o canditado com uma contrata proposta");
        } else {
            System.out.println("Aguardando o resultado dos demais cantidatos");
        }

    }

    
    
    public static void main(String[] args) {
        analisarCandidato(1900.00);
        analisarCandidato(2100.00);
        analisarCandidato(2000.00);
    }

}
