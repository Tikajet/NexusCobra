import React, { useState } from 'react';
import { 
  Users, DollarSign, CheckCircle2, AlertTriangle, Phone, MessageSquare, 
  TrendingUp, Calendar, FileText, Layers, ShieldAlert, BarChart3, Settings, LogOut, ArrowRight, Upload
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Sidebar - Identidade Visual NEXUS COB */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between">
        <div>
          <div className="p-5 border-b border-slate-800 flex items-center space-x-3">
            <div className="bg-blue-600 text-white font-black p-2 rounded-lg text-xl tracking-wider">
              NEXUS
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none text-white">NEXUS COB</h1>
              <p className="text-[10px] text-blue-400 font-medium tracking-tight mt-1">Gestão Inteligente</p>
            </div>
          </div>

          <nav className="p-3 space-y-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'clientes', label: 'Clientes', icon: Users },
              { id: 'pipeline', label: 'Pipeline Kanban', icon: Layers },
              { id: 'scripts', label: 'Scripts', icon: FileText },
              { id: 'importar', label: 'Importar Excel', icon: Upload },
              { id: 'config', label: 'Configurações', icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                    isActive 
                      ? 'bg-blue-600 text-white font-semibold' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center font-bold text-xs justify-center text-white">
              NC
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Gestor Financeiro</p>
              <p className="text-[10px] text-slate-400">admin@nexus.com</p>
            </div>
          </div>
          <LogOut size={16} className="text-slate-500 cursor-pointer hover:text-red-400 transition" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-950 p-6">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-6 bg-slate-900 border border-slate-800 p-4 rounded-xl">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Plataforma NEXUS COB
              <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-normal">
                Provedor de Internet
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Recuperação de Inadimplência e Negociação Automatizada</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-2 transition">
              <DollarSign size={15} /> Dar Baixa em Pagamento
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-4 py-2 rounded-lg flex items-center gap-2 transition">
              + Novo Cliente
            </button>
          </div>
        </header>

        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-xs text-slate-400">Total em Cobrança</span>
                <p className="text-2xl font-bold text-white mt-1">R$ 485.900,00</p>
                <span className="text-[11px] text-slate-500">1.250 Clientes Ativos</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-xs text-emerald-400 font-medium">Valor Recuperado</span>
                <p className="text-2xl font-bold text-emerald-400 mt-1">R$ 142.300,00</p>
                <span className="text-[11px] text-emerald-500/80">Recuperado no mês</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-xs text-blue-400 font-medium">Recebido Hoje</span>
                <p className="text-2xl font-bold text-blue-400 mt-1">R$ 12.450,00</p>
                <span className="text-[11px] text-blue-500/80">32 baixas confirmadas</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-xs text-amber-400 font-medium">Risco de Suspensão</span>
                <p className="text-2xl font-bold text-amber-400 mt-1">42 Clientes</p>
                <span className="text-[11px] text-amber-500/80">+60 dias de atraso</span>
              </div>
            </div>

            {/* Pipeline / Tabela Rápida */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center justify-between">
                <span>Clientes Prioritários para Cobrança</span>
                <span className="text-xs text-blue-400 hover:underline cursor-pointer">Ver todos</span>
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="p-3">Cliente</th>
                      <th className="p-3">Plano</th>
                      <th className="p-3">Dívida</th>
                      <th className="p-3">Dias Atraso</th>
                      <th className="p-3">Etapa Pipeline</th>
                      <th className="p-3 text-right">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {[
                      { name: 'Carlos Eduardo Silva', code: 'CLI-9921', plan: 'Fibra 500M', debt: '359,70', days: 42, stage: 'EM NEGOCIAÇÃO' },
                      { name: 'Ana Beatriz Souza', code: 'CLI-8812', plan: 'Fibra 300M', debt: '119,90', days: 12, stage: 'PRIMEIRO CONTATO' },
                      { name: 'Marcos Vinicius Santos', code: 'CLI-7721', plan: 'Fibra 1 Giga', debt: '890,00', days: 68, stage: 'RISCO CANCELAMENTO' },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/50 transition">
                        <td className="p-3 font-semibold text-white">{row.name} <span className="text-[10px] text-slate-500 block">{row.code}</span></td>
                        <td className="p-3">{row.plan}</td>
                        <td className="p-3 text-red-400 font-bold">R$ {row.debt}</td>
                        <td className="p-3"><span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/20">{row.days} dias</span></td>
                        <td className="p-3"><span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded">{row.stage}</span></td>
                        <td className="p-3 text-right">
                          <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-[11px] font-medium transition">
                            Atender Ficha
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'dashboard' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-400">
            <h3 className="text-lg font-bold text-white mb-2 uppercase">Módulo NEXUS COB: {activeTab}</h3>
            <p className="text-xs">Sistema operando com dados centralizados para o Provedor de Internet.</p>
          </div>
        )}
      </main>
    </div>
  );
}
