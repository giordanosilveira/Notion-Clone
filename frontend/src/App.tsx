import './App.css'

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-60 bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-4">📝 Espaço de Giordano</h2>
        <nav>
          <ul className="space-y-2">
            <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">📄 Página Inicial</li>
            <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">🔍 Buscar</li>
            <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">📄 Minhas Notas</li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Notion Clone</h1>
        <p className="text-gray-600">Selecione uma página na sidebar para começar.</p>
      </main>
    </div>
  )
}

export default App
