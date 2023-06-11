import React, { useContext, useState } from 'react'
import useFirebase from '../../hooks/useFirebase';
import { CartProvider } from '../../context/CartContext';
import { validateForm } from '../../helpers/helper'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Input = ({
    type,
    name,
    value,
    inputClassName,
    onChange,
    onBlur,
    placeholder,
    error,
}) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={(e) => onBlur(e)}
                className={inputClassName}
                placeholder={placeholder}
            />
            {error.name && (
                <h6 className="text-danger my-2 text-uppercase">{error.name}</h6>
            )}
        </div>
    );
};

const Formulario = ({ purchase }) => {


    const { cart, cleanCart, getTotalPrice } = useContext(CartProvider);
    const { fetchCreateTicket } = useFirebase();
    const [error, setError] = useState({});
    const total = getTotalPrice();


    const [form, setForm] = useState({

        buyer: {
            email: '',
            emailConfirm: '',
            name: '',
            lastname: '',
            phone: ''
        },
        total: total,
        items: purchase,
    });

    const {
        buyer: { email, emailConfirm, name, lastname, phone }, } = form;


    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm([email, emailConfirm, name, lastname, phone])) {
            Swal.fire({
                title: "Oops!",
                text: "Please, complete all fields",
                icon: "error",
            });
            return;
        }
        if (cart.length === 0) {
            Swal.fire({
                title: 'Cart is empty!',
                text: 'Add products on cart and try again',
                icon: 'warning'
            })
            return;
        }
        if (email !== emailConfirm) {
            Swal.fire({
                title: 'Email not confirmed',
                text: 'Verify your email and try again',
                icon: 'warning'
            })
            return;
        }
        if (cart.length > 0) {
            fetchCreateTicket({ data: form });
            cleanCart();
            return;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [name]: value,
            },
        });
    }
    const handleBlur = (e) => {
        const { value, name } = e.target;
        if (value === "") {
            setError({ ...error, [name]: "This field is required" });
            return;
        }
        setError({});
    };

    return (
        <form onSubmit={onSubmit} className="container border">
            <h5 className="d-flex justify-content-left m-4">Your information: </h5>
            {Object.keys(form.buyer).map((key, index) => (
                <Input
                    key={index}
                    className="mb-3"
                    type="text"
                    name={`${key}`}
                    value={key.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputClassName={`form-control ${error[key] && "is-invalid"}`}
                    placeholder={`${key}`}
                    error={error}
                />
            ))}

            <div className="border row d-flex p-2 m-2">
                <div className="col-6 col-lg-6 d-flex justify-content-center">
                    <p className="fs-5 my-2">Total order: </p>
                </div>
                <div className="col-6 col-lg-6 d-flex justify-content-center">
                    <p className="fs-5 my-2">${total}</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <button
                        type="submit"
                        className="btn btn-danger text-uppercase w-75 "
                    >
                        Send order
                    </button>
                </div>
            </div>

            <Link to="/" className="btn btn-light text-uppercase my-2 w-50">
                Home
            </Link>
        </form>
    );
}

export default Formulario;