public class App {
    public static void main(String[] args) {

        Carro carro1 = new Carro();
        carro1.setCor("Azul");
        carro1.setModelo("Audi A3");
        carro1.setCapacidadeTanque(58);
        System.out.println(carro1.getModelo());
        System.out.println(carro1.getCor());
        System.out.println(carro1.getCapacidadeTanque());
        System.out.println(carro1.totalValorTanque(6.19) + "\n");

        Carro carro2 = new Carro("Rosa", "BMW 320i", 72);
        System.out.println(carro2.getModelo());
        System.out.println(carro2.getCor());
        System.out.println(carro2.getCapacidadeTanque());
        System.out.println(carro2.totalValorTanque(6.19) + "\n");
    }
}
