export function getData(category) {
    switch (category) {
        case "featuresItem":
            return [
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/product1.jpg",
                    price: 56
                },
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/product2.jpg",
                    price: 56
                },
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/product3.jpg",
                    price: 56
                },
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/product4.jpg",
                    price: 56
                },
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/product5.jpg",
                    price: 56
                },
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/product6.jpg",
                    price: 56
                }
            ]
            break;
        case "t-shirt": 
            return [
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/gallery1.jpg",
                    price: 56
                },
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/gallery2.jpg",
                    price: 56
                },
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/gallery3.jpg",
                    price: 56
                },
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/gallery4.jpg",
                    price: 56
                },
            ]
            break;
        case "recommendItem": 
            return [
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/recommend1.jpg",
                    price: 56
                },
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/recommend2.jpg",
                    price: 56
                },
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/recommend3.jpg",
                    price: 56
                },
                {
                    name: "Easy Polo Black Edition",
                    image: "web_shop/images/home/recommend4.jpg",
                    price: 56
                },
            ]
            break;
        default:
            break;
    }
}