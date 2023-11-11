const products = [
  {
    id: "1",
    title: "Au Revor T Shirt",
    description:
      "Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia.",
    price: 15,
    pictureUrl: "https://images2.imgbox.com/4b/ef/Tyk9tBA5_o.jpeg"
    // pictureUrl: "/image1.jpeg"
  },

  {
    id: "2",
    title: "Black Graphic T Shirt",
    description:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    price: 30,
    pictureUrl: 'https://images2.imgbox.com/10/a5/M3Se7exo_o.jpeg',
    // pictureUrl: '/image2.jpeg'
  },

  {
    id: "3",
    title: "Black Text T Shirt",
    description:
      "Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat.",
    price: 20,
    pictureUrl: 'https://images2.imgbox.com/0e/f7/4PJM6PdY_o.jpeg',
  },

  {
    id: "4",
    title: "Black and White Striped Pants",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.",
    price: 50,
    pictureUrl: "https://images2.imgbox.com/ed/0b/fYb0Ty6Y_o.jpeg",
  },

  {
    id: "5",
    title: "Evening Text Shirt",
    description:
      "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.",
    price: 20,
    pictureUrl: "https://images2.imgbox.com/23/40/YUTsVcYd_o.jpeg",
  },

  {
    id: "6",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 70,
    pictureUrl: "https://images2.imgbox.com/28/93/7cWeyUO5_o.jpeg",
  },

  {
    id: "7",
    title: "Black classic Jean",
    description:
      "Duis eu viverra leo, ut gravida sem. Etiam id felis lorem. Sed finibus vestibulum dolor sit amet ornare. Nunc condimentum magna placerat elementum finibus.",
    price: 40,
    pictureUrl: "https://thumbs2.imgbox.com/ec/c7/Mmdk0jBy_t.jpg",
  },

  {
    id: "8",
    title: "White Revor T Shirt",
    description: "Integer rhoncus, metus aliquam tempus varius, ex ex interdum ante, mollis lacinia eros eros ornare nulla. Curabitur vel leo sed nulla fermentum hendrerit. Integer sit amet pulvinar dui pellentesque egestas.",
    price: 69,
    pictureUrl: "https://thumbs2.imgbox.com/e3/82/tXk5JWb7_t.jpg",
  },

  {
    id: "9",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 23,
    // pictureUrl: "https://thumbs2.imgbox.com/ec/c7/Mmdk0jBy_t.jpg",
    pictureUrl: "https://thumbs2.imgbox.com/c7/c5/2WOrWrUP_t.jpg",
  },

  {
    id: "10",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 36,
    pictureUrl: "https://thumbs2.imgbox.com/85/63/dwSzzRw5_t.jpg",
  },

  {
    id: "11",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 36,
    // pictureUrl: "https://thumbs2.imgbox.com/f0/d2/eZpiVHx2_t.jpg",
    pictureUrl: "https://thumbs2.imgbox.com/48/4e/k6V54W4s_t.jpg",
  },

  {
    id: "12",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 36,
    pictureUrl: "https://thumbs2.imgbox.com/ff/01/9SYh4izD_t.jpg",

  },

  {
    id: "13",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 36,
    pictureUrl: "https://thumbs2.imgbox.com/33/eb/tKQWry7A_t.jpg",
  },

  {
    id: "14",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 36,
    // pictureUrl: "",
    pictureUrl: "https://thumbs2.imgbox.com/b7/14/yKFTuY5j_t.jpg",
  },

  {
    id: "15",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 36,
    pictureUrl: "https://thumbs2.imgbox.com/f4/7e/DJ25yfqK_t.jpg",
  },

  {
    id: "16",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 36,
    pictureUrl: "https://thumbs2.imgbox.com/59/1e/VkGqrK5m_t.jpg",
  },

  {
    id: "17",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 36,
    pictureUrl: "https://thumbs2.imgbox.com/c0/d6/1LJcFDH9_t.jpg",
  },

  {
    id: "18",
    title: "Floral Shirt",
    description: "Sed porttitor lectus nibh. Sed porttitor lectus.",
    price: 36,
    pictureUrl: "https://thumbs2.imgbox.com/2e/c3/dlJ054FH_t.jpg",
  },
];

const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export default getProducts;
