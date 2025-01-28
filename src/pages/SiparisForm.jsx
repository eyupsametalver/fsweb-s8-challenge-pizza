import React, { useState, useEffect } from 'react';
import './SiparisForm.css';
function SiparisForm() {
  const [pizzaBoyutu, setPizzaBoyutu] = useState('Orta');
  const [hamurTuru, setHamurTuru] = useState('Kalın');
  const [ekMalzemeler, setEkMalzemeler] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState('');
  const [siparisSayisi, setSiparisSayisi] = useState(1);
  const [toplamFiyat, setToplamFiyat] = useState(85.50);
  const [isim, setIsim] = useState('');
  const [hataMesaji, setHataMesaji] = useState('');

  const ekMalzemeFiyati = 5;
  const pizzaFiyati = 85.50;
  const ekMalzemelerinToplamFiyati = ekMalzemeler.length * ekMalzemeFiyati;

  useEffect(() => {
    const yeniToplam = pizzaFiyati * siparisSayisi + ekMalzemeler.length * ekMalzemeFiyati;
    setToplamFiyat(yeniToplam);
  }, [ekMalzemeler, siparisSayisi]);

  const handleEkMalzemeDegisimi = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setEkMalzemeler([...ekMalzemeler, value]);
    } else {
      setEkMalzemeler(ekMalzemeler.filter(malzeme => malzeme !== value));
    }
  };
  const handleIsimDegisimi = (e) => {
    setIsim(e.target.value);
    if (e.target.value.length < 3) {
      setHataMesaji('Lütfen en az 3 karakter giriniz.');
    } else {
      setHataMesaji('');
    }
  };

  return (
    <div className='wrap'>
      <header className="form-baslik">
        <h1>Teknolojik Yemekler</h1>
        <div>
        <nav className="nav-baslik">
          <a href="#">Ana Sayfa </a>
          <p className="tire"> - </p>
          <a href="#"> Sipariş Oluştur </a>
        </nav>
        </div>
        </header>
    <div className="form-div">
      <h2 className="main-pizza">Position Absolute Acı Pizza</h2>
      <div className='about-pizza'>
      <p className='pizza-price'>85.50 ₺</p> 
      <p className='pizza-point'> 4.9 </p>
      <p className='pizza-comment'>(200)</p>
      </div>
      <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
         daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
         düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
         Küçük bir pizzaya bazen pizzetta denir</p>
      
      <form>
        <div className='boyut-hamur'> 
        <div className='pizza-boyut'>
          <p className='boyut-sec'>Boyut Seç *</p>
          <label>
            <input
              type="radio"
              value="Küçük"
              checked={pizzaBoyutu === 'Küçük'}
              onChange={(e) => setPizzaBoyutu(e.target.value)}
            />
            Küçük
          </label>
          <label>
            <input
              type="radio"
              value="Orta"
              checked={pizzaBoyutu === 'Orta'}
              onChange={(e) => setPizzaBoyutu(e.target.value)}
            />
            Orta
          </label>
          <label>
            <input
              type="radio"
              value="Büyük"
              checked={pizzaBoyutu === 'Büyük'}
              onChange={(e) => setPizzaBoyutu(e.target.value)}
            />
            Büyük
          </label>
        </div>

        <div className='hamur-sec'>
          <p className='hamur-baslik'>Hamur Seç *</p>
          <select value={hamurTuru} onChange={(e) => setHamurTuru(e.target.value)}>
            <option value="İnce">İnce Hamur</option>
            <option value="Kalın">Kalın Hamur</option>
          </select>
        </div>
        </div>
          <h3 className='ekMalzeme-baslik'>Ek Malzemeler</h3>
          <p className='malzeme-bilgi'>En fazla 10 malzeme seçebilirsiniz. +5 ₺</p>
        <div className='malzemeler'>
          <label>
            <input
              type="checkbox"
              value="Pepperoni"
              checked={ekMalzemeler.includes('Pepperoni')}
              onChange={handleEkMalzemeDegisimi}
            />
            Pepperoni
          </label>
          <label>
            <input
              type="checkbox"
              value="Tavuk-Izgara"
              checked={ekMalzemeler.includes('Tavuk-Izgara')}
              onChange={handleEkMalzemeDegisimi}
            />
            Tavuk Izgara
          </label>
          <label>
            <input
              type="checkbox"
              value="Mısır"
              checked={ekMalzemeler.includes('Mısır')}
              onChange={handleEkMalzemeDegisimi}
            />
            Mısır
          </label>
          <label>
            <input
              type="checkbox"
              value="Sarımsak"
              checked={ekMalzemeler.includes('Sarımsak')}
              onChange={handleEkMalzemeDegisimi}
            />
            Sarımsak
          </label>
          <label>
            <input
              type="checkbox"
              value="Ananas"
              checked={ekMalzemeler.includes('Ananas')}
              onChange={handleEkMalzemeDegisimi}
            />
            Ananas
          </label>
          <label>
            <input
              type="checkbox"
              value="Sosis"
              checked={ekMalzemeler.includes('Sosis')}
              onChange={handleEkMalzemeDegisimi}
            />
            Sosis
          </label>
          <label>
            <input
              type="checkbox"
              value="Soğan"
              checked={ekMalzemeler.includes('Soğan')}
              onChange={handleEkMalzemeDegisimi}
            />
            Soğan
          </label>
          <label>
            <input
              type="checkbox"
              value="Sucuk"
              checked={ekMalzemeler.includes('Sucuk')}
              onChange={handleEkMalzemeDegisimi}
            />
            Sucuk
          </label>
          <label>
            <input
              type="checkbox"
              value="Biber"
              checked={ekMalzemeler.includes('Biber')}
              onChange={handleEkMalzemeDegisimi}
            />
            Biber
          </label>
          <label>
            <input
              type="checkbox"
              value="Kabak"
              checked={ekMalzemeler.includes('Kabak')}
              onChange={handleEkMalzemeDegisimi}
            />
            Kabak
          </label>
          <label>
            <input
              type="checkbox"
              value="Domates"
              checked={ekMalzemeler.includes('Domates')}
              onChange={handleEkMalzemeDegisimi}
            />
            Domates
          </label>
          <label>
            <input
              type="checkbox"
              value="Kanada-Jambonu"
              checked={ekMalzemeler.includes('Kanada-Jambonu')}
              onChange={handleEkMalzemeDegisimi}
            />
            Kanada Jambonu
          </label>
          <label>
            <input
              type="checkbox"
              value="Jalepeno"
              checked={ekMalzemeler.includes('Jalepeno')}
              onChange={handleEkMalzemeDegisimi}
            />
            Jalepeno
          </label>
          <label>
            <input
              type="checkbox"
              value="Pastırma"
              checked={ekMalzemeler.includes('Pastırma')}
              onChange={handleEkMalzemeDegisimi}
            />
            Pastırma
          </label>
        </div>
        <div className='kullanici-div'>
          <p className='kullanici-title'>Adınız Soyadınız</p>
          <label>
            <input className='isim-alani'
              type="text"
              value={isim}
              onChange={handleIsimDegisimi}
            />
            {hataMesaji && <p className="hata-mesaji">{hataMesaji}</p>}
          </label>
        </div>
        <div className='div-siparis'>
          <p className='siparis-name'>Sipariş Notu</p>
        <label>
          <textarea className='siparis-notu' value={siparisNotu} onChange={(e) => setSiparisNotu(e.target.value)} />
        </label>
        </div>
        <div className="horizontal-line"></div>
        <div className='siparis-alani'>
        <label>
          Sipariş Sayısı:
          <input
            type="number"
            value={siparisSayisi}
            onChange={(e) => setSiparisSayisi(Number(e.target.value))}
          />
        </label>
        <div className='ödeme-alani'>
        <p>Seçimler {ekMalzemelerinToplamFiyati } ₺</p>
        <p>Toplam  {toplamFiyat} ₺</p>
        <button type="submit">Siparişi Tamamla</button>
        </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default SiparisForm;