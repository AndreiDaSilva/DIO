public class SmartTv {
    boolean ligada = false;
    int canal = 1;
    int volume = 25;

    public void ligar(){
        ligada = true;
    }

    public void desligar() {
        ligada = false;
    }

    public void aumetarVolume() {
        volume++;
        System.out.println("Volume: " + volume);
    }
    
    public void diminuirVolume() {
        volume--;
        System.out.println("Volume: " + volume);
    }

    public void aumetarCanal() {
        canal++;
        System.out.println("Volume: " + volume);
    }
    
    public void diminuirCanal() {
        canal--;
        System.out.println("Volume: " + volume);
    }

    public void mudarCanal(int novaCanal) {
        canal = novaCanal;
    }

}
