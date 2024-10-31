var optionContainer = document.getElementById("option");
var option = document.getElementsByClassName("option");
var opsi = null;
var namaInput = document.getElementById("input-name");
var namaOutput = document.getElementById("output-name");
var temperatureInput = document.getElementById("temperature1");
var temperatureOutput = document.getElementById("temperature2");
var formula = document.getElementById("cara-kalkulasi");
var number = "";
var result = "";
var resultFormula = "";

// create element for description

//kalkulasi option button active
for (let i = 0; i < option.length; i++) {
  option[i].addEventListener("click", function () {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    this.className += " option-active";
  });
}
// dark-mode - lightmode active button
var darkmode = document.getElementsByClassName("dark-mode");
for (let i = 0; i < darkmode.length; i++) {
  darkmode[i].addEventListener("click", function () {
    var nowOption = document.getElementsByClassName(" active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
// darkmode
var r = document.querySelector(":root");
var t = document.querySelector("textarea");
function darkMode() {
  r.style.setProperty("--text-color", "white");
  r.style.setProperty("--bg-container", "#1c1d1f");
  r.style.setProperty("--bg-body", "#0f0f0f");
  r.style.setProperty("--second-color", "#00aeff");
}
function lightmode() {
  r.style.setProperty("--second-color", "#0091d4");
  r.style.setProperty("--text-color", "#1b1b1b");
  r.style.setProperty("--bg-container", "#ffffff");
  r.style.setProperty("--bg-body", "#f7f4f4");
}
// reverse
function reverse() {
  if (opsi == "ctof") {
    opsi = "ftoc";
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[7].className += " option-active";
    pilihan(opsi);
  } else if (opsi == "ctok") {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[4].className += " option-active";
    opsi = "ktoc";
    pilihan(opsi);
  } else if (opsi == "ctor") {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[9].className += " option-active";
    opsi = "rtoc";
    pilihan(opsi);
  } else if (opsi == "ftoc") {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[0].className += " option-active";
    opsi = "ctof";
    pilihan(opsi);
  } else if (opsi == "ftok") {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[3].className += " option-active";
    opsi = "ktof";
    pilihan(opsi);
  } else if (opsi == "ftor") {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[10].className += " option-active";
    opsi = "rtof";
    pilihan(opsi);
  } else if (opsi == "ktoc") {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[1].className += " option-active";
    opsi = "ctok";
    pilihan(opsi);
  } else if (opsi == "ktof") {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[6].className += " option-active";
    opsi = "ftok";
    pilihan(opsi);
  } else if (opsi == "ktor") {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[11].className += " option-active";
    opsi = "rtok";
    pilihan(opsi);
  } else if (opsi == "rtoc") {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[2].className += " option-active";
    opsi = "ctor";
    pilihan(opsi);
  } else if (opsi == "rtof") {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[8].className += " option-active";
    opsi = "ftor";
    pilihan(opsi);
  } else if (opsi == "rtok") {
    var nowOption = document.getElementsByClassName("option-active");
    if (nowOption.length > 0) {
      nowOption[0].className = nowOption[0].className.replace(
        " option-active",
        ""
      );
    }
    option[5].className += " option-active";
    opsi = "ktor";
    pilihan(opsi);
  }
}
//reset button
function resetBtn() {
  number = "";
  temperatureInput.value = "";
  temperatureOutput.value = "";
  namaInput.innerHTML = "";
  namaOutput.innerHTML = "";
  formula.value = "";
  var nowOption = document.getElementsByClassName("option-active");
  if (nowOption.length > 0) {
    nowOption[0].className = nowOption[0].className.replace(
      " option-active",
      ""
    );
    opsi = "";
    document.getElementById("desc").innerHTML = "";
  }
}
//konversi
function calculate() {
  number = parseFloat(temperatureInput.value);

    if (temperatureInput=="") {
      alert("masukan angkanya!");
    } else {
      switch (opsi) {
        case "ctof":
            result = number * 1.8 + 32;
          formula.value = "(" + number + "°C x 9/5) + 32 = " + result;
          break;
        case "ctok":
          result = number + 273.15;
          formula.value = number + "°C +  273.15 = " + result; 
          break;
        case "ctor":
          result = number * (4 / 5);
          formula.value = number + "°C * 4/5 = " + result;
          break;
        case "ftoc":
          result = ((number - 32) * 5) / 9;
          formula.value = "(" + number + "°F - 32) * 5/9 = " + result;
          break;
        case "ftor":
          result = (number - 32) * (4 / 9);
          formula.value = "(" + number + "°F - 32) * (4/9) = " + result;
          break;
        case "ftok":
          result = (number + 459.67) * (5 / 9);
          formula.value = "(" + number + "°F + 459.67) * (5 / 9) = " + result;
          break;
        case "ktoc":
          result = number - 273.15;
          formula.value = number + "°K - 273.15 = " + result; 
          break;
        case "ktor":
          result = (number - 273.15) * (4 / 5);
          formula.value = "(" + number + "°K - 273.15) *(4/5)= " + result;
          break;
        case "ktof":
          result = number * 1.8 - 459.67;
          formula.value = "(" + number + "°K * 9/5) - 459.67 = " + result;
          break;
        case "rtoc":
          result = 1.25 * number;
          formula.value = number + "°R * 5/4 = " + result;
          break;
        case "rtok":
          result = number * (5 / 4) + 273.15;
          formula.value = "(" + number + "°R * 5 / 4) + 273.15 = " + result;
          break;
        case "rtof":
          result = number * (9 / 4) + 32;
          formula.value = "(" + number + "°R * 9 / 4) + 32= " + result;
          break;
        default:
          alert("Pilih Opsi terlebih dahulu");
          result = "";
          break;
      }
    }
  
  temperatureOutput.value = result;
}
// PILIHAN BUTTON
function pilihan(op) {
  let pilih = op;
  opsi = pilih.toLowerCase();
  switch (opsi) {
    case "ctof":
      namaInput.innerHTML = "Celsius(&#8451;):";
      namaOutput.innerHTML = "Fahrenheit (&#8457;):";
      var text = document.createElement("p");
      text =
        "<h3> Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Fahrenheit (&deg;F) sama dengan suhu " +
        "<i>S</i> dalam derajat Celsius (&deg;C) kali " +
        "<span>9/5</span> tambah <span>32</span>" +
        "</p>" +
        " <br><p class='formula'> S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> x 9/5) + 32 " +
        "<br /> atau <br /> S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> x 1.8) + 32" +
        "</p>";
      document.getElementById("desc").innerHTML = text;
      console.log("ctof");
      break;
    case "ctok":
      namaInput.innerHTML = "Celsius(&#8451;):";
      namaOutput.innerHTML = "Kelvin (&deg;K):";
      var text = document.createElement("p");
      text =
        "<h3> Cara Konversi Dari Celsius (°C) ke Kelvin (°K)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Kelvin (&deg;K) sama dengan suhu " +
        "<i>S</i> dalam derajat Celsius (&deg;C) ditambah dengan  " +
        "<span>273.15</span>" +
        "</p>" +
        "<br><p class='formula'> S<sub>(&deg;K)</sub> = (S<sub>(&deg;C)</sub> + 273.15) + 32 " +
        "</p>";
      document.getElementById("desc").innerHTML = text;
      break;
    case "ctor":
      namaInput.innerHTML = "Celsius(&#8451;):";
      namaOutput.innerHTML = "Reamur (&deg;R):";
      var text = document.createElement("p");
      text =
        "<h3> Cara Konversi Dari Celsius (°C) ke Reamur (°R)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Reamur (&deg;R) sama dengan suhu " +
        "<i>S</i> dalam derajat Celsius (&deg;C) kali  " +
        "<span>4/5</span>" +
        "</p>" +
        "<br><p class='formula'> S<sub>(&deg;R)</sub> = (S<sub>(&deg;C)</sub> X 4/5 " +
        "<br /> atau <br /> S<sub>(&deg;R)</sub> = (S<sub>(&deg;C)</sub> x 0.8 </p>";
      document.getElementById("desc").innerHTML = text;
      break;
    case "ftoc":
      namaInput.innerHTML = "Fahrenheit (&#8457;):";
      namaOutput.innerHTML = "Celsius(&#8451;):";
      var text = document.createElement("p");
      text =
        "<h3> Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Celsius (&deg;C) sama dengan suhu " +
        "<i>S</i> dalam derajat Fahrenheit (&deg;F) kurang <span>32</span>,  " +
        "kali <span>5/9</span>" +
        "</p>" +
        "<br><p class='formula'> S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32)) x 5/9 " +
        "</p>";
      document.getElementById("desc").innerHTML = text;
      break;
    case "ftor":
      namaInput.innerHTML = "Fahrenheit (&#8457;):";
      namaOutput.innerHTML = "Reamur (&deg;R):";
      var text = document.createElement("p");
      text =
        "<h3> Cara Konversi Dari Fahrenheit (°F) ke Reamur (°R)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Reamur (&deg;R) sama dengan suhu " +
        "<i>S</i> dalam derajat Fahrenheit (&deg;F) kurang <span>32</span>,  " +
        "kali <span>4/9</span>" +
        "</p>" +
        "<br><p class='formula'> S<sub>(&deg;K)</sub> = (S<sub>(&deg;F)</sub> - 32)) x 4/9 " +
        "</p>";
      document.getElementById("desc").innerHTML = text;
      break;
    case "ftok":
      namaInput.innerHTML = "Fahrenheit (&#8457;):";
      namaOutput.innerHTML = "Kelvin (&deg;K):";
      var text = document.createElement("p");
      text =
        "<h3> Cara Konversi Dari Fahrenheit (°F) ke Kelvin (°K)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Kelvin (&deg;K) sama dengan suhu " +
        "<i>S</i> dalam derajat Fahrenheit (&deg;F) tambah <span>459.67</span>,  " +
        "kali <span>5/9</span>" +
        "</p>" +
        "<br><p class='formula'> S<sub>(&deg;K)</sub> = (S<sub>(&deg;F)</sub> + 459.67)) x 5/9 " +
        "</p>";
      document.getElementById("desc").innerHTML = text;
      break;
    case "ktoc":
      namaInput.innerHTML = "Kelvin (&deg;K):";
      namaOutput.innerHTML = "Celsius(&#8451;):";
      var text = document.createElement("p");
      text =
        "<h3> Cara Konversi Dari Kelvin (°K) ke Celsius (°C)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Celsius (&deg;K) sama dengan suhu " +
        "<i>S</i> dalam derajat Kelvin (&deg;K) kurang <span>273.15</span>,  " +
        "" +
        "</p>" +
        "<br><p class='formula'> S<sub>(&deg;C)</sub> = (S<sub>(&deg;K)</sub> - 273.15 " +
        "</p>";
      document.getElementById("desc").innerHTML = text;
      break;
    case "ktor":
      namaInput.innerHTML = "Kelvin (&deg;K):";
      namaOutput.innerHTML = "Reamur (&deg;R):";
      var text = document.createElement("p");
      text =
        "<h3> Cara Konversi Dari Kelvin (°K) ke Reamur (°R)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Reamur (&deg;R) sama dengan suhu " +
        "<i>S</i> dalam derajat Kelvin (&deg;K) kurang <span>273.15</span>,  " +
        "kali <span>4/5</span>" +
        "</p>" +
        "<br><p class='formula'> S<sub>(&deg;R)</sub> = (S<sub>(&deg;K)</sub> - 273.15) X 4/5" +
        "</p>";
      document.getElementById("desc").innerHTML = text;
      break;
    case "ktof":
      namaInput.innerHTML = "Kelvin (&deg;K):";
      namaOutput.innerHTML = "Fahrenheit (&#8457;):";
      var text = document.createElement("p");
      text =
        "<h3> Cara Konversi Dari Kelvin (°K) ke Fahrenheit (°F)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Fahrenheit (&deg;F) sama dengan suhu " +
        "<i>S</i> dalam derajat Kelvin (&deg;K) kali <span>9/5</span>,  " +
        "kurang <span>459.67</span>" +
        "</p>" +
        "<br><p class='formula'> S<sub>(&deg;F)</sub> = (S<sub>(&deg;K)</sub> X 9/5 ) - 459.67 " +
        "</p>";
      document.getElementById("desc").innerHTML = text;
      break;
    case "rtoc":
      namaInput.innerHTML = "Reamur (&deg;R):";
      namaOutput.innerHTML = "Celsius(&#8451;):";
      var text = document.createElement("p");
      text =
        "<h3> Cara Konversi Dari Reamur (°R) ke Celsius (°C)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Celsius (&deg;C) sama dengan suhu " +
        "<i>S</i> dalam derajat Reamur (&deg;R) kali <span>5/4</span>,  " +
        "" +
        "</p>" +
        "<br><p class='formula'> S<sub>(&deg;C)</sub> = (S<sub>(&deg;R)</sub> X 5/4" +
        "</p>";
      document.getElementById("desc").innerHTML = text;
      break;
    case "rtok":
      namaInput.innerHTML = "Reamur (&deg;R):";
      namaOutput.innerHTML = "Kelvin (&deg;K):";
      var text = document.createElement("p");
      text =
        "<h3> Cara Konversi Dari Reamur (°R) ke Kelvin (°K)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Kelvin (&deg;K) sama dengan suhu " +
        "<i>S</i> dalam derajat Reamur (&deg;R) kali <span>5/4</span>,  " +
        "tambah <span>273.15</span>" +
        "</p>" +
        "<br><p class='formula'> S<sub>(&deg;K)</sub> = (S<sub>(&deg;R)</sub> X 5/4) + 273.15" +
        "</p>";
      document.getElementById("desc").innerHTML = text;
      break;
    case "rtof":
      namaInput.innerHTML = "Reamur (&deg;R):";
      namaOutput.innerHTML = "Fahrenheit (&#8457;):";
      var text =
        "<h3> Cara Konversi Dari Reamur (°R) ke Fahrenheit (°F)" +
        "</h3> <br> <hr> <br>" +
        "<p>" +
        "Suhu <i>S</i> dalam derajat Fahrenheit (&deg;F) sama dengan suhu " +
        "<i>S</i> dalam derajat Reamur (&deg;R) kali <span>9/4</span>,  " +
        "tambah <span>32</span>" +
        "</p>" +
        "<br><p class='formula'> S<sub>(&deg;F)</sub> = (S<sub>(&deg;R)</sub> X 9/4) + 32" +
        "</p>";
      document.getElementById("desc").innerHTML = text;
      break;
    default:
      break;
  }
}
