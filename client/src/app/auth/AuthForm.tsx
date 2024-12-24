'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: '',
        username: '',
        email: '',
    });
    const router = useRouter();

    // Handle input change and update formData
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission (Login/Registration)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const endpoint = isLogin
            ? 'http://localhost:8080/api/auth/login'
            : 'http://localhost:8080/api/auth/register';

        const payload = isLogin
            ? { usernameOrEmail: formData.usernameOrEmail, password: formData.password }
            : { username: formData.username, email: formData.email, password: formData.password };

        try {
            await axios.post(endpoint, payload);
            if (isLogin) {
                router.push('/dashboard');
            } else {
                alert('Registration successful! Please login.');
                setIsLogin(true);
            }
        } catch (error) {
            alert(isLogin ? 'Invalid credentials. Please try again.' : 'Registration failed. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm w-full">
                {/* Conditional Fields for Registration or Login */}
                {!isLogin && (
                    <>
                        <InputField
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required={!isLogin}
                        />
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required={!isLogin}
                        />
                    </>
                )}
                {isLogin && (
                    <InputField
                        label="Username or Email"
                        name="usernameOrEmail"
                        value={formData.usernameOrEmail}
                        onChange={handleChange}
                        required={isLogin}
                    />
                )}
                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                    <button type="submit" className="login-button btn-primary">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsLogin((prev) => !prev)}
                        className="login-button btn-secondary"
                    >
                        {isLogin ? 'Register' : 'Go Back'}
                    </button>
                </div>
            </form>
        </div>
    );
}

// Reusable Input Field Component
const InputField = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    required = false,
}: {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}) => (
    <label className="w-full flex flex-col">
        {label}
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="login-input w-full px-4 py-2 border rounded"
        />
    </label>
);
