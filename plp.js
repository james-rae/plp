const dompusData =
  "U2FsdGVkX1+QrppW5Pp1NWh9ifKP2uFmgRNh5av4t404LmcVoWLrjHoxkKaTl4H/MYOw7J6m1cByGuhPY3uaXyYhY5gHGxa0mcl2oItnN3O0kY7qvPawYOeYqdX74Itw1gQX8Hn4ENU+jB3pNzuvBt8ptoFnUZ8YDBaShnGI3jjMxKF5LfPqsCoJsL6Giuway1TfM905I/SD/UV9OdTrqhBCFW1QfgRQ8eXso7di9IK0NXj3fnse5x6/ZoELRoyJ8h74SyVn51tcuuWEU8iSSsAkwNM2I+KINBFVxjCqDvDbrfGt06WgjBY+dsXikqmNDB/XoQNjMD3eddR9mnIkFmLvAlL2AufOnEroTrgeLCiuP/TogiyKBnP1F0xhqmxZzaxd944foTj9v0FMe2/h7U+zUAmLDbnkLFyZwV4NGeYaBEyIM06wlJmZ0Ti+LCFc7cGeSF6Jaip02QVPowoe8pkhObyznrZE+BBrRUZwvrM01A+AJiWWTnoKHqVcceR2LMFLVaqzIMO/36mO1Xz/qzOMh3UkqdAnpK5hb16gqwwf3ny2SvLQCa4aHE31Iiee9/yfyueZx7CszkTj4W1tXl14ThE6E7J2zub4IJxFYe0QleOWKVzkau9VT8LLFi+FIyx6wecyrjqyCJE/5+GAlA==";

const loadList = () => {
  const listDiv = document.getElementById("lisht");

  const salty = "cdnJR5U7dogs??";

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
