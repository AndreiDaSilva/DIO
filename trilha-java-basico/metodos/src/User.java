public class User {
    public static void main(String[] args) throws Exception {
        SmartTv smartTv = new SmartTv();

        System.out.println("Tv ligada? " + smartTv.ligada);
        System.out.println("Qual canal? " + smartTv.canal);
        System.out.println("Qual volume? " + smartTv.volume);
        
        smartTv.ligar();
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.aumetarVolume();
        smartTv.aumetarVolume();

        smartTv.mudarCanal(13);
        
        System.out.println("Status atual -> ");
        System.out.println("Tv ligada? " + smartTv.ligada);
        
        smartTv.desligar();
        System.out.println("Status atual -> ");
        System.out.println("Tv ligada? " + smartTv.ligada);
    }
}
