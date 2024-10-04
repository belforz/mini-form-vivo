// Definir um tipo para os temas

type Theme ={
    background:string;
    text:string;
    primary: string;
}

// Definir o ojeto dos temas

export const themes: Record<'light' | 'dark', Theme> = {
    light: {
        background:'#fffff',
        text: '#00000',
        primary: '#1e90ff',
    },
    dark:{
        background: '#4B006E',
        text: '#FFFFF',
        primary: '#83006A',
    }
}