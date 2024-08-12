import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, User, Passwords, Button, Error } from './styled';

function LogIN() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Xato xabarini saqlash uchun holat
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Inputlar tekshirish
    if (!username || !password) {
      setError(`Inputlarni To'ldiring`); // Inputlar bo'sh bo'lsa xato xabarini o'rnatish
    } else if (username === 'admin12' && password === 'admin12') {
      setError('');
      navigate('/home');
    } else {
      setError('Noto‘g‘ri foydalanuvchi nomi yoki parol'); // Xato xabarini o'rnatish
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        {error && <Error>{error}</Error>} {/* Xato xabarini ko'rsatish */}
        <User
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Foydalanuvchi nomi"
        />
        <Passwords
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parol"
        />
        <Button type="submit">Kirish</Button>
      </Form>
    </Container>
  );
}

export default LogIN;
