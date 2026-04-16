import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export const Favorites = () => {
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
                    Mis Favoritos
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        mb: 4,
                        textAlign: { xs: 'center', md: 'left' }
                    }}
                >
                    Aqui podras visualizar todos los agregados a Mis Favoritos
                </Typography>
            </Box>
        </>
    )
}
