import { FormEvent, ReactNode, useState } from "react";

type AuthMode = "login" | "signup";

function Mark({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="Lumina">
      <span
        className={`mark-grid grid size-10 place-items-center ${
          inverse ? "bg-paper text-ink" : "bg-ink text-paper"
        }`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M5 17V7l7 7 7-7v10"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </span>
      <span className={`text-lg font-extrabold tracking-tight ${inverse ? "text-paper" : "text-ink"}`}>
        lumina<span className="text-signal">/</span>
      </span>
    </div>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none">
      {open ? (
        <>
          <path d="M3 12s3.3-6 9-6 9 6 9 6-3.3 6-9 6-9-6-9-6Z" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7" />
        </>
      ) : (
        <path
          d="m4 4 16 16M9.8 6.3A8.8 8.8 0 0 1 12 6c5.7 0 9 6 9 6a13 13 0 0 1-2.4 3.2M6.3 7.7A14 14 0 0 0 3 12s3.3 6 9 6c1 0 2-.2 2.8-.5M10.6 10.6a2 2 0 0 0 2.8 2.8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.5-.2-2.2H12v4.3h5.4a4.7 4.7 0 0 1-2 3v2.8h3.5c2-1.9 3.2-4.6 3.2-7.9Z" />
      <path fill="#34A853" d="M12 22c2.9 0 5.3-.9 7-2.6l-3.4-2.8c-1 .6-2.2 1-3.6 1a6.2 6.2 0 0 1-5.8-4.3H2.6v2.8A10.6 10.6 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.2 13.3a6.4 6.4 0 0 1 0-4V6.5H2.6a10.5 10.5 0 0 0 0 9.6l3.6-2.8Z" />
      <path fill="#EA4335" d="M12 5.2c1.6 0 3 .6 4.1 1.6l3.1-3A10.3 10.3 0 0 0 2.6 6.5l3.6 2.8A6.2 6.2 0 0 1 12 5.2Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  value,
  error,
  onChange,
  action,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  action?: ReactNode;
}) {
  return (
    <label className="field group block">
      <span className="mb-2 flex items-center justify-between text-xs font-extrabold uppercase tracking-widest text-ink">
        {label}
        {error && <span className="normal-case tracking-normal text-danger">{error}</span>}
      </span>
      <span className="relative block">
        <input
          name={name}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`h-13 w-full border-0 border-b-2 bg-transparent px-0 text-base font-semibold text-ink outline-none transition-all placeholder:font-normal placeholder:text-muted/50 ${
            action ? "pr-11" : ""
          } ${error ? "border-danger" : "border-line focus:border-blue"}`}
        />
        {action}
        <span className="field-pulse absolute bottom-0 left-0 h-0.5 w-0 bg-blue transition-all duration-500 group-focus-within:w-full" />
      </span>
      {error && <span id={`${name}-error`} className="sr-only">{error}</span>}
    </label>
  );
}

function WorkspaceScene() {
  return (
    <section className="scene relative hidden min-h-screen overflow-hidden bg-blue text-paper lg:block" aria-label="Visão geral do produto">
      <div className="scene-grid absolute inset-0" />
      <div className="scene-top absolute left-10 right-10 top-9 z-20 flex items-center justify-between">
        <Mark inverse />
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-paper/65">
          workspace 04 — online
        </span>
      </div>

      <div className="kinetic-word absolute inset-x-0 top-[15%] overflow-hidden border-y border-paper/20 py-2">
        <div className="marquee-track whitespace-nowrap text-[clamp(5rem,10vw,10rem)] font-black uppercase leading-none tracking-[-0.08em] text-paper/10">
          CLAREZA EM MOVIMENTO — CLAREZA EM MOVIMENTO —
        </div>
      </div>

      <div className="scene-copy absolute bottom-12 left-10 z-20 max-w-sm xl:left-14">
        <p className="mb-5 font-mono text-xs font-bold uppercase tracking-widest text-signal">
          [ menos ruído, mais avanço ]
        </p>
        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight xl:text-5xl">
          Seu trabalho, no ritmo das suas ideias.
        </h1>
      </div>

      <div className="board absolute left-[17%] top-[31%] z-10 w-[68%] max-w-2xl rotate-[-2deg] bg-paper p-5 text-ink shadow-editorial xl:left-[20%] xl:w-[62%]">
        <div className="mb-5 flex items-center justify-between border-b border-ink/15 pb-4">
          <div>
            <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-muted">Sprint atual</p>
            <p className="mt-1 text-xl font-extrabold">Semana de produto</p>
          </div>
          <div className="live-indicator flex items-center gap-2 text-xs font-bold">
            <span className="size-2 bg-success" />
            AO VIVO
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            ["01", "Pesquisa", "Concluído"],
            ["02", "Protótipo", "Em curso"],
            ["03", "Entrega", "A seguir"],
          ].map(([number, title, status], index) => (
            <div
              key={number}
              className={`task-card border border-ink/15 p-4 ${index === 1 ? "bg-signal" : "bg-paper"}`}
              style={{ animationDelay: `${0.45 + index * 0.12}s` }}
            >
              <span className="font-mono text-xs font-bold text-muted">{number}</span>
              <p className="mt-8 text-sm font-extrabold">{title}</p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wide text-muted">{status}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4 border-t border-ink/15 pt-4">
          <span className="font-mono text-xs font-bold">68%</span>
          <div className="h-1.5 flex-1 bg-ink/10">
            <div className="progress-line h-full bg-blue" />
          </div>
          <span className="text-xs text-muted">8 de 12 ações</span>
        </div>
      </div>

      <div className="floating-note absolute right-[5%] top-[25%] z-20 w-36 rotate-6 bg-signal p-4 text-ink shadow-editorial">
        <span className="font-mono text-xs font-bold">NOTA/07</span>
        <p className="mt-7 text-sm font-extrabold leading-tight">O próximo passo já está claro.</p>
      </div>

      <div className="orbit absolute left-[8%] top-[44%] z-20 grid size-28 place-items-center rounded-full border border-paper/30">
        <span className="orbit-dot absolute size-3 bg-signal" />
        <svg viewBox="0 0 64 64" className="size-14 animate-spin-slow" aria-hidden="true">
          <path d="M32 8v48M8 32h48M15 15l34 34M49 15 15 49" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>

      <p className="absolute bottom-12 right-10 z-20 font-mono text-[0.65rem] uppercase leading-relaxed tracking-widest text-paper/60 [writing-mode:vertical-rl]">
        organize · avance · repita
      </p>
    </section>
  );
}

export default function App() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailError = submitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "E-mail inválido" : "";
  const passwordError = submitted && password.length < 8 ? "Mínimo de 8 caracteres" : "";
  const nameError = submitted && mode === "signup" && name.trim().length < 2 ? "Nome muito curto" : "";
  const passwordStrength = Math.min(3, Math.floor(password.length / 3));

  const switchMode = (next: AuthMode) => {
    setMode(next);
    setSubmitted(false);
    setSuccess(false);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password.length >= 8;
    if (valid && (mode === "login" || name.trim().length >= 2)) setSuccess(true);
  };

  return (
    <main className="min-h-screen bg-paper text-ink lg:grid lg:grid-cols-[minmax(27rem,0.8fr)_minmax(38rem,1.2fr)]">
      <section className="flex min-h-screen flex-col px-5 py-5 sm:px-10 sm:py-8 lg:px-12 xl:px-20">
        <header className="flex items-center justify-between">
          <Mark />
          <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-muted">
            acesso seguro / 256-bit
          </span>
        </header>

        <div className="mx-auto flex w-full max-w-md flex-1 items-center py-12">
          <div className="w-full">
            <nav className="mb-12 flex border-b border-line" aria-label="Tipo de acesso">
              {(["login", "signup"] as AuthMode[]).map((item, index) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => switchMode(item)}
                  className={`relative flex-1 pb-4 text-left text-sm font-extrabold transition-colors ${
                    mode === item ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                  aria-current={mode === item ? "page" : undefined}
                >
                  <span className="mr-2 font-mono text-[0.65rem] text-muted">0{index + 1}</span>
                  {item === "login" ? "Entrar" : "Criar conta"}
                  {mode === item && <span className="tab-line absolute -bottom-px left-0 h-0.5 w-full bg-blue" />}
                </button>
              ))}
            </nav>

            {success ? (
              <div className="success-reveal" role="status">
                <div className="mb-7 grid size-16 place-items-center bg-signal text-ink">
                  <CheckIcon />
                </div>
                <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-blue">Acesso confirmado</p>
                <h2 className="text-4xl font-extrabold tracking-tight">
                  {mode === "login" ? "Bom ter você de volta." : "Seu espaço está pronto."}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  {mode === "login" ? "Organizando seu ambiente de trabalho..." : "Enviamos a confirmação para o seu e-mail."}
                </p>
                <div className="mt-8 h-1 w-full overflow-hidden bg-line">
                  <span className="loading-line block h-full bg-blue" />
                </div>
                <button type="button" onClick={() => setSuccess(false)} className="mt-6 text-sm font-bold underline decoration-signal decoration-4 underline-offset-4">
                  Voltar ao formulário
                </button>
              </div>
            ) : (
              <div key={mode} className="form-reveal">
                <div className="mb-9">
                  <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-blue">
                    {mode === "login" ? "Continue de onde parou" : "Seu ponto de partida"}
                  </p>
                  <h2 className="max-w-sm text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                    {mode === "login" ? "Que bom ver você por aqui." : "Faça espaço para o que importa."}
                  </h2>
                </div>

                <form onSubmit={submit} noValidate className="space-y-7">
                  {mode === "signup" && (
                    <Field label="Seu nome" name="name" placeholder="Como podemos chamar você?" autoComplete="name" value={name} onChange={setName} error={nameError} />
                  )}
                  <Field label="E-mail" name="email" type="email" placeholder="voce@exemplo.com" autoComplete="email" value={email} onChange={setEmail} error={emailError} />
                  <div>
                    <Field
                      label="Senha"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mínimo de 8 caracteres"
                      autoComplete={mode === "login" ? "current-password" : "new-password"}
                      value={password}
                      onChange={setPassword}
                      error={passwordError}
                      action={
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                          className="absolute inset-y-0 right-0 grid w-10 place-items-center text-muted transition hover:text-blue focus-visible:outline-2 focus-visible:outline-blue"
                        >
                          <EyeIcon open={showPassword} />
                        </button>
                      }
                    />
                    {mode === "signup" && password && (
                      <div className="mt-3 flex items-center gap-2" aria-label={`Força da senha: ${passwordStrength} de 3`}>
                        {[1, 2, 3].map((level) => (
                          <span key={level} className={`h-1 flex-1 transition-colors duration-500 ${level <= passwordStrength ? "bg-blue" : "bg-line"}`} />
                        ))}
                        <span className="ml-1 font-mono text-[0.65rem] font-bold uppercase text-muted">
                          {passwordStrength < 2 ? "fraca" : passwordStrength === 2 ? "boa" : "forte"}
                        </span>
                      </div>
                    )}
                  </div>

                  {mode === "login" ? (
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <label className="flex cursor-pointer items-center gap-3 text-muted">
                        <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} className="peer sr-only" />
                        <span className="grid size-5 place-items-center border-2 border-line bg-transparent transition peer-checked:border-blue peer-checked:bg-blue peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue">
                          {remember && <CheckIcon />}
                        </span>
                        Manter acesso
                      </label>
                      <button type="button" className="font-bold underline decoration-line decoration-2 underline-offset-4 transition hover:decoration-signal">
                        Recuperar senha
                      </button>
                    </div>
                  ) : (
                    <p className="text-xs leading-relaxed text-muted">
                      Ao continuar, você aceita os <button type="button" className="font-bold text-ink underline underline-offset-2">Termos</button> e a <button type="button" className="font-bold text-ink underline underline-offset-2">Política de Privacidade</button>.
                    </p>
                  )}

                  <button type="submit" className="primary-action group relative flex h-14 w-full items-center justify-between overflow-hidden bg-ink px-5 text-sm font-extrabold text-paper transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue">
                    <span className="action-wipe absolute inset-0 -translate-x-full bg-blue transition-transform duration-500 group-hover:translate-x-0" />
                    <span className="relative">{mode === "login" ? "Entrar na minha conta" : "Criar meu espaço"}</span>
                    <span className="relative grid size-8 place-items-center bg-paper text-ink transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">↗</span>
                  </button>

                  <div className="flex items-center gap-4">
                    <span className="h-px flex-1 bg-line" />
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-muted">ou</span>
                    <span className="h-px flex-1 bg-line" />
                  </div>

                  <button type="button" className="flex h-13 w-full items-center justify-center gap-3 border-2 border-line bg-transparent text-sm font-extrabold transition hover:-translate-y-1 hover:border-ink hover:shadow-offset focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue">
                    <GoogleIcon />
                    Continuar com Google
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        <footer className="flex items-center justify-between border-t border-line pt-5 font-mono text-[0.65rem] uppercase tracking-widest text-muted">
          <span>© 2025 Lumina</span>
          <span>Feito para avançar</span>
        </footer>
      </section>
      <WorkspaceScene />
    </main>
  );
}
