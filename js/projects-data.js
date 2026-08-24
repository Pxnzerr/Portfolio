const projectsData = [
  {
    id: "calc-ds",
    title: "Calculadora com Estruturas de Dados",
    category: "Python & Algoritmos",
    year: "2026",
    tag: "Destaque",
    shortDesc: "Calculadora em Python que avalia expressões matemáticas usando Pilhas, Filas e o algoritmo Shunting Yard.",
    fullDesc: "Aplicação desenvolvida em Python para avaliar expressões matemáticas convertendo a notação infixa tradicional para notação posfixa (Reverse Polish Notation) através do algoritmo Shunting Yard. Implementa estruturas de dados de Pilha e Fila para garantir a precedência correta de operadores e validação de sintaxe.",
    previewType: "code",
    previewSnippet: `class ShuntingYardCalculator:
    def __init__(self):
        self.operators = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}

    def parse_expression(self, expr: str) -> list:
        output_queue = Queue()
        operator_stack = Stack()
        ...`,
    technologies: ["Python", "Estruturas de Dados", "Shunting Yard", "Pilhas", "Filas"],
    githubUrl: "https://github.com/Pxnzerr/calculadora-estruturas-de-dados",
    demoUrl: "https://github.com/Pxnzerr/calculadora-estruturas-de-dados"
  },
  {
    id: "eventpass",
    title: "EventPass - Gestão de Ingressos",
    category: "Java & Backend",
    year: "2026",
    tag: "Sistema CLI",
    shortDesc: "Aplicação em Java para controle de lotes, emissão, venda e validação de ingressos de eventos.",
    fullDesc: "Sistema desenvolvido em Java voltado para gestão e bilhetagem de eventos. Inclui controle de capacidade por lote, cadastro de organizadores, geração de identificadores únicos para ingressos e rotina de validação e check-in.",
    previewType: "code",
    previewSnippet: `public class EventoService {
    private final Map<UUID, Ingresso> ingressosValidados = new ConcurrentHashMap<>();

    public boolean validarIngresso(String codigoHash) {
        return ingressosValidados.computeIfAbsent(codigoHash, k -> new Ingresso(k)).isValid();
    }
}`,
    technologies: ["Java", "POO", "Gestão de Eventos", "CLI", "Coleções Java"],
    githubUrl: "https://github.com/Pxnzerr/EventPass",
    demoUrl: "https://github.com/Pxnzerr/EventPass"
  },
  {
    id: "temp-sensor",
    title: "Controle de Sensor de Temperatura",
    category: "Java & Automação",
    year: "2026",
    tag: "POO Industrial",
    shortDesc: "Simulador de monitoramento térmico em Java com controle de limites operacionais e alertas.",
    fullDesc: "Projeto em Java para simular a leitura de sensores de temperatura, aplicando conceitos de orientação a objetos e encapsulamento. Monitora variações de temperatura e dispara alertas caso atinja limites críticos definidos.",
    previewType: "code",
    previewSnippet: `public class SensorTemperatura {
    private double temperaturaAtual;
    private final double LIMITE_CRITICO = 85.0;

    public void registrarLeitura(double leitura) {
        this.temperaturaAtual = leitura;
        if (this.temperaturaAtual >= LIMITE_CRITICO) {
            dispararAlertaSuperaquecimento();
        }
    }
}`,
    technologies: ["Java", "POO", "Encapsulamento", "Automação"],
    githubUrl: "https://github.com/Pxnzerr/Java_ControleDeTemperatura",
    demoUrl: "https://github.com/Pxnzerr/Java_ControleDeTemperatura"
  },
  {
    id: "laravel-app",
    title: "Plataforma Web Laravel MVC",
    category: "Full Stack / PHP",
    year: "2026",
    tag: "Web App",
    shortDesc: "Aplicação web desenvolvida com PHP, framework Laravel, Blade e banco de dados relacional.",
    fullDesc: "Projeto web estruturado no padrão MVC utilizando o framework Laravel. Conta com rotas RESTful, autenticação, templates dinâmicos com Blade Engine e integração com banco de dados via migrations e Eloquent ORM.",
    previewType: "code",
    previewSnippet: `class DashboardController extends Controller
{
    public function index()
    {
        $dados = Projeto::with(['categoria', 'autor'])->latest()->paginate(10);
        return view('dashboard.index', compact('dados'));
    }
}`,
    technologies: ["PHP", "Laravel", "Blade", "MySQL", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/Pxnzerr/Laravel_test2",
    demoUrl: "https://github.com/Pxnzerr/Laravel_test2"
  },
  {
    id: "poo-csharp",
    title: "Sistema Empresarial POO em C#",
    category: "C# & .NET",
    year: "2026",
    tag: ".NET Core",
    shortDesc: "Projeto em C# demonstrando modelagem de regras de negócio, interfaces e polimorfismo.",
    fullDesc: "Aplicação desenvolvida em C# (.NET) focada em princípios de orientação a objetos. Implementa interfaces, classes abstratas, herança, polimorfismo e manipulação de coleções com LINQ.",
    previewType: "code",
    previewSnippet: `public interface IRepository<T> where T : BaseEntity {
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> GetByIdAsync(int id);
    Task AddAsync(T entity);
}`,
    technologies: ["C#", ".NET", "POO", "LINQ"],
    githubUrl: "https://github.com/Pxnzerr/POO-",
    demoUrl: "https://github.com/Pxnzerr/POO-"
  },
  {
    id: "jv-aeroporto",
    title: "JV Aeroporto - Sistema de Vôos",
    category: "Java & Logística",
    year: "2026",
    tag: "Logística",
    shortDesc: "Sistema em Java para simulação e gerenciamento de escalas de vôos, passageiros e pistas.",
    fullDesc: "Simulador de operações aeroportuárias em Java, com controle de filas para pousos e decolagens, gerenciamento de reservas de passageiros e status de escalas.",
    previewType: "code",
    previewSnippet: `public class AeroportoManager {
    private Queue<Voo> filaDecolagem = new LinkedList<>();
    
    public void autorizarProximaDecolagem() {
        Voo proximo = filaDecolagem.poll();
        if (proximo != null) proximo.executarDecolagem();
    }
}`,
    technologies: ["Java", "POO", "Estruturas de Dados", "Filas"],
    githubUrl: "https://github.com/Pxnzerr/JV_Aeroporto",
    demoUrl: "https://github.com/Pxnzerr/JV_Aeroporto"
  },
  {
    id: "sql-projects",
    title: "Database Architecture & SQL Hub",
    category: "Banco de Dados",
    year: "2026",
    tag: "Database",
    shortDesc: "Modelagens de banco de dados relacional, diagramas entidade-relacionamento e consultas SQL.",
    fullDesc: "Repositório com esquemas de banco de dados relacionais, normalização de tabelas (1FN a 3FN), criação de tabelas com chaves estrangeiras e scripts de consultas com joins, agrupamentos e filtros analíticos.",
    previewType: "code",
    previewSnippet: `SELECT 
    c.nome AS cliente,
    COUNT(p.id) AS total_pedidos,
    SUM(p.valor_total) AS faturamento
FROM clientes c
INNER JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nome
HAVING total_pedidos > 5
ORDER BY faturamento DESC;`,
    technologies: ["SQL", "MySQL", "PostgreSQL", "Modelagem de Dados"],
    githubUrl: "https://github.com/Pxnzerr/SQL-projects",
    demoUrl: "https://github.com/Pxnzerr/SQL-projects"
  },
  {
    id: "piano-macro",
    title: "Virtual Piano Sheet Macro",
    category: "Automação & Scripting",
    year: "2026",
    tag: "Automação",
    shortDesc: "Script de automação em AutoHotkey para reprodução sequencial de partituras em teclado virtual.",
    fullDesc: "Script desenvolvido para leitura e execução de sequências de notas musicais em formato alfanumérico, automatizando toques de teclado em pianos virtuais com controle de temporização.",
    previewType: "code",
    previewSnippet: `; AutoHotkey Precision Macro Player
SetKeyDelay, 45, 15
PlaySheet(notes) {
    Loop, Parse, notes
    {
        SendInput, %A_LoopField%
        Sleep, 30
    }
}`,
    technologies: ["AutoHotkey", "Scripting", "Automação"],
    githubUrl: "https://github.com/Pxnzerr/Virtual-Piano-Sheets-Macro-",
    demoUrl: "https://github.com/Pxnzerr/Virtual-Piano-Sheets-Macro-"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
