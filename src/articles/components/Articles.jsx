import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const juegos = [
    { id: 1, titulo: 'Call of Duty MW3', precio: 59.99, descuento: 20, categoria: 'FPS', img: "/Taller3-React/imgs/callDuty.png" },
    { id: 2, titulo: 'FIFA 25', precio: 49.99, descuento: 15, categoria: 'Deportes', img: "/Taller3-React/imgs/fifa.png" },
    { id: 3, titulo: 'Elden Ring', precio: 39.99, descuento: 30, categoria: 'RPG', img: "/Taller3-React/imgs/EldenRing.png" },
    { id: 4, titulo: 'Minecraft', precio: 29.99, descuento: 0, categoria: 'Sandbox', img: "/Taller3-React/imgs/minecraft.png" },
    { id: 5, titulo: 'GTA V', precio: 19.99, descuento: 50, categoria: 'Acción', img: "/Taller3-React/imgs/GtaV.png" },
    { id: 6, titulo: 'Red Dead Redemption 2', precio: 39.99, descuento: 25, categoria: 'Aventura', img: "/Taller3-React/imgs/RedDead2.png" },
    { id: 7, titulo: 'Cyberpunk 2077', precio: 44.99, descuento: 10, categoria: 'RPG', img: "/Taller3-React/imgs/Cyberpunk.png" },
    { id: 8, titulo: 'The Witcher 3', precio: 29.99, descuento: 40, categoria: 'RPG', img: "/Taller3-React/imgs/Witcher3.png" },
    { id: 9, titulo: 'Forza Horizon 5', precio: 49.99, descuento: 20, categoria: 'Carreras', img: "/Taller3-React/imgs/Forza5.png" },
    { id: 10, titulo: 'Halo Infinite', precio: 34.99, descuento: 15, categoria: 'FPS', img: "/Taller3-React/imgs/HaloInfinity.png" },
    { id: 11, titulo: 'Assassins Creed Valhalla', precio: 39.99, descuento: 35, categoria: 'Aventura', img: "/Taller3-React/imgs/AssasinsVallhalla.png" },
    { id: 12, titulo: 'Spider-Man Miles Morales', precio: 49.99, descuento: 20, categoria: 'Acción', img: "/Taller3-React/imgs/Spiderman.png" },
    { id: 13, titulo: 'God of War Ragnarök', precio: 59.99, descuento: 10, categoria: 'Acción', img: "/Taller3-React/imgs/GodWarRok.png" },
    { id: 14, titulo: 'Hollow Knight', precio: 14.99, descuento: 0, categoria: 'Indie', img: "/Taller3-React/imgs/HollowKnight.png" },
    { id: 15, titulo: 'Among Us', precio: 4.99, descuento: 0, categoria: 'Multijugador', img: "/Taller3-React/imgs/AmongUs.png" },
    { id: 16, titulo: 'Stardew Valley', precio: 13.99, descuento: 0, categoria: 'Simulación', img: "/Taller3-React/imgs/StardewValley.png" },
    { id: 17, titulo: 'Doom Eternal', precio: 39.99, descuento: 50, categoria: 'FPS', img: "/Taller3-React/imgs/DoomEternal.png" },
    { id: 18, titulo: 'Sekiro', precio: 49.99, descuento: 20, categoria: 'Acción', img: "/Taller3-React/imgs/Sekiro.png" },
    { id: 19, titulo: 'Resident Evil 4', precio: 44.99, descuento: 15, categoria: 'Terror', img: "/Taller3-React/imgs/ResidentEvil4.png" },
    { id: 20, titulo: 'Death Stranding', precio: 29.99, descuento: 40, categoria: 'Aventura', img: "/Taller3-React/imgs/DeathStranding.png" }
];

export const Articles = ({ setFavoritos, setCarrito }) => {
    return (
        <>
            <Box sx={{ px: 4, py: 6, backgroundColor: '#d8d8d8' }}>

                <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }} >
                    Artículos
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Encuentra los mejores títulos al mejor precio.
                </Typography>

                <Grid container spacing={3}>
                    {juegos.map((juego) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={juego.id}>
                            <Card sx={{
                            height: '100%',
                            boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
                            borderRadius: '10px',
                            transition: 'transform 0.2s',
                            '&:hover': { transform: 'scale(1.03)' }
                        }}>
                            <CardMedia
                                component="img"
                                height="160"
                                image={juego.img}
                                alt={juego.titulo}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Chip
                                    label={juego.categoria}
                                    size="small"
                                    sx={{ mb: 1, backgroundColor: '#212121', color: 'white' }}
                                />
                                <Typography variant="h6" fontWeight={700} sx={{ mb: 1, fontSize: '0.95rem' }}>
                                    {juego.titulo}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {juego.descuento > 0 && (
                                        <Chip label={`-${juego.descuento}%`} size="small" color="error" />
                                    )}
                                    <Typography variant="h6" color="primary" fontWeight={700}>
                                        {juego.precio === 0 ? 'Gratis' : `$${(juego.precio * (1 - juego.descuento / 100)).toFixed(2)}`}
                                    </Typography>
                                    {juego.descuento > 0 && (
                                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                                            ${juego.precio}
                                        </Typography>
                                    )}
                                </Box>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', gap: 1, px: 2, pb: 2 }}>

                                {/* Favoritos */}
                                <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={() => setFavoritos(prev => prev + 1)}
                                    sx={{
                                        borderColor: '#212121',
                                        color: '#212121',
                                        '&:hover': {
                                            backgroundColor: 'rgba(226, 43, 165, 0.1)',
                                            borderColor: 'rgb(226, 43, 165)',
                                            color: 'rgb(226, 43, 165)',
                                        }
                                    }}
                                >
                                    <FavoriteIcon fontSize="small" />
                                </Button>

                                {/* Agregar al carrito */}
                                <Button
                                    size="small"
                                    variant="contained"
                                    onClick={() => setCarrito(prev => prev + 1)}
                                    fullWidth
                                    sx={{
                                        backgroundColor: '#212121',
                                        '&:hover': {
                                            backgroundColor: 'rgb(180, 30, 130)',
                                        }
                                    }}
                                    startIcon={<AddShoppingCartIcon />}
                                >
                                    Agregar
                                </Button>

                            </CardActions>
                        </Card>
                        </Grid>
                    ))}
                </Grid>

            </Box>

        </>
    );
};