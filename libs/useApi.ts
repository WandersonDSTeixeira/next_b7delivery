import { Address } from "../types/Address";
import { CartItem } from "../types/CartItem";
import { Order } from "../types/Order";
import { Product } from "../types/Product";
import { User } from "../types/User";

const TEMPORARYOneProduct: Product = {
    id: 1,
    image: '/tmp/texasburger.png',
    categoryName: 'Tradicional',
    name: 'Texas Burger',
    price: 25.50,
    description: '2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal'
}

const TEMPORARYOrder: Order = {
    id: 123,
    status: 'preparing',
    orderDate: '2022-12-14',
    userid: '10',
    shippingAddress: {
        id: 7,
        street: 'Rua das Flores',
        number: '600',
        cep: '23456-999',
        city: 'São Paulo',
        district: 'Jardins',
        state: 'SP'
    },
    shippingPrice: 8.40,
    paymentType: 'card',
    cupom: 'HOUHOUHOU',
    cupomDiscount: 5.50,
    products: [
        { product: { ...TEMPORARYOneProduct, id: 1 }, qt: 3 },
        { product: { ...TEMPORARYOneProduct, id: 2 }, qt: 2 },
        { product: { ...TEMPORARYOneProduct, id: 3 }, qt: 1 }
    ],
    subtotal: 180,
    total: 182.90
}

export const useApi = (tenantSlug: string) => ({

    getTenant: async () => {
        switch(tenantSlug) {
            case 'b7burger':
                return {
                    slug: 'b7burger',
                    name: 'B7Burger',
                    mainColor: '#FB9400',
                    secondColor: '#FFF9F2'
                };
            case 'b7pizza':
                return {
                    slug: 'b7pizza',
                    name: 'B7Pizza',
                    mainColor: '#6AB70A',
                    secondColor: '#E0E0E0'
                };
            default: return false;
        }
    },

    getAllProducts: async () => {
        let products = [];
        for (let q = 0; q < 10; q++) {
            products.push({
                ...TEMPORARYOneProduct,
                id: q + 1
            });
        }
        return products;
    },

    getProduct: async (id: number) => {
        return { ...TEMPORARYOneProduct, id };
    },
    authorizeToken: async (token: string): Promise<User | false> => {
        if (!token) return false;

        return {
            name: 'Usuário Temporário',
            email: 'teste@teste.com'
        }
    },
    getCartProducts: async (cartCookie: string) => {
        let cart: CartItem[] = [];
        if (!cartCookie) return cart;

        const cartJson = JSON.parse(cartCookie);
        for (let i in cartJson) {
            if (cartJson[i].id && cartJson[i].qt) {
                const product = {
                    ...TEMPORARYOneProduct,
                    id: cartJson[i].id
                };
                cart.push({
                    qt: cartJson[i].qt,
                    product
                });
            }
        }

        return cart;
    },
    getUserAddresses: async (email: string) => {
        const addresses: Address[] = [];

        for (let i = 0; i < 4; i++) {
            addresses.push({
                id: i + 1,
                street: 'Rua das Flores',
                number: `${i + 1}00`,
                cep: '99999-999',
                city: 'São Paulo',
                district: 'Jardins',
                state: 'SP'
            })
        }

        return addresses;
    },
    getUserAddress: async (addressid: number) => {
        let address: Address = {
            id: addressid,
            street: 'Rua das Flores',
            number: `${addressid}00`,
            cep: '99999-999',
            city: 'São Paulo',
            district: 'Jardins',
            state: 'SP'
        };
        return address;
    },
    addUserAddress: async (address: Address) => {
        return { ...address, id: 9 };
    },
    editUserAddress: async (newAddressData: Address) => {
        return true;
    },
    deleteUserAddress: async (addressid: number) => {
        return true;
    },
    getShippingPrice: async (address: Address) => {
        return 9.50;
    },
    setOrder: async ( address: Address, paymentType: 'money' | 'card', paymentChange: number, cupom: string, cart: CartItem[] ) => {
        return TEMPORARYOrder;
    },
    getOrder: async (orderId: number) => {
        return TEMPORARYOrder;
    }
});