function goster() {
  const sinif = document.getElementById("sinif").value;
  const konu = document.getElementById("konu").value;
  const icerikTuru = document.getElementById("icerikTuru").value;
  const icerikAlani = document.getElementById("icerik");

  if (!sinif || !konu || !icerikTuru) {
    icerikAlani.innerText = "Lütfen tüm seçimleri yap.";
    return;
  }

  if (sinif === "tyt" && konu === "sozcuk" && icerikTuru === "konu") {
    icerikAlani.innerHTML = `
      <h2>Sözcükte Anlam - Konu Anlatımı (PDF)</h2>
      <iframe src="sozlukte-anlam-1.pdf" width="100%" height="600px" style="border: 1px solid #ccc;"></iframe>
    `;
    return;
  }

  icerikAlani.innerText = `Seçilen: ${sinif.toUpperCase()} > ${konu} > ${icerikTuru} — içerik henüz eklenmedi.`;
}
