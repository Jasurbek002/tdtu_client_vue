

<template>
  <div className="relative">
    <div className="w-full h-full absolute z-50"></div>
    <div  id="myContainer">
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget">
          
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>

const js = document.createElement("script");
js.src =
  "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
js.async = true;
js.innerHTML = JSON.stringify({
  symbols: [
    {
      proName: "FOREXCOM:TDTU",
      title:
        "Ushbu sayt №MRB-2021-552 “Raqamli transformatsiya sharoitida texnika universitetning innovatsion muhitini rivojlantirish modelini ishlab chiqish (Belarus milliy texnika universiteti va Islom Karimov nomidagi Toshkent davlat texnika universiteti misolida)” (Ilmiy raxbar: f.-m.f.d., prof. Sh.Nematov) loyixasi doirasida yaratildi",
    },
  ],
  showSymbolLogo: true,
  colorTheme: "light",
  isTransparent: false,
  displayMode: "adaptive",
  locale: "en",
});
console.log(js);
let container = document.getElementById("myContainer");
// container.appendChild(js);

</script>
