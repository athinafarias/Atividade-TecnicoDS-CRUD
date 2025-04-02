// É criada uma IIFE, executada assim que for definida
//IIFE: Garante que o código execute corretamente as operações assíncronas do Sequelize

(async () => {
    const database = require('./db');
    const Product = require('./product');

    try {
        // ** Sync
        const result = await database.sync(); //Verifica se as tabelas no banco de dados correspondem aos modelos, se alguma não existir, o Sequelize a cria
        console.log('Banco de dados sincronizado:', result); //Mostra o resultado da sincronização

        // ** Create
            const resultCreate = await Product.create({  //Função de inserção de dados, com o produto como parâmetro
                name: 'Disco de Vinil',  
                value: 20,
                description: 'Um disco do álbum Arcadia'
            })
            console.log('Produto criado:', resultCreate);

        // ** Read
            //Buscar todos os produtos (READ - FindAll)
            const products = await Product.findAll();
            console.log('Lista de produtos:', products);

        // ** Update
            //Buscar um produto específico pelo ID (READ - FindByPk)
            const produto = await Product.findByPk(1); //Para mudar uma caracteristica, precisamos localizar o objeto
            ////console.log('Produto encontrado:', produto);
            products.name = 'Disco' //Altera o nome do produto
            
            const resultSave = await produto.save(); //Salva as alterações no banco de dados, gerando um UPDATE na tabela
            console.log('Produto atualizado:', resultSave); //Exibe no console o resultado do salvamento

        // ** Delete
            // Deletar diretamente pelo modelo usando um filtro
            Product.destroy({ where: { id: 1 } }); 

            // ou

            // Deletar primeiro buscando o produto pelo ID
            const product = await Product.findByPk(1); 
            // E depois chamando a função destroy() do próprio objeto recuperado
            product.destroy();

    } catch (error) {
        console.log('Erro:', error); //Se houver erro, ele será capturado pelo catch e impresso no console
    }
}) ();