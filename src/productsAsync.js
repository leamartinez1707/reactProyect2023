
const products = [
    { id: '1', title: "iPhone X", img: "https://http2.mlstatic.com/D_NQ_NP_974807-MLU53827487439_022023-O.webp", price: 750, categoryIdId: "1", stock: 12, description: "iPhone X Black, with one year of garantie" },
    { id: '2', title: "iPhone 11", img: "https://foppo.fi/wp-content/uploads/2020/08/IPHONE-11-RED.jpg", price: 830, categoryId: "1", stock: 3, description: "iPhone 11 Red, with one year of garantie" },
    { id: '3', title: "iPhone 12", img: "https://th.bing.com/th/id/R.28fcd377b468654b257baee34946f186?rik=HxvDPGpa1EoAAw&pid=ImgRaw&r=0", price: 950, categoryId: "1", stock: 5, description: "iPhone 12 White, with one year of garantie" },
    { id: '4', title: "iPhone 13", img: "https://th.bing.com/th/id/R.66d10e050fce57c9c9ce173872cc6a0d?rik=tbgjo08yn8N%2bEQ&pid=ImgRaw&r=0", price: 1200, categoryId: "1", stock: 0, description: "iPhone 13 Gold, with one year of garantie" },
    { id: '5', title: "iPhone 14", img: "https://rustyguide.com/wp-content/uploads/2021/10/Apple-iPhone-14-Specs-Price-Screen-Size-Storage-Rusty-Guide.jpg", price: 1800, categoryId: "1", stock: 6, description: "iPhone 14 Black, with one year of garantie" },
    { id: '6', title: "iPad 4", img: "https://rustyguide.com/wp-content/uploads/2021/10/Apple-iPhone-14-Specs-Price-Screen-Size-Storage-Rusty-Guide.jpg", price: 1800, categoryId: "2", stock: 6, description: "iPhone 14 Black, with one year of garantie" },
    { id: '7', title: "iPad 5", img: "https://rustyguide.com/wp-content/uploads/2021/10/Apple-iPhone-14-Specs-Price-Screen-Size-Storage-Rusty-Guide.jpg", price: 1800, categoryId: "2", stock: 6, description: "iPhone 14 Black, with one year of garantie" },
    { id: '8', title: "iPad 6", img: "https://rustyguide.com/wp-content/uploads/2021/10/Apple-iPhone-14-Specs-Price-Screen-Size-Storage-Rusty-Guide.jpg", price: 1800, categoryId: "2", stock: 6, description: "iPhone 14 Black, with one year of garantie" }
]



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductById = (idProduct) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prtc => prtc.id === idProduct))
        }, 1000)
    })
}