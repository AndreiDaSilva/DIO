public class User {
    public static void main(String[] args) throws Exception {
        SmartTv smartTv = new SmartTv();

        System.out.println(smartTv.toString());

        smartTv.ligar();

        System.out.println(smartTv.toString());
    }
}
