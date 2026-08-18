const projectsData = [
  {
    id: "calc-ds",
    title: "Calculadora com Estruturas de Dados",
    category: "Python & Algoritmos",
    year: "2026",
    tag: "Destaque",
    shortDesc: "Calculadora de alta precisão em Python utilizando Pilha (Stack), Fila (Queue), algoritmo Shunting Yard de Dijkstra e análise de complexidade assintótica O(n).",
    fullDesc: "Desenvolvida com foco em ciência da computação e eficiência algorítmica, esta aplicação processa expressões matemáticas complexas convertendo notação infixa para posfixa (Reverse Polish Notation) através do algoritmo Shunting Yard de Dijkstra. Implementa estruturas de dados personalizadas (Pilhas e Filas) com validação de sintaxe, suporte a operadores com precedência e avaliação em tempo linear O(n).",
    previewType: "code",
    previewSnippet: `class ShuntingYardCalculator:
    def __init__(self):
        self.operators = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}

    def parse_expression(self, expr: str) -> list:
        # Conversão de Infix para RPN usando Stacks & Queues (O(n))
        output_queue = Queue()
        operator_stack = Stack()
        ...`,
    technologies: ["Python", "Estruturas de Dados", "Shunting Yard", "Pilhas (Stack)", "Filas (Queue)", "Complexidade O(n)"],
    githubUrl: "https://github.com/Pxnzerr/calculadora-estruturas-de-dados",
    demoUrl: "https://github.com/Pxnzerr/calculadora-estruturas-de-dados"
  },
  {
    id: "eventpass",
    title: "EventPass - Gestão de Ingressos",
    category: "Java & Backend",
    year: "2026",
    tag: "Sistema CLI",
    shortDesc: "Sistema robusto de gestão de eventos com controle de lotes, emissão, venda e validação de ingressos com persistência e regras de negócio em Java.",
    fullDesc: "O EventPass é um sistema completo desenvolvido em Java voltado para a administração de eventos de médio e grande porte. Conta com controle de capacidade máxima por evento, gestão de lotes com precificação dinâmica, autenticação de organizadores, geração de códigos únicos de autenticação para bilhetagem e validação rápida em tempo real (check-in / anti-fraude).",
    previewType: "code",
    previewSnippet: `public class EventoService {
    private final Map<UUID, Ingresso> ingressosValidados = new ConcurrentHashMap<>();

    public boolean validarIngresso(String codigoHash) {
        // Validação com verificação de autenticidade e unicidade
        return ingressosValidados.computeIfAbsent(codigoHash, k -> new Ingresso(k)).isValid();
    }
}`,
    technologies: ["Java", "POO", "Gestão de Eventos", "CLI Architecture", "Segurança", "Validação"],
    githubUrl: "https://github.com/Pxnzerr/EventPass",
    demoUrl: "https://github.com/Pxnzerr/EventPass"
  },
  {
    id: "temp-sensor",
    title: "Controle de Sensor de Temperatura",
    category: "Java & Automação",
    year: "2026",
    tag: "POO Industrial",
    shortDesc: "Controlador de sensor de temperatura industrial em Java com alto grau de encapsulamento, monitoramento de limites e disparo de alertas.",
    fullDesc: "Projeto focado em boas práticas de Programação Orientada a Objetos (POO), modelando sensores industriais térmicos com restrições rigorosas de encapsulamento, estados operacionais, limites de tolerância crítica e sistema de alerta de superaquecimento ou falha de leitura em tempo real.",
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
    technologies: ["Java", "POO", "Encapsulamento", "Automação", "Engenharia de Software"],
    githubUrl: "https://github.com/Pxnzerr/Java_ControleDeTemperatura",
    demoUrl: "https://github.com/Pxnzerr/Java_ControleDeTemperatura"
  },
  {
    id: "laravel-app",
    title: "Plataforma Web Laravel MVC",
    category: "Full Stack / PHP",
    year: "2026",
    tag: "Web App",
    shortDesc: "Aplicação web desenvolvida com ecossistema Laravel, Blade templates, banco de dados relacional e arquitetura MVC moderna.",
    fullDesc: "Sistema estruturado em Laravel utilizando o padrão arquitetural MVC (Model-View-Controller). Implementa rotas RESTful, migrations de banco de dados, renderização dinâmica com Blade, autenticação e validação de formulários de ponta a ponta.",
    previewType: "code",
    previewSnippet: `class DashboardController extends Controller
{
    public function index()
    {
        $dados = Projeto::with(['categoria', 'autor'])->latest()->paginate(10);
        return view('dashboard.index', compact('dados'));
    }
}`,
    technologies: ["PHP", "Laravel", "Blade Engine", "MySQL", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/Pxnzerr/Laravel_test2",
    demoUrl: "https://github.com/Pxnzerr/Laravel_test2"
  },
  {
    id: "poo-csharp",
    title: "Sistema Empresarial POO em C#",
    category: "C# & .NET",
    year: "2026",
    tag: ".NET Core",
    shortDesc: "Modelagem e implementação de regras de negócio em C# .NET aplicando polimorfismo, interfaces e persistência relacional.",
    fullDesc: "Aplicação robusta em C# demonstrando domínio de conceitos avançados de orientação a objetos no ecossistema .NET, incluindo herança, interfaces, injeção de dependência e persistência de dados estruturados com separação limpa de camadas.",
    previewType: "code",
    previewSnippet: `public interface IRepository<T> where T : BaseEntity {
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> GetByIdAsync(int id);
    Task AddAsync(T entity);
}`,
    technologies: ["C#", ".NET", "POO Avançada", "LINQ", "Clean Code"],
    githubUrl: "https://github.com/Pxnzerr/POO-",
    demoUrl: "https://github.com/Pxnzerr/POO-"
  },
  {
    id: "jv-aeroporto",
    title: "JV Aeroporto - Sistema de Vôos",
    category: "Java & Logística",
    year: "2026",
    tag: "Logística",
    shortDesc: "Sistema de gerenciamento de tráfego aéreo, alocação de pistas de pouso/decolagem e controle de passageiros em Java.",
    fullDesc: "Simulador e gestor aeroportuário implementado em Java, controlando escalas de aeronaves, ocupação de portões de embarque, reservas de assentos e despacho de bagagens com tratamento completo de concorrência e exceções.",
    previewType: "code",
    previewSnippet: `public class AeroportoManager {
    private Queue<Voo> filaDecolagem = new LinkedList<>();
    
    public void autorizarProximaDecolagem() {
        Voo proximo = filaDecolagem.poll();
        if (proximo != null) proximo.executarDecolagem();
    }
}`,
    technologies: ["Java", "Algoritmos", "Filas de Prioridade", "POO"],
    githubUrl: "https://github.com/Pxnzerr/JV_Aeroporto",
    demoUrl: "https://github.com/Pxnzerr/JV_Aeroporto"
  },
  {
    id: "sql-projects",
    title: "Database Architecture & SQL Hub",
    category: "Banco de Dados",
    year: "2026",
    tag: "Database",
    shortDesc: "Repositório central de modelagens de banco de dados relacionais (DER), normalização até a 3ª FN e consultas SQL otimizadas.",
    fullDesc: "Coleção de modelos de banco de dados corporativos projetados com integridade referencial, triggers, stored procedures, índices de performance (B-Tree/Hash) e queries analíticas avançadas com múltiplos joins e agregação.",
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
    technologies: ["SQL", "MySQL", "PostgreSQL", "Modelagem Relacional", "Query Tuning"],
    githubUrl: "https://github.com/Pxnzerr/SQL-projects",
    demoUrl: "https://github.com/Pxnzerr/SQL-projects"
  },
  {
    id: "piano-macro",
    title: "Virtual Piano Sheet Macro",
    category: "Automação & Scripting",
    year: "2026",
    tag: "Automação",
    shortDesc: "Script de automação inteligente e parser de partituras para simulação de piano virtual com temporização milimétrica.",
    fullDesc: "Ferramenta de automação desenvolvida em linguagem de scripting para interpretação de partituras musicais em formato alfanumérico e reprodução precisa em teclados e pianos virtuais com controle de atrasos (latency compensation) e acentuações dinâmicas.",
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
    technologies: ["AutoHotkey", "Scripting", "Automação", "Timing Optimization"],
    githubUrl: "https://github.com/Pxnzerr/Virtual-Piano-Sheets-Macro-",
    demoUrl: "https://github.com/Pxnzerr/Virtual-Piano-Sheets-Macro-"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
