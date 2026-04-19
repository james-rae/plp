const dompusData =
  "U2FsdGVkX1/w0nNz9PKp5l+7tcIFHVRjncr+KlICjX6yEHcvNiYGGGm1HvwZhaWXOu9AAEcbmWDaD5TmJVwpa3/WgjB2cbw+SlTkhAt1HjsvPQmGeXBDyx/RdYAZNk8e7189Y/89vMp9Y6VOwRNUQvXMubLKkTwf2dOkLsZCinX8kKDb8yc7M/bYo4r9MJxlIO7/7mRY4/brP2zkvEVotcXO8+2lSNpDX7E0m2iBuxx0mOAConVEJEVlYmT+jInZBa6+3c2NqxvfiDiD6hdJ1QL51cZomC572HLiyls/CkyJX+ro2xUFpBxbTYQyTO+CKdXfk+uIL8tcp4SB/STtM0P0LuRa09m2qAFs5tG0jf5xUAarGnEgNI+rTlV1XFRQFzUblBMz/Hvhamk443pvFqePeJ2jBVAkYwoMjYOWpbDJtgzVvzPy+eyl2ur8NW3yGI/gHaFfR8KYTwr8SNn1AeFV8Ml94vdrdsQtt+NtThIRu6QJov8VB8feQnEb7vP9UyZuUtl2qMXI8IkwhS/KsmIPuNU8eDAM8wLh3xXm1xM41Ggf1nCmTi3rgoaxUDlS9A3OBen+cijQ1QTBpImOjA==";

const loadList = () => {
  const listDiv = document.getElementById("lisht");

  try {
    // enjoy some hash
    const fancyUrl = new URL(window.location);
    const urlHash = fancyUrl.hash.substring(1); // pop off the `#` at the start

    // decode
    const cryptoMath = CryptoJS.AES.decrypt(dompusData, urlHash);
    const cryptoText = cryptoMath.toString(CryptoJS.enc.Utf8);

    // uncompress
    const grower = new Shorty();
    const plainText = grower.inflate(cryptoText);

    // parse
    const dompObj = JSON.parse(plainText);

    dompObj.forEach((nugget) => {
      const title = document.createElement("p");
      title.innerText = nugget.name;
      listDiv.appendChild(title);
      const lisht = document.createElement("div");
      lisht.classList.add("lisht");
      nugget.kids.forEach((kiddy) => {
        const linkus = document.createElement("a");
        linkus.href = nugget.root + kiddy.d;
        linkus.innerText = kiddy.n;
        lisht.appendChild(linkus);
      });
      listDiv.appendChild(lisht);
    });
  } catch (e) {
    const whoops = document.createElement("p");
    whoops.innerText = "HELLO!";
    listDiv.appendChild(whoops);
  }
};

window.onload = () => {
  loadList();
};
