import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";

type AuthMode = "login" | "signup";

const GROUP_NAME = "Grupo 12";
// Deve ser igual a --transition-ms em style.css
const TRANSITION_MS = 500;

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

function UserIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="7.5" r="4.5" />
      <path d="M3 21c0-4.4 4-7 9-7s9 2.6 9 7z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <path d="M2 5h20v2.2l-10 6.3L2 7.2z" />
      <path d="M2 9.6l10 6.3 10-6.3V19H2z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg {...iconProps}>
      <path d="M7 10V7a5 5 0 0 1 10 0v3h1.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20.5v-9A1.5 1.5 0 0 1 5.5 10zm2.5 0h5V7a2.5 2.5 0 0 0-5 0z" />
    </svg>
  );
}

function Field({
  name,
  type = "text",
  placeholder,
  autoComplete,
  icon,
}: {
  name: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  icon: ReactNode;
}) {
  // A validação é a nativa do navegador ("Preencha este campo", "Inclua um @...")
  return (
    <div className="input-wrap">
      <input name={name} type={type} placeholder={placeholder} autoComplete={autoComplete} required aria-label={placeholder} />
      {icon}
    </div>
  );
}

function AuthForm({ mode, active }: { mode: AuthMode; active: boolean }) {
  const [status, setStatus] = useState("");
  const isLogin = mode === "login";

  // Protótipo: sem back-end, apenas simula o envio depois de validar os campos
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(isLogin ? "Login simulado com sucesso." : "Cadastro simulado com sucesso.");
    event.currentTarget.reset();
  };

  return (
    <section className={`form-pane ${mode} ${active ? "active" : ""}`} aria-hidden={!active}>
      <h1 className="form-title">{isLogin ? "Autenticação" : "Inscreva-se"}</h1>
      <form onSubmit={submit}>
        <Field name="username" placeholder="Username" autoComplete="username" icon={<UserIcon />} />
        {!isLogin && <Field name="email" type="email" placeholder="Email" autoComplete="email" icon={<MailIcon />} />}
        <Field
          name="password"
          type="password"
          placeholder="Password"
          autoComplete={isLogin ? "current-password" : "new-password"}
          icon={<LockIcon />}
        />
        {isLogin && (
          <button type="button" className="forgot">
            Esqueceu a Senha?
          </button>
        )}
        <button type="submit" className="btn-primary">
          {isLogin ? "Login" : "Cadastre-se"}
        </button>
        <p className="form-status" role="status">
          {status}
        </p>
      </form>
    </section>
  );
}

export default function App() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [covering, setCovering] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  // 1) painel cobre o card  2) troca a tela por baixo  3) painel desliza para o lado oposto
  const switchMode = (next: AuthMode) => {
    if (covering || next === mode) return;
    setCovering(true);
    timers.current.push(
      window.setTimeout(() => setMode(next), TRANSITION_MS),
      window.setTimeout(() => setCovering(false), TRANSITION_MS + 80),
    );
  };

  const isLogin = mode === "login";

  return (
    <main className="card">
      <AuthForm mode="login" active={isLogin && !covering} />
      <AuthForm mode="signup" active={!isLogin && !covering} />

      <aside className={`panel ${covering ? "cover" : mode}`}>
        <div className="panel-content">
          {isLogin ? (
            <>
              <h2 className="panel-title">Bem-vindo a solução do {GROUP_NAME}!</h2>
              <p className="panel-text">Sem conta? Cadastre-se agora!</p>
              <button type="button" className="btn-ghost" disabled={covering} onClick={() => switchMode("signup")}>
                Cadastre-se
              </button>
            </>
          ) : (
            <>
              <h2 className="panel-title">Bem-vindo de volta!</h2>
              <p className="panel-text">Já tem uma conta?</p>
              <button type="button" className="btn-ghost" disabled={covering} onClick={() => switchMode("login")}>
                Login
              </button>
            </>
          )}
        </div>
      </aside>
    </main>
  );
}
