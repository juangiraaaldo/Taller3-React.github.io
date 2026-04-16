import { useState } from 'react';
import { Box, Modal, Typography, TextField, Button, Stack } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

export const MiCuenta = ({ open, handleClose }) => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: false, password: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación radical: ¿está vacío?
        const emailError = form.email === '';
        const passError = form.password === '';

        setErrors({ email: emailError, password: passError });

        if (!emailError && !passError) {
            alert("Validación exitosa (Simulación)");
            handleClose();
        }
    };

    return (
        <>
            <Box sx={{ px: 4, py: 6, backgroundColor: '#d8d8d8' }}>
                <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{
                        mb: 1,
                        textAlign: { xs: 'center', md: 'left' },
                        fontSize: { xs: '1.5rem', md: '2.125rem' } // Ajuste de tamaño en móvil
                    }}
                >
                    Mi Cuenta
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        mb: 4,
                        textAlign: { xs: 'center', md: 'left' }
                    }}
                >
                    Aqui podras visualizar tú cuenta
                </Typography>
            </Box>        </>
    );
};