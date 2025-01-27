import React, { useState, useEffect } from 'react';

function SiparisForm() {
  const [pizzaBoyutu, setPizzaBoyutu] = useState('Orta');
  const [hamurTuru, setHamurTuru] = useState('Kalın');
  const [ekMalzemeler, setEkMalzemeler] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState('');
  const [siparisSayisi, setSiparisSayisi] = useState(1);
  const [toplamFiyat, setToplamFiyat] = useState(85.50);

  const ekMalzemeFiyati = 5;
  const pizzaFiyati = 85.50;

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

  return (
    <div>
      <header>
        <h1>Teknolojik Yemekler</h1>
        <nav>
          <a href="#">Ana Sayfa </a>
          <a href="#"> Sipariş Oluştur</a>
        </nav>
      </header>

      <h2>Pizza Absolute Acı Pizza</h2>
      <p>Fiyat: 85.50 ₺</p> 
      <p> Puan: 4.9 (200)</p>
      <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
         daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
         düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
         Küçük bir pizzaya bazen pizzetta denir</p>

      <form>
        <div>
          <label>
            Boyut Seç:
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

        <div>
          <label>Hamur Seç:</label>
          <select value={hamurTuru} onChange={(e) => setHamurTuru(e.target.value)}>
            <option value="İnce">İnce Hamur</option>
            <option value="Kalın">Kalın Hamur</option>
          </select>
        </div>

        <div>
          <h3>Ek Malzemeler (En fazla 10 malzeme seçebilirsiniz. +5 ₺)</h3>
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
              value="Kanada-Jambonu"
              checked={ekMalzemeler.includes('Kanada-Jambonu')}
              onChange={handleEkMalzemeDegisimi}
            />
            Kanada Jambonu
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

        <label>
          Sipariş Notu:
          <textarea value={siparisNotu} onChange={(e) => setSiparisNotu(e.target.value)} />
        </label>

        <label>
          Sipariş Sayısı:
          <input
            type="number"
            value={siparisSayisi}
            onChange={(e) => setSiparisSayisi(Number(e.target.value))}
          />
        </label>

        <p>Toplam Fiyat: {toplamFiyat} ₺</p>
        <button type="submit">Siparişi Tamamla</button>
      </form>
    </div>
  );
}

export default SiparisForm;