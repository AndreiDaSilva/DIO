package candidatura;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class ProcessoSeletivo {

    static void analisarCandidato(double salarioPretendido) {
        double salarioBase = 2000.0;

        if (salarioBase > salarioPretendido) {
            System.out.println("Ligar para o candidato");
        } else if (salarioBase == salarioPretendido) {
            System.out.println("Ligar para o canditado com uma contrata proposta");
        } else {
            System.out.println("Aguardando o resultado dos demais cantidatos");
        }

    }

    static void entrandoEmcontato(String candidato) {
            
    }

    static boolean atender() {
        return new Random().nextInt(3) == 1;
    }

    

    static String[] selecaoCandidatos() {
        String[] candidatos = { "ANDREI", "PAULO", "MARCIO", "FERNANDA", "AUGUSTO", "MONICA", "MIRALA", "PEDRO",
                "FELIPE", "JULIA" };
        String[] selecionados = new String[5];

        int candidatoSelecionados = 0;
        int candidatoAtual = 0;
        double salarioBase = 2000.0;
        while (candidatoSelecionados < 5 && candidatoAtual < candidatos.length) {
            String candidato = candidatos[candidatoAtual];
            double salarioPretendido = valorPretendido();

            if (salarioBase >= salarioPretendido) {
                selecionados[candidatoSelecionados] = candidato;
                candidatoSelecionados++;
            }
            candidatoAtual++;
        }

        return selecionados;
    }

    static double valorPretendido() {
        return ThreadLocalRandom.current().nextDouble(1800, 2200);
    }

    static String imprimirSelecionados() {

        String[] canditadosSelecionados = selecaoCandidatos();
        String msg = "Os cadidatos selecionados foram = ";
        for (int i = 0; i < canditadosSelecionados.length; i++) {
            if (i < canditadosSelecionados.length - 1 && canditadosSelecionados[i + 1] != null) {
                msg += canditadosSelecionados[i] + ", ";
            } else if (canditadosSelecionados[i] != null) {
                msg += canditadosSelecionados[i] + ".";
            }
        }

        return msg;
    }

    public static void main(String[] args) {
        System.out.println(imprimirSelecionados());
    }

}
