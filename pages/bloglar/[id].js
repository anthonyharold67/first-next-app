import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detail = ({blog}) => {
  const router = useRouter();
  const { id } = router.query;
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((response) => setDetail(response));
  }, [id]);

  console.log(detail);

  return (
    <div>
      <p>
        <p>useEffectten gelen</p>
        <h3>{detail.title}</h3>
        <p>getServerSideProps tan gelen</p>
        <h3>{blog.title}</h3>
      </p>
    </div>
  );
};

export default Detail;

export const getServerSideProps=async(context)=>{
    const { id } = context.query;
    const detail = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then((response) => response.json())
     .then((response) => response);
     return {
        props: {
            blog:detail
        }
    }

}

//Kullanım efekti, bileşeniniz monte edildikten sonra çalışacaktır, bu nedenle sayfanızın yüklendiğini ve ardından verilerin göründüğünü fark edeceksiniz.

// Sunucu tarafı donanımları, sayfanızın halihazırda üzerinde bulunan verilerle yüklenmesini sağlar. Tecrübelerime göre, bu biraz daha hızlı yükleniyor.

// Aradaki fark, sayfa zaten yüklendikten sonra bir anlık verinin belirdiğini fark etmemeniz ve html belgesinin önceden verilerle doldurularak çok daha iyi seo yapılmasına olanak sağlamasıdır.

// Sadece useEffect kancası ile getStaticProps veya getServerSideProps kullanımı arasındaki bir şeyi açıklığa kavuşturmak istedim.

// Next.js varsayılan olarak her sayfayı sunucu tarafında HTML olarak önceden işler ve yüklenmesi için tarayıcıya gönderir. Çoğu zaman, bir blog gönderisi listesi veya bir kullanıcının izinleri/rolleri gibi, işlenecek verileri almak için bazı API'lere bir HTTP isteğinde bulunmamız gerekir. Sayfa/bileşen içindeki useEffect kancasını kullanarak verileri getirseydik, birkaç şey yapıyor olurduk:

// Önceden oluşturulmuş HTML'yi minimum JS ile geri gönderirdik ve bu JS, verilerimizle sunucuya bir HTTP isteği yapan useEffect kancasını içeren istemci tarafında yürütülür.

// Alınan verilerle bir şeyler yapardık, genellikle onu işlerdik.

// Yapmayacağımız şey:

// Veri alma ve ön işleme için Next'in mekanizmasından yararlanma. Verileri useEffect içinde getirdiğimiz için, veriler bileşen bağlandıktan sonra alınır, bu nedenle istemci tarafında getirilmesi gerekir.

// Devam ettim ve hem useEffect hem de getStaticProps ile deneyler yaptım. Verileri useEffect kancasının geri araması içinde aldıktan sonra oluşturduğumda, verilerin yaklaşık yarım saniye sonra göründüğünü fark ettim. Bunu getStaticProps kullanarak yaptığımda, veriler bir anda bir arada anında ortaya çıktı. Bunun nedeni, verilerin getirilmesi ve bileşenimizin şablonuna dayalı olarak oluşturulan HTML'ye ayrıştırılması ve ardından işlenmek üzere müşteriye tam bir belge olarak gönderilmesidir.

//bu örnekte useEffect kullanmak daha poerformanslı.getServerSideProps u seo ile alakalı işlemlerde kullanabiliriz ama burada kullanmamıza gerek yok
// Sayfanız sık sık güncellenen veriler içeriyorsa ve verileri önceden oluşturmanız gerekmiyorsa, istemci tarafında verileri getirebilirsiniz. Bunun bir örneği, kullanıcıya özel verilerdir:

// İlk olarak, sayfayı veri olmadan hemen gösterin. Sayfanın bazı bölümleri, Statik Oluşturma kullanılarak önceden oluşturulabilir. Eksik veriler için yükleme durumlarını gösterebilirsiniz
// Ardından, istemci tarafındaki verileri alın ve hazır olduğunuzda görüntüleyin.
// Bu yaklaşım, örneğin kullanıcı kontrol paneli sayfaları için iyi çalışır. Pano özel, kullanıcıya özel bir sayfa olduğu için SEO alakalı değildir ve sayfanın önceden oluşturulmasına gerek yoktur. Veriler sık ​​sık güncellenir, bu da istek anında veri getirmeyi gerektirir.
