export function Login() {
  return (
    <main className="bg-primary flex flex-col px-12 items-center min-h-screen">
      <div className="mb-9 bg-white w-40 h-36 text-center">Logo</div>
      <div className="flex flex-col rounded-xl py-5 px-5 bg-white text-primary text-base font-medium">
        <h1 className="font-bold text-2xl text-center mb-5">Fazer login</h1>
        <label for="email">Email:</label>
        <input
          className="bg-primary rounded-md h-8 mb-2 opacity-30"
          type="email"
          id="email"
          name="email"
          required
        />

        <label for="password">Senha:</label>
        <input
          className="bg-primary rounded-md h-8 mb-2 opacity-30"
          type="password"
          id="password"
          name="password"
          required
        />

        <a href="#" className="text-sm font-normal ml-[2px] mb-2">
          Esqueceu a senha?
        </a>

        <button
          type="submit"
          className="bg-primary px-5 py-2 rounded-lg font-bold text-white text-xl"
        >
          Entrar
        </button>

        <p className="font-normal text-xs text-black mt-5">
          Não possui uma conta? <a className="text-primary" href="#">Criar agora</a>
        </p>
      </div>
    </main>
  );
}
