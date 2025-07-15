document.addEventListener("DOMContentLoaded", () => {
  const data = {
    "Mathematical Symbols Supported by HTML": [
      { char: "∀", number: "&#8704;", entity: "&forall;", description: "FOR ALL" },
      { char: "∂", number: "&#8706;", entity: "&part;", description: "PARTIAL DIFFERENTIAL" },
      { char: "∃", number: "&#8707;", entity: "&exist;", description: "THERE EXISTS" },
      { char: "∅", number: "&#8709;", entity: "&empty;", description: "EMPTY SET" },
      { char: "∇", number: "&#8711;", entity: "&nabla;", description: "NABLA" },
      { char: "∈", number: "&#8712;", entity: "&isin;", description: "ELEMENT OF" },
      { char: "∉", number: "&#8713;", entity: "&notin;", description: "NOT AN ELEMENT OF" },
      { char: "∋", number: "&#8715;", entity: "&ni;", description: "CONTAINS AS MEMBER" },
      { char: "∏", number: "&#8719;", entity: "&prod;", description: "N-ARY PRODUCT" },
      { char: "∑", number: "&#8721;", entity: "&sum;", description: "N-ARY SUMMATION" }
    ],
    "Greek Letters Supported by HTML": [
      { char: "Α", number: "&#913;", entity: "&Alpha;", description: "GREEK CAPITAL LETTER ALPHA" },
      { char: "Β", number: "&#914;", entity: "&Beta;", description: "GREEK CAPITAL LETTER BETA" },
      { char: "Γ", number: "&#915;", entity: "&Gamma;", description: "GREEK CAPITAL LETTER GAMMA" },
      { char: "Δ", number: "&#916;", entity: "&Delta;", description: "GREEK CAPITAL LETTER DELTA" },
      { char: "Ε", number: "&#917;", entity: "&Epsilon;", description: "GREEK CAPITAL LETTER EPSILON" },
      { char: "Ζ", number: "&#918;", entity: "&Zeta;", description: "GREEK CAPITAL LETTER ZETA" }
    ],
    "Other Entities Supported by HTML": [
      { char: "©", number: "&#169;", entity: "&copy;", description: "COPYRIGHT SIGN" },
      { char: "®", number: "&#174;", entity: "&reg;", description: "REGISTERED SIGN" },
      { char: "€", number: "&#8364;", entity: "&euro;", description: "EURO SIGN" },
      { char: "™", number: "&#8482;", entity: "&trade;", description: "TRADEMARK" },
      { char: "←", number: "&#8592;", entity: "&larr;", description: "LEFTWARDS ARROW" },
      { char: "↑", number: "&#8593;", entity: "&uarr;", description: "UPWARDS ARROW" },
      { char: "→", number: "&#8594;", entity: "&rarr;", description: "RIGHTWARDS ARROW" },
      { char: "↓", number: "&#8595;", entity: "&darr;", description: "DOWNWARDS ARROW" },
      { char: "♠", number: "&#9824;", entity: "&spades;", description: "BLACK SPADE SUIT" },
      { char: "♣", number: "&#9827;", entity: "&clubs;", description: "BLACK CLUB SUIT" },
      { char: "♥", number: "&#9829;", entity: "&hearts;", description: "BLACK HEART SUIT" },
      { char: "♦", number: "&#9830;", entity: "&diams;", description: "BLACK DIAMOND SUIT" }
    ]
  };

  const container = document.createElement("div");
  container.style.margin = "30px";
  container.style.fontFamily = "Arial, sans-serif";

  for (let category in data) {
    const section = document.createElement("section");

    const heading = document.createElement("h2");
    heading.textContent = category;
    heading.style.color = "#333";
    heading.style.borderBottom = "2px solid #ccc";
    heading.style.paddingBottom = "5px";
    section.appendChild(heading);

    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.marginBottom = "30px";

    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr style="background-color: #007bff; color: white;">
        <th>Char</th><th>Number</th><th>Entity</th><th>Description</th>
      </tr>`;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    data[category].forEach(symbol => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td style="border: 1px solid #ddd; padding: 10px;">${symbol.char}</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${symbol.number}</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${symbol.entity}</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${symbol.description}</td>`;
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    section.appendChild(table);
    container.appendChild(section);
  }

  document.body.appendChild(container);
});