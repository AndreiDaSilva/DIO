/**
 * <h1>Smart TV</h1>
 * A Smart Tv realiza operações de controle simulando funções básicas de uma TV.
 * <p>
 * <b>NOTE:</b> Leia atentamente a documentação desta classe para desfrutar dos recursos oferecido pelo autor
 * 
 * @author Andrei R. da Silva
 * @version 1.0
 * @since 14/04/2023
 */
public class SmartTv {
   
    boolean ligada = false;
    int canal = 1;
    int volume = 25;

    /**
     * Este método é utilizado para ligar a SmartTv
     */
    public void ligar() {
        ligada = true;
    }

    
    /**
     * Este método é utilizado para desligar a SmartTv
     */
    public void desligar() {
        ligada = false;
    }

    /**
     * Este método é utilizado para aumentar o volume somando 1 no valor da variável 
     * @return retorna no console novo valor da variável volume
     */
    public void aumetarVolume() {
        volume++;
        System.out.println("Volume: " + volume);
    }

    /**
     * Este método é utilizado para diminui o volume subtraindo 1 no valor da variável 
     * @return retorna no console novo valor da variável volume
     */
    public void diminuirVolume() {
        volume--;
        System.out.println("Volume: " + volume);
    }

    
    /**
     * Este método é utilizado para aumentar o canal somando 1 no valor da variável 
     * @return retorna no console novo valor da variável canal
     */
    public void aumetarCanal() {
        canal++;
        System.out.println("Volume: " + canal);
    }

    /**
     * Este método é utilizado para diminui o canal subtraindo 1 no valor da variável 
     * @return retorna no console novo valor da variável canal
     */
    public void diminuirCanal() {
        canal--;
        System.out.println("Volume: " + canal);
    }

    /**
     * Este método é utilizado para definir um canal especifico conforme desejado pelo usuário.
     * @param novaCanal este é parâmetro que adicionara o novo canal na variável canal 
     */
    public void mudarCanal(int novaCanal) {
        canal = novaCanal;
    }

    /**
     * Este método retornar um texto com o status atual do da variáveis da Smart Tv
     */
    @Override
    public String toString() {
        String msg = "Status: ";
        if (ligada == true) {
            msg += "\n Ligada: " + ligada;
            msg += "\n Canal: " + canal;
            msg += "\n Volume: " + volume;
        } else {
            msg += "\n Ligada: " + ligada;
        }
        return msg;
    }

}
