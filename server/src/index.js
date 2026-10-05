import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Rota Principal da API NEXUS COB
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', app: 'NEXUS COB API', timestamp: new Date() });
});

// Mock Dashboard Endpoint
app.get('/api/dashboard', (req, res) => {
  res.json({
    totalClients: 1250,
    totalDebt: 485900.00,
    recoveredAmount: 142300.00,
    negotiatedAmount: 89000.00,
    receivedToday: 12450.00,
    contactedClients: 820,
    pendingContact: 430,
    promisesKept: 110,
    promisesBroken: 14,
    activeAgreements: 95,
    brokenAgreements: 8,
    suspensionRisk: 42
  });
});

app.listen(PORT, () => {
  console.log(`NEXUS COB API rodando na porta ${PORT}`);
});
