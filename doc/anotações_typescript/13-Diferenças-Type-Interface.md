# DIFERENÇAS ENTRE OS MÉTODOS TYPE E INTERFACE 

1 - Contexto:

    Interface e type são usados para definir tipos em TypeScript. Ambos permitem descrever a estrutura de um objeto, mas type tem usos mais amplos.


┌──────────────────────┬────────────────────────────────┬──────────────────────────────┐
│ Aspecto             │ interface                      │ type                          │
├──────────────────────┼────────────────────────────────┼──────────────────────────────┤
│ Uso principal       │ Estrutura de objetos           │ Objetos + Tipos complexos     │
│ Extensibilidade     │ `extends`                      │ `&` (interseção)              │
│ Declaração múltipla │ Sim                            │ Não                           │
│ União de tipos      │ Não                            │ Sim (`|`)                     │
└──────────────────────┴────────────────────────────────┴──────────────────────────────┘
┌────────────┬──────────────────────────┬──────────────────────┐
│ Método    │ Exemplo com interface     │ Exemplo com type     │
├────────────┼──────────────────────────┼──────────────────────┤
│ Extensão   │ `interface A extends B`  │ `type A = B & {...}` │
└────────────┴──────────────────────────┴──────────────────────┘


3 - Exemplos de uso:

    3.1 - Interface - Usada para definir um objeto com propriedades bem definidas:

        interface Pessoa {
            nome: string;
            idade: number;
        }

        const usuario: Pessoa = {
            nome: "João",
            idade: 30
        };

    3.2 - type - Pode fazer o mesmo que interface, mas também pode criar tipos mais complexos:

        type Animal = {
            especie: string;
            idade: number;
        };

        const cachorro: Animal = {
            especie: "Canino",
            idade: 5
        };

        Além disso, podemos usar união de tipos, o que interface não permite:

            type ID = string | number;

            Obs.: Agora, ID pode ser string ou number.

        
4 - Extensão e Composição

    - A principal diferença é como cada um permite extensão:

        // Usando interface
        
        interface Funcionario extends Pessoa {
            cargo: string;
        }

        // Usando type (interseção)
        type Funcionario = Pessoa & { cargo: string };

    Ambos funcionam de maneira semelhante, mas type permite a interseção entre tipos distintos.

5 - Conclusão:

    Use interface quando quiser definir um objeto e permitir extensões naturais.

    Use type quando precisar de mais flexibilidade, como união (|), interseção (&) ou tipos primitivos.


