import { useState, useEffect, useContext, useRef, useReducer, useCallback, useMemo, createContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

// useContext setup 
const UserContext = createContext();

//  useReducer setup 
function todosReducer(state, action) {
    switch (action.type) {
        case 'agregar': return [...state, { id: Date.now(), texto: action.texto }];
        case 'eliminar': return state.filter(t => t.id !== action.id);
        default: return state;
    }
}

// Custom Hook
function useContador(inicial = 0) {
    const [valor, setValor] = useState(inicial);
    const incrementar = () => setValor(v => v + 1);
    const decrementar = () => setValor(v => v - 1);
    const resetear = () => setValor(inicial);
    return { valor, incrementar, decrementar, resetear };
}



// CARD 1 — useState: Color favorito
const CardUseState = () => {
    const [color, setColor] = useState('rojo');
    const colores = {
        rojo: '#e53935',
        azul: '#1e88e5',
        verde: '#43a047',
        morado: '#8e24aa',
    };
    return (
        <Card sx={{ borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0,0,0,0.15)' }}>
            <CardContent>
                <Chip label="useState" size="small" sx={{ backgroundColor: '#e91e63', color: 'white', fontWeight: 700, mb: 1 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Guarda el color favorito del usuario. Cada botón actualiza el estado.
                </Typography>
                <Box sx={{
                    backgroundColor: colores[color],
                    borderRadius: '8px',
                    p: 2,
                    textAlign: 'center',
                    transition: 'background-color 0.3s',
                    mb: 2
                }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                        Mi color favorito es {color}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {Object.keys(colores).map(c => (
                        <Button key={c} size="small" variant={color === c ? 'contained' : 'outlined'}
                            onClick={() => setColor(c)}
                            sx={{
                                borderColor: colores[c],
                                color: color === c ? 'white' : colores[c],
                                backgroundColor: color === c ? colores[c] : 'transparent',
                                '&:hover': { backgroundColor: colores[c], color: 'white' }
                            }}>
                            {c}
                        </Button>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};



// CARD 2 — useEffect: Título de la página
const CardUseEffect = () => {
    const [count, setCount] = useState(0);
    const [titulo, setTitulo] = useState('React App');

    useEffect(() => {
        setTitulo(`Tienes ${count} notificaciones`);
    }, [count]);

    return (
        <Card sx={{ borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0,0,0,0.15)' }}>
            <CardContent>
                <Chip label="useEffect" size="small" sx={{ backgroundColor: '#9c27b0', color: 'white', fontWeight: 700, mb: 1 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Cada vez que el contador cambia, useEffect actualiza el "título".
                </Typography>
                <Box sx={{ backgroundColor: '#f3e5f5', borderRadius: '8px', p: 2, mb: 2, textAlign: 'center' }}>
                    <Typography variant="caption" color="text.secondary">Título simulado:</Typography>
                    <Typography variant="body1" fontWeight={700} sx={{ color: '#9c27b0' }}>
                        📄 {titulo}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button size="small" variant="outlined" onClick={() => setCount(c => Math.max(0, c - 1))}
                        sx={{ borderColor: '#9c27b0', color: '#9c27b0' }}>-</Button>
                    <Typography variant="h5" fontWeight={700} sx={{ color: '#9c27b0', minWidth: 40, textAlign: 'center' }}>
                        {count}
                    </Typography>
                    <Button size="small" variant="outlined" onClick={() => setCount(c => c + 1)}
                        sx={{ borderColor: '#9c27b0', color: '#9c27b0' }}>+</Button>
                </Box>
            </CardContent>
        </Card>
    );
};



// CARD 3 — useContext: Usuario logueado
const PerfilUsuario = () => {
    const usuario = useContext(UserContext);
    return (
        <Box sx={{ backgroundColor: '#e3f2fd', borderRadius: '8px', p: 1.5, textAlign: 'center' }}>
            <Typography variant="body2" fontWeight={700} sx={{ color: '#1565c0' }}>
                👋 Hola, {usuario.nombre}!
            </Typography>
            <Typography variant="caption" color="text.secondary">
                Rol: {usuario.rol}
            </Typography>
        </Box>
    );
};

const CardUseContext = () => {
    const [usuario, setUsuario] = useState({ nombre: 'Juan', rol: 'Admin' });
    return (
        <Card sx={{ borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0,0,0,0.15)' }}>
            <CardContent>
                <Chip label="useContext" size="small" sx={{ backgroundColor: '#3f51b5', color: 'white', fontWeight: 700, mb: 1 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    El componente hijo accede al usuario sin recibir props directamente.
                </Typography>
                <UserContext.Provider value={usuario}>
                    <PerfilUsuario />
                </UserContext.Provider>
                <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
                    {[
                        { nombre: 'Juan', rol: 'Admin' },
                        { nombre: 'María', rol: 'Editor' },
                        { nombre: 'Carlos', rol: 'Visitante' },
                    ].map(u => (
                        <Button key={u.nombre} size="small" variant="outlined"
                            onClick={() => setUsuario(u)}
                            sx={{ borderColor: '#3f51b5', color: '#3f51b5', fontSize: '0.7rem' }}>
                            {u.nombre}
                        </Button>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};



// CARD 4 — useRef: Enfocar input y contar renders
const CardUseRef = () => {
    const inputRef = useRef(null);
    const renderCount = useRef(0);
    const [inputVal, setInputVal] = useState('');

    renderCount.current += 1;

    return (
        <Card sx={{ borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0,0,0,0.15)' }}>
            <CardContent>
                <Chip label="useRef" size="small" sx={{ backgroundColor: '#009688', color: 'white', fontWeight: 700, mb: 1 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    useRef accede al DOM directamente y también guarda valores sin causar re-render.
                </Typography>
                <TextField
                    inputRef={inputRef}
                    size="small"
                    fullWidth
                    placeholder="Escribe algo..."
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    sx={{ mb: 1 }}
                />
                <Button size="small" variant="contained" fullWidth
                    onClick={() => inputRef.current.focus()}
                    sx={{ backgroundColor: '#009688', mb: 1 }}>
                    Enfocar input con useRef
                </Button>
                <Typography variant="caption" color="text.secondary">
                    Renders del componente: <strong>{renderCount.current}</strong> (useRef no reinicia este valor)
                </Typography>
            </CardContent>
        </Card>
    );
};



// CARD 5 — useReducer: Lista de tareas
const CardUseReducer = () => {
    const [todos, dispatch] = useReducer(todosReducer, [
        { id: 1, texto: 'Estudiar React' },
        { id: 2, texto: 'Hacer el taller' },
    ]);
    const [input, setInput] = useState('');

    const agregar = () => {
        if (!input.trim()) return;
        dispatch({ type: 'agregar', texto: input });
        setInput('');
    };

    return (
        <Card sx={{ borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0,0,0,0.15)' }}>
            <CardContent>
                <Chip label="useReducer" size="small" sx={{ backgroundColor: '#ff5722', color: 'white', fontWeight: 700, mb: 1 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Maneja una lista de tareas con acciones: agregar y eliminar.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <TextField size="small" fullWidth placeholder="Nueva tarea..."
                        value={input} onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && agregar()} />
                    <Button size="small" variant="contained" onClick={agregar}
                        sx={{ backgroundColor: '#ff5722', whiteSpace: 'nowrap' }}>
                        Agregar
                    </Button>
                </Box>
                <Box sx={{ maxHeight: 150, overflowY: 'auto' }}>
                    {todos.map(t => (
                        <Box key={t.id} sx={{
                            display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', p: 1,
                            backgroundColor: '#fff3e0', borderRadius: '6px', mb: 0.5
                        }}>
                            <Typography variant="body2">{t.texto}</Typography>
                            <Button size="small" color="error"
                                onClick={() => dispatch({ type: 'eliminar', id: t.id })}>
                                ✕
                            </Button>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};



// CARD 6 — useCallback: Evitar re-renders innecesarios
const BotonHijo = ({ onClick, label }) => {
    const renders = useRef(0);
    renders.current += 1;
    return (
        <Box sx={{ backgroundColor: '#efebe9', borderRadius: '6px', p: 1, textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
                Renders del botón: <strong>{renders.current}</strong>
            </Typography>
            <br />
            <Button size="small" variant="contained" onClick={onClick}
                sx={{ backgroundColor: '#795548', mt: 0.5 }}>
                {label}
            </Button>
        </Box>
    );
};

const CardUseCallback = () => {
    const [count, setCount] = useState(0);
    const [otro, setOtro] = useState(0);

    const incrementar = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    return (
        <Card sx={{ borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0,0,0,0.15)' }}>
            <CardContent>
                <Chip label="useCallback" size="small" sx={{ backgroundColor: '#795548', color: 'white', fontWeight: 700, mb: 1 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    El botón hijo no se re-renderiza innecesariamente gracias a useCallback.
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                    Contador principal: <strong>{count}</strong>
                </Typography>
                <BotonHijo onClick={incrementar} label="Sumar con useCallback" />
                <Button size="small" variant="outlined" fullWidth sx={{ mt: 1, borderColor: '#795548', color: '#795548' }}
                    onClick={() => setOtro(o => o + 1)}>
                    Actualizar otro estado ({otro}) — fuerza re-render
                </Button>
            </CardContent>
        </Card>
    );
};



// CARD 7 — useMemo: Cálculo costoso de números pares
const CardUseMemo = () => {
    const [limite, setLimite] = useState(10);
    const [otro, setOtro] = useState(0);

    const pares = useMemo(() => {
        const result = [];
        for (let i = 2; i <= limite; i += 2) result.push(i);
        return result;
    }, [limite]);

    return (
        <Card sx={{ borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0,0,0,0.15)' }}>
            <CardContent>
                <Chip label="useMemo" size="small" sx={{ backgroundColor: '#607d8b', color: 'white', fontWeight: 700, mb: 1 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Solo recalcula los números pares cuando cambia el límite, no cuando cambia "otro".
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                    Números pares hasta <strong>{limite}</strong>: {pares.join(', ')}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Button size="small" variant="outlined" onClick={() => setLimite(l => Math.max(2, l - 2))}
                        sx={{ borderColor: '#607d8b', color: '#607d8b' }}>- límite</Button>
                    <Button size="small" variant="outlined" onClick={() => setLimite(l => l + 2)}
                        sx={{ borderColor: '#607d8b', color: '#607d8b' }}>+ límite</Button>
                </Box>
                <Button size="small" variant="outlined" fullWidth
                    onClick={() => setOtro(o => o + 1)}
                    sx={{ borderColor: '#607d8b', color: '#607d8b' }}>
                    Cambiar otro estado ({otro}) — no recalcula pares
                </Button>
            </CardContent>
        </Card>
    );
};



// CARD 8 — Custom Hook: useContador
const CardCustomHook = () => {
    const { valor, incrementar, decrementar, resetear } = useContador(5);
    return (
        <Card sx={{ borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0,0,0,0.15)' }}>
            <CardContent>
                <Chip label="Custom Hook" size="small" sx={{ backgroundColor: '#f44336', color: 'white', fontWeight: 700, mb: 1 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    useContador es un hook propio que encapsula la lógica de un contador reutilizable.
                </Typography>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h2" fontWeight={700} sx={{ color: '#f44336' }}>
                        {valor}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        valor inicial: 5
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                    <Button size="small" variant="outlined" onClick={decrementar}
                        sx={{ borderColor: '#f44336', color: '#f44336' }}>-</Button>
                    <Button size="small" variant="contained" onClick={resetear}
                        sx={{ backgroundColor: '#212121' }}>Reset</Button>
                    <Button size="small" variant="outlined" onClick={incrementar}
                        sx={{ borderColor: '#f44336', color: '#f44336' }}>+</Button>
                </Box>
            </CardContent>
        </Card>
    );
};




export const Oferts = () => {
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
                    React Hooks
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        mb: 4,
                        textAlign: { xs: 'center', md: 'left' }
                    }}
                >
                    Demostraciones interactivas de los 8 hooks principales de React.
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}><CardUseState /></Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}><CardUseEffect /></Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}><CardUseContext /></Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}><CardUseRef /></Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}><CardUseReducer /></Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}><CardUseCallback /></Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}><CardUseMemo /></Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}><CardCustomHook /></Grid>
                </Grid>
            </Box>
        </>
    );
};
