const complexData = [
  {
    category: "Electronics",
    items: [
      {
        id: 1,
        title: "Smartphone",
        price: 1200,
        specs: {
          brand: "Samsung",
          model: "Galaxy S24",
          features: ["5G", "AMOLED", "128GB Storage"],
        },
      },
      {
        id: 2,
        title: "Laptop",
        price: 2200,
        specs: {
          brand: "Dell",
          model: "XPS 13",
          features: ["Intel i7", "16GB RAM", "SSD 512GB"],
        },
      },
    ],
  },
  {
    category: "Fashion",
    items: [
      {
        id: 3,
        title: "T-Shirt",
        price: 25,
        specs: {
          size: "L",
          color: "Black",
          material: "Cotton",
        },
      },
      {
        id: 4,
        title: "Sneakers",
        price: 80,
        specs: {
          brand: "Nike",
          size: 42,
          color: "White",
        },
      },
    ],
  },
];
const grouped = complexData.map(({ category, items }) => {
  console.log(`Category : ${category}`);
  const itemsEntries = Object.entries(items);
  itemsEntries.forEach(([index, item]) => {
    console.log("Item index:", index);
    console.log(`Id : ${item.id}`);
    console.log("Item title:", item.title);
    console.log("Specs:", item.specs.brand);
  });
});
