export class User {
    constructor(public id: string,
                public nomeCompleto: string,
                public nomeUsuario: string,
                public fotoUsuario: string,
                public senha: string,
                public email: string,
                public dataNascimento: string,
                public esporteFavorito: string
                ) {
    }
}
