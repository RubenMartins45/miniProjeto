import React, { useState } from 'react';
import { userStats } from '@/utils/wasteTypes';
import { Button } from '@/components/ui/button';
import { FileText, Share, FileDown, Upload } from 'lucide-react';
import { toast } from 'sonner';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell
} from 'recharts';

// Mock data for charts
const monthlyData = [
  { name: 'Jan', plástico: 2, papel: 1.5, vidro: 1, metal: 0.5 },
  { name: 'Fev', plástico: 3, papel: 2, vidro: 1.5, metal: 1 },
  { name: 'Mar', plástico: 4, papel: 2.5, vidro: 2, metal: 1.5 },
  { name: 'Abr', plástico: 3.5, papel: 3, vidro: 1.8, metal: 1.2 },
  { name: 'Mai', plástico: 4.5, papel: 3.5, vidro: 2.5, metal: 2 },
  { name: 'Jun', plástico: 5, papel: 4, vidro: 3, metal: 2.5 },
];

const wasteDistribution = [
  { name: 'Plástico', value: 22 },
  { name: 'Papel', value: 16.5 },
  { name: 'Vidro', value: 11.8 },
  { name: 'Metal', value: 8.7 },
];

const COLORS = ['#3498db', '#f1c40f', '#2ecc71', '#95a5a6'];

const ImpactMetrics = () => {
  const [chartType, setChartType] = useState<'monthly' | 'distribution'>('monthly');

  const handleShareReport = () => {
    toast.success("Link de partilha gerado!", {
      description: "Use este link para partilhar o seu impacto com amigos.",
    });
  };

  const handleDownloadPDF = () => {
    toast.success("A gerar o relatório PDF...", {
      description: "O download do seu relatório começará em breve.",
    });
  };

  return (
    <div className="eco-card">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Relatório de Impacto</h2>
      </div>
      
      <div className="flex justify-between mb-6">
        <div className="space-y-1">
          <p className="text-sm font-medium">Total Reciclado</p>
          <p className="text-3xl font-bold text-primary">{userStats.totalRecycled} kg</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShareReport}>
            <Share className="h-4 w-4 mr-1" /> Partilhar
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownloadPDF}>
            <FileDown className="h-4 w-4 mr-1" /> PDF
          </Button>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="bg-muted p-1 rounded-lg flex gap-1 mb-4 w-fit">
          <Button 
            variant={chartType === 'monthly' ? "default" : "ghost"} 
            size="sm"
            onClick={() => setChartType('monthly')}
          >
            Mensal
          </Button>
          <Button 
            variant={chartType === 'distribution' ? "default" : "ghost"} 
            size="sm"
            onClick={() => setChartType('distribution')}
          >
            Por Tipo
          </Button>
        </div>
        
        <div className="h-[300px]">
          {chartType === 'monthly' ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="plástico" fill="#3498db" />
                <Bar dataKey="papel" fill="#f1c40f" />
                <Bar dataKey="vidro" fill="#2ecc71" />
                <Bar dataKey="metal" fill="#95a5a6" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wasteDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {wasteDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      
      <div className="border-t pt-4 mt-6">
        <h3 className="text-lg font-medium mb-3">Impacto Ambiental Estimado</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">CO₂ Evitado</p>
            <p className="text-xl font-bold">{userStats.impactData.co2} kg</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Água Poupada</p>
            <p className="text-xl font-bold">{userStats.impactData.water} L</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Energia Economizada</p>
            <p className="text-xl font-bold">{userStats.impactData.energy} kWh</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Equiv. Árvores</p>
            <p className="text-xl font-bold">{userStats.impactData.trees}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <Button className="w-full" variant="outline">
            <Upload className="h-4 w-4 mr-2" /> 
            Exportar dados completos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImpactMetrics;
