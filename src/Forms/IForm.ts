enum Seg {
    'Academia',
    'Construtora/Obras',
    'Educação/Treinamentos',
    'Farmácia',
    'Indústria',
    'Loja Vestuário/Acessório',
    'Material de Construção',
    'Odontologia/Estética',
    'Oficina/Autocenter',
    'Padaria/Confeitaria',
    'Pet Shop/Clínica',
    'Prestação Serviço Geral',
    'Restaurante/Lanchonete',
    'Supermercado/Hotifruti',
    'Tecnologia',
    'Transporte Geral',
    'Outro'
}

enum Func {
    '1-5',
    '6-20',
    '21-50',
    '+50'
}

interface Imessage {
    Nome: string;
    Email: string;
    TelCel: string;
    Segmento: Seg;
    Empresa: string;
    Possui_nome: boolean;
    Funcionarios: Func;
    Mensagem: string;
    Whatsapp: boolean
}

interface IForms {
    from: string;
    to: string;
    message: Imessage;
}

export {IForms, Imessage}
