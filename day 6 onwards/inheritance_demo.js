class bike{
    speed()
    {
        document.write("60km/hr")
    }
}
class pulsar extends bike{
    speed()
    {
        document.write("92km/hr")
    }
}
let pi=new pulsar()
pi.speed()