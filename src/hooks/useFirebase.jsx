import { useState } from 'react'
import { collection, doc, getDoc, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../firebase.config'


const useFirebase = () => {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)


    const fetchGetProducts = async () => {
        setLoading(true)
        try {
            const data = collection(db, "productos")
            const col = await getDocs(data)
            const response = col.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            setProducts(response)
            console.log(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const fetchGetProduct = async ({ id }) => {
        setLoading(true)
        try {
            const document = doc(db, "productos", id)
            const response = await getDoc(document)
            let result = response.data()
            setProduct({ id: response.id, ...result })
            setLoading(false)

        } catch (error) {
            alert('Error al obtener un producto')
        }
    };

    const fetchCreateTicket = async ({ data }) => {
        setLoading(true)
        try {
            const col = collection(db, "ordenes")
            const order = await addDoc(col, data)
            setLoading(false)
            console.log(order.id)
        } catch (error) {
            console.log(error)
        }
    };

    return {
        product,
        products,
        loading,
        fetchCreateTicket,
        fetchGetProduct,
        fetchGetProducts
    }
}

export default useFirebase;