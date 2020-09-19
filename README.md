# ReactNative_ReviewsApp
React-Native öğrenimim ve gelişimim adına, öğrendiğim çeşitli componentleri ve yapıları bir proje içerisinde kullanarak aşina olma amacıyla çeşitli kaynaklardan da yararlanarak yaptığım React-Native projemdir.


## GameZone
Uygulama ilk olarak GameZone adında ana menu ekranı olarak nitelendirebileceğimiz bir ekran ile açılmakta, bu menude cardView şeklinde sıralanmış oyun isimleri mevcut.
spesifik olarak bir oyuna tıklarsak eğer o oyunun detaylarını "reviewDetails" kısmında görebiliriz.
Aynı zamanda Header'ın hemen altındaki "+" iconu'na tıklarsak newReviewForm ekranı açılmakta ve bu ekrandan isteğimize göre GameZone ekranına yeni bir oyun eklemesi yapabilmekteyiz.
(Not: yapılan eklemeler, uygulama veritabanı ile bağlı olmadığı için maalesef kalıcı değildir.)



![gameZone](https://user-images.githubusercontent.com/44782947/93664462-e8158c80-fa77-11ea-88fc-792909bef4fa.jpeg)


## NavigationDrawer
uygulamada iki adet StackNavigation bulunmaktadır. StackNavigation yapısının biri gameZone penceresi ile reviewDetails pencerisini kapsamaktadır.
ikinci StackNavigation yapısı olarak da About ekranı mevcut. Bu iki StackNavigation yapısı arasında NavigationDrawer yapısı ile soldan açılan menu ile geçiş yapabilmekteyiz.
Menu, gameZone penceresinin sol üstünde bulunan menu butonuna tıklandığında veya sol köşeden sağa sürüklenince açılmaktadır.
![gameZoneNavDrawer](https://user-images.githubusercontent.com/44782947/93664531-47739c80-fa78-11ea-809c-6a8b12fb94fe.jpeg)


## AboutScreen
About Ekranı, adından da anlaşılacağı üzere uygulama hakkında bir takım bilgileri barındırmakta.
![aboutScreen](https://user-images.githubusercontent.com/44782947/93664595-e4363a00-fa78-11ea-8416-f099b639c503.jpeg)


## RevieeDetails-pt1
Burada GameZone ekranında listelenen oyunların spesifik detayları mevcut. Bu detay oyundan oyuna değişmektedir.
Oyunların rating detayına göre bir png seçilip ona uygun olarak rating kısmı gösterilmektedir. Bu oyunun kalbimde yeri çok ayrı olduğu için rating değeri olarak 5 girmiştim
ve buna uygun olarak rating değerinde 5 adet kalp bulunan bir png gösterilmekte.
![reviewDetails1](https://user-images.githubusercontent.com/44782947/93664672-5c9cfb00-fa79-11ea-9230-7214b0264eb1.jpeg)


## ReviewDetails-pt2
Bahsettiğim üzere, her oyunun rating, body ve title bilgisi reviewDetail kısmında görülebilir halde, bu oyunun da rating değeri 4 olduğu için 
4 adet kalp bulunan bir png gösterilmekte.
![reviewDetails2](https://user-images.githubusercontent.com/44782947/93664753-ee0c6d00-fa79-11ea-8cae-1caee1c3ee99.jpeg)


## ReviewDetails-pt3
Yine farklı değerlere sahip bir review olarak bu oyunun da rating'i 3 olduğu için 3 adet kalp içeren bir png gösteriliyor. Ayrıca isteğe bağlı olarak
body kısımlarında da değişiklik yapılabilirdi ancak örnek olarak default "review body" gibi bir değer girdim tüm oyunlara.
![reviewDetails3](https://user-images.githubusercontent.com/44782947/93664811-47749c00-fa7a-11ea-861a-97381274f7bc.jpeg)


## ReviewDetails-pt4
Rating değeri 2 olan bir oyun da görüldüğü üzere 2 adet kalp içeren bir png resmi ile listelenmekte.
![reviewDetails4](https://user-images.githubusercontent.com/44782947/93664864-afc37d80-fa7a-11ea-8296-c59c060cc513.jpeg)


## ReviewDetails-pt5
Son olarak Rating değeri 1 olan oyunumuzu sizinle paylaşıyorum.
Bu kısımda anlatmak istediğim; girdilerin farklılıklarına göre ReviewDetails kısmında dinamik olarak farklılıklar görülebilmekte.
![reviewDetails5](https://user-images.githubusercontent.com/44782947/93664900-f618dc80-fa7a-11ea-9f43-cc9d0c991221.jpeg)


## NewReviewForm
İlk Başta "+" iconu'na tıklanınca açılan newReviewForm ekranı bu kısımdır. Burada title, body ve rating değerleri girildiğinde ve "Submit" butonuna tıklandığında 
GameZone ekranına yeni oyun review'i ekleyebiliriz. (tabii ki input field'ların geçerli girdilere sahip olması gerekmektedir.) 
Ayrıca üstte bulunan çarpı iconu ile de ekleme yapmaksızın tekrardan GameZone ekranına dönüş yapabilmekteyiz.
Bu form'u tasarlarken react-native 3.parti paketlerinden olan "formik" paketini kullandım.
![newReviewForm](https://user-images.githubusercontent.com/44782947/93665015-d8984280-fa7b-11ea-8b17-49911be9a623.jpeg)


## NewReview Inserted
burada da az önceki newReviewForm'da girdiğimiz ve submit butonuna tıkladığımzda bu review'in GameZone ekranında görüntülendiğini görmekteyiz.
![newReviewInserted](https://user-images.githubusercontent.com/44782947/93665093-7ee44800-fa7c-11ea-84dd-b233278ee06d.jpeg)


## InputValidation
Bu kısım da girdilerin geçerli olması için oluşturduğum kontrol sistemini görmekteyiz. Bu kontrol sistemini yine react-native 3. parti paketlerinden olan
"yup" paketi ile gerçekleştirdim. Geçerli Şemayı oluşturup Formik formuna bu şemayı eklediğimzde girdileri bu şekilde belli bir kontrol şeması altında tutabiliyoruz.
İstenen Şartlar sağlanmadıkça bu kontrol sistemi sayesinde bir review eklenmesini önlemiş oluyoruz.
![inputValidation](https://user-images.githubusercontent.com/44782947/93665122-c9fe5b00-fa7c-11ea-9709-38af35151639.jpeg)


Dip Not: Uygulamayı yaparken çeşitli tutorial'lardan ve bir çok dokumantasyon'dan yararlandım ancak her ne kadar bu kaynaklar yardımcı olsa bile çeşitli versiyon uyuşmazlıkları çıktı.
Elimden geldiğince kendime göre bir şeyler ekleyerek yapmaya çalıştım. Başta da belirttiğim gibi bu uygulamayı yapmamdaki asıl amaç öğrendiğim componentleri uygulayıp somut bir şekilde görebilmekti.
Ayrıca bu süreçte araştırma yapıp hataların nedeni sorguladığımda ve çözebildiğimde de çok keyif aldığımı belirtmeliyim.

