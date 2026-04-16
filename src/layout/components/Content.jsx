import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const caracteristicas = [
  {
    titulo: 'Gestión desde móvil',
    descripcion: 'Administra tus productos desde cualquier dispositivo móvil en tiempo real.',
    img: 'imgs/mobile.png',
  },
  {
    titulo: 'Control de inventario',
    descripcion: 'Monitorea y gestiona tu stock con alertas automáticas de disponibilidad.',
    img: 'imgs/ControlInvetario.png',
  },
  {
    titulo: 'Análisis y reportes',
    descripcion: 'Visualiza estadísticas y métricas de tus ventas con gráficos detallados.',
    img: 'imgs/AnalisisReport.png',
  },
  {
    titulo: 'Catálogo de productos',
    descripcion: 'Organiza y exhibe tus productos de forma clara con búsqueda y categorización.',
    img: 'imgs/catalogoProducts.png',
  },
];

export const Content = () => {
  return (
    <Box sx={{ backgroundColor: '#d8d8d8', minHeight: '100vh' }}>
      {/* Banner Responsivo */}
      <Box sx={{ position: 'relative', width: '100%', height: { xs: '250px', md: '400px' } }}>
        <Box
          component="img"
          src='imgs/Banner.png'
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <Box sx={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }} />

        <Box sx={{
          position: 'absolute',
          bottom: { xs: 20, md: 40 },
          left: { xs: 20, md: 40 },
          color: 'white',
          pr: 2
        }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, fontSize: { xs: '0.7rem', md: '0.9rem' } }}>
            LANDING PAGE • TIENDA VIRTUAL
          </Typography>
          <Typography variant="h3" fontWeight={700} sx={{ mb: 1, fontSize: { xs: '1.8rem', md: '3rem' } }}>
            Tu tienda de videojuegos
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 500, fontSize: { xs: '0.9rem', md: '1rem' } }}>
            Los mejores juegos, periféricos y accesorios gamer con el mejor precio del mercado.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: { xs: 2, md: 4 }, py: 6 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            mb: 1,
            textAlign: { xs: 'center', md: 'left' },
            fontSize: { xs: '1.5rem', md: '2.125rem' } // Ajuste de tamaño en móvil
          }}
        >
          Características
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          Funciones esenciales para gestionar tus productos de forma clara y rápida.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {caracteristicas.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.titulo}>
              <Card sx={{
                height: '100%',
                maxWidth: 345,
                mx: 'auto',
                boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)' }
              }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={item.img}
                  alt={item.titulo}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                    {item.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.descripcion}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Repositorio */}
      <Box sx={{ px: { xs: 2, md: 4 }, pb: 8, display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '900px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <Typography variant="h4" fontWeight={800} sx={{ mb: 2, color: '#212121' }}>
            Explora el código del proyecto
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Este proyecto fue desarrollado con <strong>React</strong> y <strong>Material UI</strong> como una landing page moderna para administración de productos. Puedes revisar el código completo, aprender de su estructura o usarlo como base para tus propios proyectos.
          </Typography>

          <Button
            variant="contained"
            component="a"
            href="https://github.com/juangiraaaldo/Taller3-React"
            target="_blank"
            sx={{
              backgroundColor: '#f5f5f5',
              color: '#212121',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              textTransform: 'none',
              fontSize: '1rem',
              boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#ffffff',
                transform: 'scale(1.02)',
                boxShadow: '0px 6px 15px rgba(0,0,0,0.15)',
              },
              transition: 'all 0.2s ease'
            }}
          >
            Ver repositorio en GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  );
};