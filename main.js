// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];



// get all originalStocks and sold items
// remove sold items from original stocks
// return remaining stock
// send remaining stock to html

const stockRemaining = inventory.map((item) => {
  return (item.originalStock - item.sold);
});

function availableStock(array) {
  let total = 0;
  for (let i = 0; i <array.length; i++) {
    total += array[i];
  }
  return total
}


// console.log(stockRemaining)
// console.log(availableStock(stockRemaining))

const container = document.getElementById("tvStock");
const remainingStock = document.createElement("p");
remainingStock.setAttribute("id", "Stock-Count");
remainingStock.textContent = availableStock(stockRemaining);
container.appendChild(remainingStock);

// 2a map all tv type names

const tvTypeNames = inventory.map((item) => {
  return item.brand + " " + item.type + " " + item.name
});

// console.log(tvTypeNames)

const tvTypes = document.getElementById("assignment-2");
const tvTypenames = document.createElement("p");
tvTypenames.setAttribute("id", "tv-type-name");
tvTypenames.textContent = tvTypeNames;
tvTypes.appendChild(tvTypenames);

// 2b map inventory array, filter by out of stock products

const outOfStock = inventory.filter((item) => {
  const noStock = (item.originalStock - item.sold);
  return noStock === 0;
})
// console.log(outOfStock)

const tvoutOfStock = document.getElementById("assignment-2-B");
const outOfStockTv = document.createElement("p");
outOfStockTv.setAttribute("id", "tv-out-of-stock");
outOfStockTv.textContent = outOfStock;
tvoutOfStock.appendChild(outOfStockTv);

// 2c filter tv inventory by AmbiLight = true

const ambiLightTvs = inventory.filter((item) => {
  if (item.options.ambiLight == true) {
    return item;
  }
})

// console.log(ambiLightTvs)

const tvAmbiLight = document.getElementById("assignment-2-C");
const ambiLightOption = document.createElement("p");
ambiLightOption.setAttribute("id", "tv-ambi-light");
ambiLightOption.textContent = ambiLightTvs;
tvAmbiLight.appendChild(ambiLightOption);

// 2d find out how sort works again....
// identify price in each opject
// sort from lowest to highest price

const sortLowToHigh = (arr) => {
  arr.sort((a, b) => {
        return a.price - b.price
      }
  );
  return arr
}
console.log(sortLowToHigh(inventory));

const priceLowToHigh = document.getElementById("assignment-2-D");
const setPriceLowToHigh = document.createElement("p");
setPriceLowToHigh.setAttribute("id", "Tv-price-low-to-high");
setPriceLowToHigh.textContent = sortLowToHigh(inventory);
priceLowToHigh.appendChild(setPriceLowToHigh);

// 3A Map all stock and model prices
// Create way to multiply price by stock
// add those sums together
// made blue in css

const tvRevenue = inventory.map((item) => {
  const remainingStock = (item.originalStock - item.sold);
  return remainingStock * item.price;
});

function totalRevenue(array) {
  let total = 0;
  for (let i = 0; i <array.length; i++) {
    total += array[i];
  }
  return total
}

const revenue = document.getElementById("assignment-3-A");
const revenueCalculation = document.createElement("p");
revenueCalculation.setAttribute("id", "total-revenue");
revenueCalculation.textContent = totalRevenue(tvRevenue);
revenue.appendChild(revenueCalculation);

// 3B Map all sold stock and model prices
// Create way to multiply price by sold stock
// add those sums together
// made green in css

const revenueMade = inventory.map((item) => {
  return item.sold * item.price;
});

function soldRevenue(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total
}

const itemsSoldRevenue = document.getElementById("assignment-3-B");
const soldRevenueCalc = document.createElement("p");
soldRevenueCalc.setAttribute("id", "items-sold-revenue");
soldRevenueCalc.textContent = soldRevenue(revenueMade);
itemsSoldRevenue.appendChild(soldRevenueCalc);

// Opdracht 4 find 2 televisons by type name

// Finding a Philips
const tvPhilips = inventory.find((item) => {
  return item.type === "43PUS6504/12";
});



const philipsFind = document.getElementById("assignment-4");
const foundPhilips = document.createElement("p");
foundPhilips.setAttribute("id", "philips-found");
foundPhilips.textContent = tvPhilips.type + " " + tvPhilips.name + " " + tvPhilips.brand;
philipsFind.appendChild(foundPhilips);

// finding a Samsung tv
const tvSamsung = inventory.find((item) => {
  return item.type === "QE55Q60T";
});

const samsungFind = document.getElementById("assignment-4");
const foundSamsung = document.createElement("p");
foundSamsung.setAttribute("id", "samsung-found");
foundSamsung.textContent = tvSamsung.type + " " + tvSamsung.name + " " + tvSamsung.brand;
samsungFind.appendChild(foundSamsung);

// opdracht 5
function printTitle(Item) {
  return Item.brand + ' ' + Item.type + ' - ' + Item.name;
}
// 5B
function printPrice(Item) {
  return '€' + Item.price + ',-';
}
//5 rest
function calcAvailableSizes(Item) {
  const availableSizes = Item.availableSizes.map((size) => {
    return  size + ' inch (' + (size * 2.5) + ' cm)';
  })
  return availableSizes.join(' | ');
}

function createTvElement(tv) {
  const containerForTvs = document.getElementById('containerForTvs');
  const tvBlock = document.createElement('div');
  tvBlock.setAttribute('class', 'block');
  containerForTvs.appendChild(tvBlock);

  const tvBlockTitle = document.createElement('h2');
  tvBlockTitle.setAttribute('class', 'tvBlockTitle');
  tvBlockTitle.textContent = printTitle(tv);
  tvBlock.appendChild(tvBlockTitle);

  const tvBlockPrice =document.createElement('span');
  tvBlockPrice.setAttribute('class', 'price');
  tvBlockPrice.textContent = printPrice(tv);
  tvBlock.appendChild(tvBlockPrice);

  const tvBlockSizes = document.createElement('p');
  tvBlockSizes.setAttribute('class', 'sizes');
  tvBlockSizes.textContent = calcAvailableSizes(tv);
  tvBlock.appendChild(tvBlockSizes);
}

function createOverviewTvs(Item) {
  Item.map((tv) => {
    createTvElement(tv);
  })
}
createOverviewTvs(inventory);

// Bonus Assignment

function sortByPrice(arr) {
  arr.sort((a,b) => {return a.price - b.price});
  return arr;
}

function tvsWithAmbilight(arr) {
  const ambiLight = arr.filter((inventor) => {
    return inventor.options.ambiLight;
  });
  return ambiLight;
}

function soldOutTvs(arr) {
  const soldOut = arr.filter((inventor) => {
    return (inventor.originalStock - inventor.sold) === 0;
  });
  return soldOut;
}
