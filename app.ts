
class Estoque {
    nomeProduto:string;
    idProduto: number; //inteiro
    tamAlt: number; 
    tamLarg: number;
    tamComp: number;
    cor: number; //código da cor. Ex: #3d3d3d
    qtd: number; //inteiro
    dataRecebido: Date;

    limiteQtd(){
        if(this.qtd<=5){//definir limite com o cliente
            console.log("Você precisa comprar mais "+ this.nomeProduto);//usar método que mande emails.
        }
    }
}


class Vendas extends Estoque {
    precoProduto:number; //tipo real
    dataEntrega:Date;
    qtdEntrega:number;
    constructor(precoProduto:number, dataEntrega:Date, qtdEntrega:number){
        super();
        this.precoProduto = precoProduto;
        this.dataEntrega = dataEntrega;
        this.qtdEntrega = qtdEntrega;
    }

    rastrear(){
        //ligar o gps com o id do produto        
    }
}


class HistoricoVendas extends Vendas{
    lucroMes(){
        if(this.dataEntrega<=30){//definir data com o cliente
            console.log("Esse é o lucro do produto "+this.nomeProduto+" no mês: "+this.qtdEntrega*this.precoProduto);
            //criar ação que salva o resultado em um banco de dados
        } else {
            console.log("Esse produto não faz parte dos lucros do mês");
        }
    }
    popProdutos(){
        if(this.dataEntrega<=30){//definir data com o cliente
            if(this.qtdEntrega=>1000){
                console.log("Produtos mais populares: "+this.nomeProduto);//achar um jeito de salvar os dados
                //no database pra poder puxar e comparar entre eles.
            }            
        } else {
            console.log("Esse produto não faz parte do mês");
        }
    }
    qtdTotal(){
        console.log(this.qtdEntrega+this.qtdEntrega);
    }
}

