const dompusData =
  "U2FsdGVkX184aLglPZBITolsI3c0RqPgenRgKrzE+dp7oy9pBkPvdrLgk0iGm2AyddCkonl/gIx0qiHqLbvKrVZgbKvBEfWeQ6hLT0IopR1+zzS2GQn+EZmMbbFMxBdy5VS/MXlHtWvuP4DM/2cjyqalexyjx+ljGc2dYSrSHI4W8rSR9S44pQn75nEtw5ZQ1ij6Yf1SxcFQ6sYMGPw5nCRgCMSatV5iBlgDEEXerb2UfzkDMyf2a6kWvdcug+FgqItymr16JCqVpP37xYVDi2DdIUn7tMt9kKWrzbn1vV2wcotysoMyOLhwEGtzEsYnyEVoSFffD4crmkWhcVKAzuKEyXknjyQVxJY86AfObgAidBG0QtFGmGZLG7cX3qond5S1BcBX9JQi/9tfF5lJQS8igz2yjHvR25bofUWzhF9TbT0c4q7aiuFLML6WkXly0oLG2+HU3iIMpH5fcFZLrtJXgtH1qmcGvqPDCZpfz/qaSu8361SaZrfflwNHbKstavDRmGxE2O8AG+raUhUbOPLa3wOU5k/0nL01vV+vs9eYzqWrSOB/UtGTzmafXYhtEySzeN7tfT4z/M0+LrZhZCPQt430HSUE9tLmx8NeWgzdhjoL/T4a7O8tvGmGBGjUB7YXoo/sawzMi2LRZYOvwaNQ89NKAGiDdFhVyNoj93KV+nHGkSIrdLxj+TXczJBFJK7TR4SbOndb6ufsY5Im0dwMAYRfBtFkI426x2GBis1CbgKg+Y1laS9lJO5o305WC3VILCaVpCHzemsCq9XLh4r6CSUTccAxEH7B1aw8KRVS/kgFJp+0p1aRM4IrFuQY";

const loadList = () => {
  const listDiv = document.getElementById("lisht");

  const salty = "cdnJR5U7guts??";

  try {
    // enjoy some hash
    const fancyUrl = new URL(window.location);
    const urlHash = fancyUrl.hash.substring(1); // pop off the `#` at the start

    // decode
    const cryptoMath = CryptoJS.AES.decrypt(dompusData, urlHash + salty);
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
