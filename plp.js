const dompusData =
  "U2FsdGVkX18/5oCN6CdrRdKod+qSnguHpigTVcjEt+s037AFJI+mpIiKgjP7o9n9vDa27HeyVaW7bAx7JAbQTmzyKwvfdvs3mEAT8Zz6B7/J8p7YbAALxMVd/SJxvifi6FnLvRSdAVAttoIJ73sSWzYcxGmWAjJ/MWKKS07sC4UJ6kMI7EcgwKyiJApqu16H/3rWQxMLQW8JgWKH/6jUsPozsFlP8ShMQWbdPrLu/MjbSEDfNh8VDFa/cVsoPO/lT90v9nkqDHk4YesJ4HopAgorvskG560N3Ix6nX/xokqm/OOlFBIL/1D7N/P6XRUMqNf0cRTgF1gAnkHRYNFTUVFirBiuVfQhZkww51zn53NwVyiC9drGwjRG30S9UgFmg45aWVYNFsyqCI+1h1vZRX6FFFKmPinDhKHt65a7sVVCvmC7PdRn2fvrsNPuYCAVK89CT4CYzNjXOI/wMUiX90ejLElEYkCbnzYh8wEaJrh8h1zl94ruWaWtDQLuXldTlSqJfdKpUUcOVNvUrOrj/ksMS/5qg7QqYaZHlDF8UjvZb9s9EC+Fv7pd6TY5MXCkfYoXyESZCIFBDvBEmZP4gahXJJqUNNzJRZC4JzgEYBBf52NHbG5bQ8DdeU1xQHtb4Z6ESURmhtzlU7dO8VjUh8d6asg2wN3dJ5PL4l8rjORL8sgdRPRTBY7l4UaLhTxEiComRnTE6X81VB2/iiNXMEIO2UUPFl5huQVbp9fb6SnJXwZAvYrFf26SjcriZnLHldW0pF1tOC988/JdfQVkgIF1IJ9J5BrX/pldNQClhcjiN1JFXrjEF5+fq7fvt2yBR+aBhtOUH64JywN/WmDpiDjhzkl7oh/Mv2nQiBYRZ8cWDAfwHbopBt0tyyHv+23GFgnWOB0DfhTW4hYR3b5440E/31xxgYDBfsLOeTur/vh0ZSYGIzjKtKqIjWKBakV7oZa++7k+h5ufdSCiWPiqhGNqJgmQUF+y18r5P3cPOMk=";

const loadList = () => {
  const listDiv = document.getElementById("lisht");

  const salty = "cdnJR5U7snausage??";

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
